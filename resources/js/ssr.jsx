import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import.meta.glob(["../assets/**"]);
import ReactDOMServer from "react-dom/server";
import createServer from "@inertiajs/react/server";
import { InertiaProgress } from "@inertiajs/progress";

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        resolve: (name) => {
            const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
            return pages[`./Pages/${name}.jsx`];
        },
        setup: ({ App, props }) => <App {...props} />,
    })
);

InertiaProgress.init({ color: "#FDC204" });
