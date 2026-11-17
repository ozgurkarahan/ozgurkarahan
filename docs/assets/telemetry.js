/*
 * Owner-only analytics for ozgurkarahan.com. See https://ozgurkarahan.com/privacy/.
 *
 * No SDK and no cookies. Nothing is sent unless the page is served from ozgurkarahan.com
 * itself (so local previews and forks send nothing), and nothing is sent when Global Privacy
 * Control, Do Not Track or the site opt-out is set. Only the page path, the referring site
 * (domain only, or the path when it is a page of this site), allowlisted UTM values, outbound
 * link clicks, clicks on the featured project links of the home page, the building block opened
 * from a same-page link (and from where: diagram, block bar, menu, opening or page), clicks on
 * work cards (which card, which block, on or off the site) and deck slide views are recorded.
 * Items go to Azure Application Insights with navigator.sendBeacon; failures are ignored so
 * navigation never depends on analytics.
 *
 * The instrumentation key is public by design: browsers cannot authenticate.
 */
(function () {
  "use strict";

  var IKEY = "9826f519-9441-42e8-8f60-17224f150fce";
  var ENDPOINT = "https://swedencentral-0.in.applicationinsights.azure.com/v2/track";
  var OPT_OUT_KEY = "site-analytics-opt-out";
  var ON_SITE = /^(www\.)?ozgurkarahan\.com$/.test(window.location.hostname);
  var UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  var MAX_VALUE_LENGTH = 100;
  // Same-page anchors counted as block_nav: the five blocks, the diagram itself, About and Contact.
  var BLOCK_TARGETS = ["voice", "distribution", "context", "identity", "governance", "contact", "about", "stack"];
  // Links one page view with the clicks made on that page. In memory only; never stored.
  var pageLoadId = Math.random().toString(16).slice(2) + Date.now().toString(16);

  function browserSignal() {
    try {
      if (navigator.globalPrivacyControl === true) return true;
      var dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
      return dnt === "1" || dnt === "yes";
    } catch (error) {
      return true;
    }
  }

  function readOptOut() {
    if (browserSignal()) return true;
    try {
      return window.localStorage.getItem(OPT_OUT_KEY) === "1";
    } catch (error) {
      // Storage blocked or unavailable: stay on the safe side.
      return true;
    }
  }

  var disabled = !ON_SITE || readOptOut();

  function clip(value) {
    return String(value || "").replace(/\s+/g, " ").trim().slice(0, MAX_VALUE_LENGTH);
  }

  function campaign() {
    var values = {};
    try {
      var params = new URLSearchParams(window.location.search);
      UTM_KEYS.forEach(function (key) {
        var value = params.get(key);
        if (value) values[key] = clip(value);
      });
    } catch (error) { /* ignore */ }
    return values;
  }

  function referrer() {
    try {
      if (!document.referrer) return "";
      var url = new URL(document.referrer);
      return url.origin === window.location.origin ? url.pathname : url.origin;
    } catch (error) {
      return "";
    }
  }

  function send(type, baseType, baseData) {
    if (disabled) return;
    var body = JSON.stringify([{
      name: "Microsoft.ApplicationInsights." + IKEY.replace(/-/g, "") + "." + type,
      time: new Date().toISOString(),
      iKey: IKEY,
      tags: {
        "ai.operation.id": pageLoadId,
        "ai.operation.name": window.location.pathname,
        "ai.internal.sdkVersion": "site-beacon:1"
      },
      data: { baseType: baseType, baseData: baseData }
    }]);
    try {
      // A string body is sent as text/plain, so the browser needs no CORS preflight.
      if (navigator.sendBeacon && navigator.sendBeacon(ENDPOINT, body)) return;
    } catch (error) { /* fall back to fetch */ }
    try {
      fetch(ENDPOINT, {
        method: "POST",
        body: body,
        keepalive: true,
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=UTF-8" }
      }).catch(function () { /* ignore */ });
    } catch (error) { /* ignore */ }
  }

  function pageView() {
    var properties = campaign();
    properties.referrer = referrer();
    send("Pageview", "PageviewData", {
      ver: 2,
      name: clip(document.title),
      url: window.location.origin + window.location.pathname,
      properties: properties
    });
  }

  function trackEvent(name, properties) {
    var clean = {};
    Object.keys(properties || {}).forEach(function (key) { clean[key] = clip(properties[key]); });
    send("Event", "EventData", { ver: 2, name: name, properties: clean });
  }

  function blockSource(link) {
    if (link.closest("nav.arch")) return "diagram";
    if (link.closest("nav.rail")) return "rail";
    if (link.closest(".masthead .primary-nav")) return "nav";
    if (link.closest(".opening-actions")) return "opening";
    return "page";
  }

  // A plain click on a link that only moves within this page, to one of the BLOCK_TARGETS.
  // Links that load another page, or open one in a new tab or window, are not counted.
  function trackBlockNav(event, link, url) {
    if (event.type !== "click" || event.button !== 0) return;
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (link.target && link.target !== "_self") return;
    var here = window.location;
    if (url.origin !== here.origin || url.pathname !== here.pathname || url.search !== here.search) return;
    var target = url.hash.slice(1);
    if (BLOCK_TARGETS.indexOf(target) === -1) return;
    trackEvent("block_nav", { target: target, source: blockSource(link) });
  }

  function onLinkActivated(event) {
    if (event.type === "auxclick" && event.button !== 1) return;
    var link = event.target && event.target.closest ? event.target.closest("a[href]") : null;
    if (!link) return;
    var url;
    try { url = new URL(link.href, window.location.href); } catch (error) { return; }
    var section = link.closest("[id]");
    trackBlockNav(event, link, url);
    // Work cards and the lead card carry data-work; counted whether the link stays on this site or not.
    var work = link.closest("li.topic-card[data-work], .lead-card[data-work]");
    if (work) {
      var layer = link.closest("section.layer");
      trackEvent("card_click", {
        work: work.getAttribute("data-work"),
        block: layer ? layer.id : "",
        destination: url.origin === window.location.origin ? "onsite" : "offsite"
      });
    }
    // Featured project links are counted the same way whether they stay on this site or not.
    var flagship = link.closest("[data-flagship]");
    if (flagship) {
      trackEvent("flagship_click", {
        product: flagship.getAttribute("data-flagship"),
        section: section ? section.id : ""
      });
    }
    if (url.origin === window.location.origin || !/^https?:$/.test(url.protocol)) return;
    var card = link.closest(".topic-card");
    var cardTitle = card && card.querySelector("h3");
    trackEvent("outbound_click", {
      destination: url.origin + url.pathname,
      host: url.host,
      section: section ? section.id : "",
      card: cardTitle ? cardTitle.textContent : "",
      // innerText skips hidden SVG titles; gallery cards are labelled by their heading.
      label: cardTitle ? cardTitle.textContent : (link.innerText || link.textContent)
    });
  }

  window.siteAnalytics = {
    isEnabled: function () { return !disabled; },
    hasBrowserSignal: browserSignal,
    trackEvent: trackEvent,
    optOut: function () {
      try { window.localStorage.setItem(OPT_OUT_KEY, "1"); } catch (error) { /* ignore */ }
      disabled = true;
    },
    optIn: function () {
      try { window.localStorage.removeItem(OPT_OUT_KEY); } catch (error) { /* ignore */ }
      disabled = !ON_SITE || readOptOut();
    }
  };

  document.addEventListener("click", onLinkActivated, true);
  document.addEventListener("auxclick", onLinkActivated, true);
  pageView();
})();
