/* =========================================================
   PROXC — ERP Interface Branding
   ========================================================= */

(() => {
    "use strict";

    const PROXC_LOGO = "/assets/proxc/images/proxc-logo.jpg";

    function applyPROXCBranding() {
        /* Replace the Frappe navbar brand */
        const brand = document.querySelector(".navbar-brand");

        if (brand && !brand.dataset.proxcBranded) {
            brand.innerHTML = `
                <img
                    src="${PROXC_LOGO}"
                    alt="PROXC"
                    style="
                        height: 38px;
                        width: auto;
                        max-width: 150px;
                        object-fit: contain;
                    "
                >
            `;

            brand.dataset.proxcBranded = "true";
        }

        /* Replace common Frappe login logos if present */
        document
            .querySelectorAll(".login-content .app-logo, .login-content img")
            .forEach((img) => {
                if (!img.dataset.proxcLogo) {
                    img.src = PROXC_LOGO;
                    img.alt = "PROXC";
                    img.dataset.proxcLogo = "true";
                }
            });

        /* Change browser title */
        if (
            document.title &&
            !document.title.includes("PROXC")
        ) {
            document.title = `PROXC — ${document.title}`;
        }
    }

    /* Initial load */
    applyPROXCBranding();

    /* Frappe changes the DOM dynamically */
    const observer = new MutationObserver(() => {
        applyPROXCBranding();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
