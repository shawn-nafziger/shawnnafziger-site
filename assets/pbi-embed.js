/* Power BI embeds.
   Markup:  <div class="pbi-frame" data-src="https://app.powerbi.com/view?r=..." data-img="phone.png" data-title="NBA Game Overview"></div>
   - data-src: the "Publish to web" link from Power BI (File > Embed report > Publish to web). Leave empty for a placeholder.
     Publish to web makes the report public to anyone with the link, so only public data (NBA stats, NOAA) goes here.
   - data-img (optional): a screenshot shown on phones (680 px and narrower) instead of the live report, with a link to open it.
     Power BI reports are built for a wide canvas and are hard to use at phone width (playbook §6.4).
   - The live report only loads when it scrolls near the screen, so the page itself stays fast. */
(function () {
  var ALLOWED = /^https:\/\/app\.powerbi\.com\/(view|reportEmbed)\?/;
  var phone = window.matchMedia ? window.matchMedia("(max-width: 680px)") : { matches: false };

  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (text) n.textContent = text;
    return n;
  }

  function render(box) {
    var src = (box.dataset.src || "").trim();
    var img = (box.dataset.img || "").trim();
    var title = box.dataset.title || "Power BI report";
    box.textContent = "";
    var meta = box.parentNode.querySelector(".pbi-open");

    if (!src || !ALLOWED.test(src)) {
      var empty = el("div", { class: "pbi-empty" });
      empty.appendChild(el("b", {}, title));
      empty.appendChild(el("span", {}, "Live report coming soon."));
      box.appendChild(empty);
      if (meta) meta.hidden = true;
      return;
    }
    if (meta) { meta.hidden = false; meta.href = src; }

    if (phone.matches && img) {
      var a = el("a", { href: src, target: "_blank", rel: "noopener", "aria-label": "Open the interactive " + title });
      a.appendChild(el("img", { src: img, alt: "Screenshot of the " + title + " report", loading: "lazy" }));
      box.appendChild(a);
      return;
    }
    box.appendChild(el("iframe", { src: src, title: title, loading: "lazy", allowfullscreen: "" }));
  }

  function init() {
    var boxes = document.querySelectorAll(".pbi-frame");
    boxes.forEach(render);
    if (phone.addEventListener) phone.addEventListener("change", function () { boxes.forEach(render); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
