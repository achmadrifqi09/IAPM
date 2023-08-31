import React from "react";
import { Head, createInertiaApp } from "@inertiajs/react";
import ReactDOMServer from "react-dom/server";
import createServer from "@inertiajs/react/server";
const HomePage = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Home")), /* @__PURE__ */ React.createElement("h1", { className: "text-red-500" }, "Test HOme page"), /* @__PURE__ */ React.createElement("h1", null, "Test HOme page"));
};
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HomePage
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Client/Home.jsx": __vite_glob_1_0 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ App, props }) => /* @__PURE__ */ React.createElement(App, { ...props })
  })
);
