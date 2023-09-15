import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import ReactDOMServer from "react-dom/server";
import createServer from "@inertiajs/react/server";
import.meta.glob(["../assets/**"]);

createServer((page) =>
    createInertiaApp({
        progress: {
            color: "#FDC40C",
        },
        page,
        render: ReactDOMServer.renderToString,
        resolve: (name) => {
            const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
            return pages[`./Pages/${name}.jsx`];
        },
        setup: ({ App, props }) => <App {...props} />,
    })
);
