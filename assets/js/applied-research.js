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
})();
