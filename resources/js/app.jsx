import React, { StrictMode } from "react";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { createRoot } from "react-dom/client";
import { InertiaProgress } from "@inertiajs/progress";

createInertiaApp({
    title: (title) => `${title} - IAPM Elinksolution`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <StrictMode>
                <App {...props} />
            </StrictMode>
        );
    },
});

InertiaProgress.init({ color: "#FDC204" });
