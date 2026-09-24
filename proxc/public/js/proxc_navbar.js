(() => {
    "use strict";

    const LOGO = "/assets/proxc/images/proxc-logo.jpg";

    function brandNavbar() {
        const brand = document.querySelector(".navbar-brand");

        if (!brand || brand.dataset.proxcNavbar === "1") {
            return;
        }

        const img = document.createElement("img");
        img.src = LOGO;
        img.alt = "PROXC";
        img.style.height = "34px";
        img.style.width = "auto";
        img.style.maxWidth = "140px";
        img.style.objectFit = "contain";

        brand.replaceChildren(img);
        brand.dataset.proxcNavbar = "1";
    }

    function start() {
        brandNavbar();

        const observer = new MutationObserver(brandNavbar);
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }
})();
