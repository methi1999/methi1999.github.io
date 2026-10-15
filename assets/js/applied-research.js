/* Pipeline latent-grid animations from descriptinc/uvm-v2 and video-regenerate. */
(function () {
  "use strict";

  var root = document.querySelector(".applied");
  if (!root) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  (function audioBars() {
    var latent = document.getElementById("audioLatentGrid");
    var gen = document.getElementById("audioGenGrid");
    var heights = [100, 100, 100, 100, 100, 100];
    var maskIdx = [2, 3];

    function makeBar() {
      var bar = document.createElement("i");
      bar.style.height = "100%";
      return bar;
    }

    if (latent) heights.forEach(function () { latent.appendChild(makeBar()); });
    if (gen) {
      var masks = [];
      heights.forEach(function (_, i) {
        var bar = makeBar();
        if (maskIdx.indexOf(i) !== -1) {
          bar.classList.add("is-mask");
          masks.push(bar);
        }
        gen.appendChild(bar);
      });
      if (!reduceMotion && masks.length) {
        setInterval(function () {
          masks.forEach(function (m, idx) {
            setTimeout(function () {
              m.classList.add("is-filled");
              setTimeout(function () { m.classList.remove("is-filled"); }, 900);
            }, idx * 180);
          });
        }, 2600);
      }
    }
  })();

  (function videoFrames() {
    var latent = document.getElementById("videoLatentGrid");
    var gen = document.getElementById("videoGenGrid");
    var K = 4;

    function makeFrame(masked) {
      var f = document.createElement("span");
      f.className = "pframe";
      var low = document.createElement("span");
      low.className = "pframe__low" + (masked ? " is-mask" : "");
      f.appendChild(low);
      return f;
    }

    if (latent) {
      for (var i = 0; i < K; i++) latent.appendChild(makeFrame(false));
    }
    if (gen) {
      var lows = [];
      for (var j = 0; j < K; j++) {
        var f = makeFrame(true);
        lows.push(f.querySelector(".pframe__low"));
        gen.appendChild(f);
      }
      if (!reduceMotion) {
        setInterval(function () {
          lows.forEach(function (m, idx) {
            setTimeout(function () {
              m.classList.add("is-filled");
              setTimeout(function () { m.classList.remove("is-filled"); }, 900);
            }, idx * 180);
          });
        }, 2600);
      }
    }
  })();

  (function forcedAlignment() {
    var svg = document.getElementById("alignFig");
    var waveGroup = document.getElementById("alignWave");
    if (!svg || !waveGroup) return;

    var NS = "http://www.w3.org/2000/svg";
    var LOOP = 8000;
    var X0 = 108, X1 = 660, MID = 78, HALF = 30, STEP = 3;

    var syllables = [
      { c: 136, w: 14, a: 0.95 },
      { c: 158, w: 9, a: 0.55 },
      { c: 214, w: 20, a: 0.72 },
      { c: 300, w: 16, a: 0.8 },
      { c: 340, w: 26, a: 1.0 },
      { c: 412, w: 8, a: 0.45 },
      { c: 486, w: 14, a: 0.7 },
      { c: 524, w: 24, a: 0.92 },
      { c: 568, w: 10, a: 0.4 },
      { c: 618, w: 22, a: 0.3 }
    ];

    var seed = 7;
    function rand() {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    }

    var bars = [];
    for (var x = X0 + 1.5; x < X1; x += STEP) {
      var env = 0.04;
      syllables.forEach(function (s) {
        var d = (x - s.c) / s.w;
        env = Math.max(env, s.a * Math.exp(-0.5 * d * d));
      });
      var fricative = x > 596;
      var jitter = fricative ? 0.35 + 0.65 * rand() : 0.62 + 0.38 * rand();
      var amp = Math.max(0.035, env * jitter) * HALF;
      var r = document.createElementNS(NS, "rect");
      r.setAttribute("width", "1.6");
      r.setAttribute("rx", "0.8");
      r.setAttribute("x", (x - 0.8).toFixed(1));
      waveGroup.appendChild(r);
      bars.push({ el: r, x: x, amp: amp });
    }

    function all(name) {
      return Array.prototype.slice.call(svg.querySelectorAll('[data-af="' + name + '"]'));
    }
    var scene = svg.querySelector(".alignfig__scene");
    var txLabel = all("tx-label")[0];
    var audioLabel = all("audio-label")[0];
    var alignLabel = all("align-label")[0];
    var words = all("word");
    var bounds = all("bound");
    var boxes = all("box");
    var boxLabels = all("box-label");

    function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
    function ease(v) { v = clamp01(v); return v * v * (3 - 2 * v); }
    function fade(t, start, dur) { return ease((t - start) / (dur || 350)); }

    function boxPath(x0, right, roundLeft, roundRight) {
      var top = 118, bottom = 146;
      var r = Math.min(8, (right - x0) / 2);
      var rl = roundLeft ? r : 0;
      var rr = roundRight ? r : 0;
      return "M" + (x0 + rl) + " " + top +
        " H" + (right - rr) +
        (rr ? " A" + rr + " " + rr + " 0 0 1 " + right + " " + (top + rr) : "") +
        " V" + (bottom - rr) +
        (rr ? " A" + rr + " " + rr + " 0 0 1 " + (right - rr) + " " + bottom : "") +
        " H" + (x0 + rl) +
        (rl ? " A" + rl + " " + rl + " 0 0 1 " + x0 + " " + (bottom - rl) : "") +
        " V" + (top + rl) +
        (rl ? " A" + rl + " " + rl + " 0 0 1 " + (x0 + rl) + " " + top : "") +
        " Z";
    }

    var WORD_AT = [300, 750, 1200];
    var WAVE_START = 2100, WAVE_DUR = 1600;
    var BOX_AT = [4100, 4900, 5700], BOX_GROW = 650;

    function render(t) {
      scene.setAttribute("opacity", (1 - fade(t, 7300, 500)).toFixed(3));
      txLabel.setAttribute("opacity", fade(t, 200).toFixed(3));
      words.forEach(function (w, i) { w.setAttribute("opacity", fade(t, WORD_AT[i]).toFixed(3)); });

      audioLabel.setAttribute("opacity", fade(t, WAVE_START - 100).toFixed(3));
      var head = X0 + (X1 - X0) * clamp01((t - WAVE_START) / WAVE_DUR);
      bars.forEach(function (b) {
        var grow = ease((head - b.x) / 24);
        var h = Math.max(0, b.amp * grow);
        b.el.setAttribute("y", (MID - h).toFixed(2));
        b.el.setAttribute("height", (2 * h).toFixed(2));
        b.el.setAttribute("opacity", grow > 0 ? "1" : "0");
      });

      alignLabel.setAttribute("opacity", fade(t, BOX_AT[0] - 100).toFixed(3));
      boxes.forEach(function (box, i) {
        var x0 = +box.getAttribute("data-x0");
        var x1 = +box.getAttribute("data-x1");
        var p = ease((t - BOX_AT[i]) / BOX_GROW);
        box.setAttribute("opacity", p > 0 ? "1" : "0");
        if (p > 0) box.setAttribute("d", boxPath(x0, x0 + (x1 - x0) * p, i === 0, i === boxes.length - 1));
        boxLabels[i].setAttribute("opacity", fade(t, BOX_AT[i] + 400).toFixed(3));
      });
      bounds.forEach(function (line, k) {
        var at = k === 0 ? BOX_AT[0] : BOX_AT[k - 1] + BOX_GROW - 150;
        line.setAttribute("opacity", fade(t, at, 250).toFixed(3));
      });
    }

    if (reduceMotion) {
      render(7000);
      return;
    }

    var startTime = null;
    var rafId = null;
    function frame(now) {
      if (startTime === null) startTime = now;
      render((now - startTime) % LOOP);
      rafId = window.requestAnimationFrame(frame);
    }
    function start() {
      if (rafId === null) rafId = window.requestAnimationFrame(frame);
    }
    function stop() {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      rafId = null;
    }

    render(0);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) start(); else stop(); });
      }).observe(svg);
    } else {
      start();
    }
  })();
})();
