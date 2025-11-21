/* Template Name: Techwind - Tailwind CSS Multipurpose Landing & Admin Dashboard Template
   Author: Shreethemes
   Email: support@shreethemes.in
   Website: https://shreethemes.in
   Version: 2.2.0
   Created: May 2022
   File Description: Main JS file of the template
*/

/*********************************/
/*         INDEX                 */
/*================================
 *     01.  Loader               *
 *     02.  Toggle Menus         *
 *     03.  Menu Active          *
 *     04.  Clickable Menu       *
 *     05.  Menu Sticky          *
 *     06.  Back to top          *
 *     07.  Active Sidebar       *
 *     08.  Feather icon         *
 *     09.  Small Menu           *
 *     10.  Wow Animation JS     *
 *     11.  Contact us           *
 *     12.  Dark & Light Mode    *
 *     13.  LTR & RTL Mode       *
 ================================*/

window.addEventListener("load", fn, false);

//  window.onload = function loader() {
function fn() {
  // Preloader
  if (document.getElementById("preloader")) {
    setTimeout(() => {
      document.getElementById("preloader").style.visibility = "hidden";
      document.getElementById("preloader").style.opacity = "0";
    }, 350);
  }
  // Menus
  activateMenu();
}

const hasSubMenuItems = document.querySelectorAll(".has-submenu");

hasSubMenuItems.forEach((item) => {
  const subItem = item.querySelector(".submenu");

  item.addEventListener("click", () => {
    if (subItem.classList.contains("submenu-active")) {
      subItem.classList.remove("submenu-active");
    } else {
      subItem.classList.add("submenu-active");
    }
  });
});

//Menu
/*********************/
/* Toggle Menu */
/*********************/
function toggleMenu() {
  document.getElementById("isToggle").classList.toggle("open");
  var isOpen = document.getElementById("navigation");
  if (isOpen.style.display === "block") {
    isOpen.style.display = "none";
  } else {
    isOpen.style.display = "block";
  }
}
/*********************/
/*    Menu Active    */
/*********************/
function getClosest(elem, selector) {
  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
  }

  // Get the closest matching element
  for (; elem && elem !== document; elem = elem.parentNode) {
    if (elem.matches(selector)) return elem;
  }
  return null;
}

function activateMenu() {
  var menuItems = document.getElementsByClassName("sub-menu-item");
  if (menuItems) {
    var matchingMenuItem = null;
    for (var idx = 0; idx < menuItems.length; idx++) {
      if (menuItems[idx].href === window.location.href) {
        matchingMenuItem = menuItems[idx];
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");

      var immediateParent = getClosest(matchingMenuItem, "li");

      if (immediateParent) {
        immediateParent.classList.add("active");
      }

      var parent = getClosest(immediateParent, ".child-menu-item");
      if (parent) {
        parent.classList.add("active");
      }

      var parent = getClosest(parent || immediateParent, ".parent-menu-item");

      if (parent) {
        parent.classList.add("active");

        var parentMenuitem = parent.querySelector(".menu-item");
        if (parentMenuitem) {
          parentMenuitem.classList.add("active");
        }

        var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
        if (parentOfParent) {
          // parentOfParent.classList.add("active");
        }
      } else {
        var parentOfParent = getClosest(
          matchingMenuItem,
          ".parent-parent-menu-item",
        );
        if (parentOfParent) {
          // parentOfParent.classList.add("active");
        }
      }
    }
  }
}
/*********************/
/*  Smooth Scroll with Fixed Header Offset */
/*********************/
function scrollToAnchor(anchor) {
  const element = document.querySelector(anchor);
  if (element) {
    const header = document.getElementById("topnav");
    const banner = document.querySelector(".bg-primary.sticky");
    let offset = 0;
    
    if (header) {
      offset += header.offsetHeight;
    }
    if (banner) {
      offset += banner.offsetHeight;
    }
    
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

// Handle anchor links on page load
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash) {
    setTimeout(function () {
      scrollToAnchor(window.location.hash);
    }, 100);
  }
});

