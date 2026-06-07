(function () {
  var toggle = document.querySelector(".menu-toggle");
  var mobileNav = document.querySelector(".nav-mobile");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      mobileNav.classList.toggle("open");
      toggle.textContent = mobileNav.classList.contains("open") ? "Close" : "Menu";
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        toggle.textContent = "Menu";
      });
    });
  }

  var fadeElements = document.querySelectorAll(".fade-in");
  if (fadeElements.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeElements.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  var checklist = document.querySelector(".checklist");
  if (checklist) {
    checklist.querySelectorAll("li").forEach(function (item) {
      item.addEventListener("click", function () {
        item.classList.toggle("checked");
        var box = item.querySelector(".box");
        if (box) {
          box.textContent = item.classList.contains("checked") ? "✓" : "";
        }
      });
    });
  }
})();