// Handle anchor link clicks
document.addEventListener("click", function (e) {
  const link = e.target.closest("a[href^='#']");
  if (link && link.getAttribute("href") !== "#" && link.getAttribute("href") !== "javascript:void(0)") {
    const href = link.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToAnchor(href);
      // Update URL without triggering scroll
      if (history.pushState) {
        history.pushState(null, null, href);
      } else {
        window.location.hash = href;
      }
    }
  }
});
/*********************/
/*  Clickable manu   */
/*********************/
if (document.getElementById("navigation")) {
  var elements = document
    .getElementById("navigation")
    .getElementsByTagName("a");
  for (var i = 0, len = elements.length; i < len; i++) {
    elements[i].onclick = function (elem) {
      if (elem.target.getAttribute("href") === "javascript:void(0)") {
        var submenu = elem.target.nextElementSibling.nextElementSibling;
        submenu.classList.toggle("open");
      }
    };
  }
}
/*********************/
/*   Menu Sticky     */
/*********************/
function windowScroll() {
  const navbar = document.getElementById("topnav");
  if (navbar != null) {
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("nav-sticky");
    } else {
      navbar.classList.remove("nav-sticky");
    }
  }
}

window.addEventListener("scroll", (ev) => {
  ev.preventDefault();
  windowScroll();
});
/*********************/
/*    Back To TOp    */
/*********************/

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var mybutton = document.getElementById("back-to-top");
  if (mybutton != null) {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      mybutton.classList.add("block");
      mybutton.classList.remove("hidden");
    } else {
      mybutton.classList.add("hidden");
      mybutton.classList.remove("block");
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*********************/
/* Route changing functionality */
/*********************/
const routes = [
  {
    en: "/",
    de: "/de",
  },
  {
    en: "/linux-emergency-support.html",
    de: "/de/linux-notfall-support.html",
  },
  {
    en: "/linux-support.html",
    de: "/de/linux-support.html",
  },
  {
    en: "/linux-consulting.html",
    de: "/de/linux-consulting.html",
  },
  {
    en: "/linux-managed-hosting.html",
    de: "/de/linux-managed-hosting.html",
  },
  {
    en: "/linux-personal-trainings-and-workshops.html",
    de: "/de/linux-schulungen-und-workshops.html",
  },
  {
    en: "/qubes-os-consulting-and-support.html",
    de: "/de/qubes-os-beratung-und-support.html",
  },
  {
    en: "/ideology.html",
    de: "/de/ideologie.html",
  },
  {
    en: "/blog/",
    de: "/de/blog/",
  },
  {
    en: "/manual",
    de: "/manual",
  },
  {
    en: "/jobs.html",
    de: "/de/jobs.html",
  },
  {
    en: "/ssh-public-keys.html",
    de: "/de/ssh-public-keys.html",
  },
  {
    en: "/legal-and-privacy.html",
    de: "/de/rechtliches-und-datenschutz.html",
  },
  {
    en: "/404.html",
    de: "/de/404.html",
  },
  {
    en: "/error.html",
    de: "/de/fehler.html",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const languageMenu = document.getElementById("languageMenu");
  if (!languageMenu) return;

  const languageLinks = languageMenu.querySelectorAll("a");
  const currentPath = window.location.pathname;

  languageLinks.forEach((link) => {
    const lang = link.getAttribute("data-lang");
    const matchingRoute = routes.find(
      (route) => route.en === currentPath || route.de === currentPath,
    );

    if (matchingRoute && matchingRoute[lang]) {
      link.setAttribute("href", matchingRoute[lang]);
    }
  });
});
/*********************/
/*  Active Sidebar   */
/*********************/
(function () {
  var current = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1,
  );
  if (current === "") return;
  var menuItems = document.querySelectorAll(".sidebar-nav a");
  for (var i = 0, len = menuItems.length; i < len; i++) {
    if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
      menuItems[i].parentElement.className += " active";
    }
  }
})();

/*********************/
/*     Small Menu    */
/*********************/
try {
  var spy = new Gumshoe("#navmenu-nav a");
} catch (err) {}

/*********************/
/*      WoW Js       */
/*********************/
try {
  new WOW().init();
} catch (error) {}

/*************************/
/*      Contact Js       */
/*************************/

try {
  function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var subject = document.forms["myForm"]["subject"].value;
    var comments = document.forms["myForm"]["comments"].value;
    document.getElementById("error-msg").style.opacity = 0;
    document.getElementById("error-msg").innerHTML = "";
    if (name == "" || name == null) {
      document.getElementById("error-msg").innerHTML =
        "<div class='alert alert-warning error_message'>*Please enter a Name*</div>";
      fadeIn();
      return false;
    }
    if (email == "" || email == null) {
      document.getElementById("error-msg").innerHTML =
        "<div class='alert alert-warning error_message'>*Please enter a Email*</div>";
      fadeIn();
      return false;
    }
    if (subject == "" || subject == null) {
      document.getElementById("error-msg").innerHTML =
        "<div class='alert alert-warning error_message'>*Please enter a Subject*</div>";
      fadeIn();
      return false;
    }
    if (comments == "" || comments == null) {
      document.getElementById("error-msg").innerHTML =
        "<div class='alert alert-warning error_message'>*Please enter a Comments*</div>";
      fadeIn();
      return false;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("simple-msg").innerHTML = this.responseText;
        document.forms["myForm"]["name"].value = "";
        document.forms["myForm"]["email"].value = "";
        document.forms["myForm"]["subject"].value = "";
        document.forms["myForm"]["comments"].value = "";
      }
    };
    xhttp.open("POST", "php/contact.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(
      "name=" +
        name +
        "&email=" +
        email +
        "&subject=" +
        subject +
        "&comments=" +
        comments,
    );
    return false;
  }

  function fadeIn() {
    var fade = document.getElementById("error-msg");
    var opacity = 0;
    var intervalID = setInterval(function () {
      if (opacity < 1) {
        opacity = opacity + 0.5;
        fade.style.opacity = opacity;
      } else {
        clearInterval(intervalID);
      }
    }, 200);
  }
} catch (error) {}

/*********************/
/* Dark & Light Mode */
/*********************/
try {
  function changeTheme(e) {
    e.preventDefault();
    const htmlTag = document.getElementsByTagName("html")[0];

    if (htmlTag.className.includes("dark")) {
      htmlTag.className = "light";
    } else {
      htmlTag.className = "dark";
    }
  }

  const switcher = document.getElementById("theme-mode");
  switcher?.addEventListener("click", changeTheme);

  const chk = document.getElementById("chk");

  chk.addEventListener("change", changeTheme);
} catch (err) {}

/*********************/
/* LTR & RTL Mode */
/*********************/
try {
  const htmlTag = document.getElementsByTagName("html")[0];
  function changeLayout(e) {
    e.preventDefault();
    const switcherRtl = document.getElementById("switchRtl");
    if (switcherRtl.innerText === "LTR") {
      htmlTag.dir = "ltr";
    } else {
      htmlTag.dir = "rtl";
    }
  }
  const switcherRtl = document.getElementById("switchRtl");
  switcherRtl?.addEventListener("click", changeLayout);
} catch (err) {}

/*********************/
/* Company Images Slider */
/*********************/
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

document.querySelectorAll("[data-calc-target]").forEach((input) => {
  input.addEventListener("input", function () {
    const targetSelector = this.getAttribute("data-calc-target");
    const multiplier =
      parseFloat(this.getAttribute("data-calc-multiplier")) || 0;
    const target = document.querySelector(targetSelector);
    if (!target) return;
    const number = parseFloat(this.value);
    target.textContent = number ? number * multiplier : 0;
  });
});

/*********************/
/*   Feather Icons   */
/*********************/
feather.replace();

/*********************/
/* External Links    */
/*********************/
// Make all external links open in new tabs
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[href]");

  links.forEach((link) => {
    const href = link.getAttribute("href");

    // Check if link is external (starts with http/https and doesn't contain current domain)
    if (
      href &&
      (href.startsWith("http://") || href.startsWith("https://")) &&
      !href.includes(window.location.hostname)
    ) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
