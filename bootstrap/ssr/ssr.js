import React, { createContext, forwardRef, useCallback, createElement, useState, useMemo, useEffect, useContext, useRef } from "react";
import { shouldIntercept, router, mergeDataIntoQueryString, setupProgress, createHeadManager } from "@inertiajs/core";
import "lodash.isequal";
import { RectangleGroupIcon, BuildingStorefrontIcon, DocumentIcon, ChevronDownIcon, MagnifyingGlassIcon, ChatBubbleBottomCenterIcon, NewspaperIcon, PhotoIcon, XMarkIcon, Bars3BottomLeftIcon, ArrowLeftOnRectangleIcon, Bars3BottomRightIcon, MapPinIcon, EnvelopeIcon, ArrowRightIcon, EyeIcon, PencilIcon, PlusIcon, BuildingOffice2Icon, RocketLaunchIcon, CalendarIcon, CubeIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Select from "react-select";
import { useFormik } from "formik";
import { Editor } from "@tinymce/tinymce-react";
import ReactDOMServer from "react-dom/server";
import createServer from "@inertiajs/core/server";
const Logo$1 = "/build/assets/logo-07a76e50.svg";
var B = createContext(void 0);
B.displayName = "InertiaHeadContext";
var A = B;
var N = createContext(void 0);
N.displayName = "InertiaPageContext";
var E = N;
function M({ children: l, initialPage: c, initialComponent: s, resolveComponent: p, titleCallback: a, onHeadUpdate: S }) {
  let [d, P] = useState({ component: s || null, page: c, key: null }), u = useMemo(() => createHeadManager(typeof window > "u", a || ((f) => f), S || (() => {
  })), []);
  if (useEffect(() => {
    router.init({ initialPage: c, resolveComponent: p, swapComponent: async ({ component: f, page: e, preserveState: i }) => {
      P((r) => ({ component: f, page: e, key: i ? r.key : Date.now() }));
    } }), router.on("navigate", () => u.forceUpdate());
  }, []), !d.component)
    return createElement(A.Provider, { value: u }, createElement(E.Provider, { value: d.page }, null));
  let g = l || (({ Component: f, props: e, key: i }) => {
    let r = createElement(f, { key: i, ...e });
    return typeof f.layout == "function" ? f.layout(r) : Array.isArray(f.layout) ? f.layout.concat(r).reverse().reduce((y, T) => createElement(T, { children: y, ...e })) : r;
  });
  return createElement(A.Provider, { value: u }, createElement(E.Provider, { value: d.page }, g({ Component: d.component, key: d.key, props: d.page.props })));
}
M.displayName = "Inertia";
async function j({ id: l = "app", resolve: c, setup: s, title: p, progress: a = {}, page: S, render: d }) {
  let P = typeof window > "u", u = P ? null : document.getElementById(l), g = S || JSON.parse(u.dataset.page), f = (r) => Promise.resolve(c(r)).then((y) => y.default || y), e = [], i = await f(g.component).then((r) => s({ el: u, App: M, props: { initialPage: g, initialComponent: r, resolveComponent: f, titleCallback: p, onHeadUpdate: P ? (y) => e = y : null } }));
  if (!P && a && setupProgress(a), P) {
    let r = await d(createElement("div", { id: l, "data-page": JSON.stringify(g) }, i));
    return { head: e, body: r };
  }
}
var ne = function({ children: l, title: c }) {
  let s = useContext(A), p = useMemo(() => s.createProvider(), [s]);
  useEffect(() => () => {
    p.disconnect();
  }, [p]);
  function a(e) {
    return ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].indexOf(e.type) > -1;
  }
  function S(e) {
    let i = Object.keys(e.props).reduce((r, y) => {
      if (["head-key", "children", "dangerouslySetInnerHTML"].includes(y))
        return r;
      let T = e.props[y];
      return T === "" ? r + ` ${y}` : r + ` ${y}="${T}"`;
    }, "");
    return `<${e.type}${i}>`;
  }
  function d(e) {
    return typeof e.props.children == "string" ? e.props.children : e.props.children.reduce((i, r) => i + P(r), "");
  }
  function P(e) {
    let i = S(e);
    return e.props.children && (i += d(e)), e.props.dangerouslySetInnerHTML && (i += e.props.dangerouslySetInnerHTML.__html), a(e) || (i += `</${e.type}>`), i;
  }
  function u(e) {
    return React.cloneElement(e, { inertia: e.props["head-key"] !== void 0 ? e.props["head-key"] : "" });
  }
  function g(e) {
    return P(u(e));
  }
  function f(e) {
    let i = React.Children.toArray(e).filter((r) => r).map((r) => g(r));
    return c && !i.find((r) => r.startsWith("<title")) && i.push(`<title inertia>${c}</title>`), i;
  }
  return p.update(f(l)), null;
}, ae = ne;
var F = () => {
}, V = forwardRef(({ children: l, as: c = "a", data: s = {}, href: p, method: a = "get", preserveScroll: S = false, preserveState: d = null, replace: P = false, only: u = [], headers: g = {}, queryStringArrayFormat: f = "brackets", onClick: e = F, onCancelToken: i = F, onBefore: r = F, onStart: y = F, onProgress: T = F, onFinish: H = F, onCancel: h = F, onSuccess: L = F, onError: x = F, ...w }, R) => {
  let I = useCallback((o) => {
    e(o), shouldIntercept(o) && (o.preventDefault(), router.visit(p, { data: s, method: a, preserveScroll: S, preserveState: d ?? a !== "get", replace: P, only: u, headers: g, onCancelToken: i, onBefore: r, onStart: y, onProgress: T, onFinish: H, onCancel: h, onSuccess: L, onError: x }));
  }, [s, p, a, S, d, P, u, g, e, i, r, y, T, H, h, L, x]);
  c = c.toLowerCase(), a = a.toLowerCase();
  let [v, t] = mergeDataIntoQueryString(a, p || "", s, f);
  return p = v, s = t, c === "a" && a !== "get" && console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${p}" method="${a}" as="button">...</Link>`), createElement(c, { ...w, ...c === "a" ? { href: p } : {}, ref: R, onClick: I }, l);
});
V.displayName = "InertiaLink";
var de = V;
const SidebarMenu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pageSubmenu, setPageSubmenu] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("/dashboard");
  const menusRef = useRef(null);
  const menusStyle = {
    active: "py-2 px-2 hover:bg-iapm-yellow rounded-lg flex gap-4 bg-iapm-yellow w-full flex gap-4 justify-between",
    normal: "py-2 px-2 hover:bg-iapm-yellow rounded-lg flex gap-4 w-full flex gap-4 justify-between"
  };
  const asideStyle = {
    normal: "px-6 py-8 bg-white shadow-lg h-screen font-poppins w-72 fixed top-16 transition duration-200 translate-x-0 z-50",
    hidden: "px-6 py-8 bg-white shadow-lg h-screen font-poppins w-72 fixed top-16 transition duration-200 -translate-x-72 z-50 "
  };
  const submenuStyle = {
    normal: "py-2 space-y-6",
    hidden: "hidden"
  };
  const arrowStyle = {
    close: "w-6 h-6 -rotate-90 transition duration-100",
    open: "w-6 h-6 transition duration-100"
  };
  const handleOpenSidebar = () => {
    setSidebarOpen((codition) => !codition);
  };
  const handleOpenPageMenu = () => {
    setPageSubmenu((condition) => !condition);
  };
  useEffect(() => {
    if (menusRef) {
      const currentUrl2 = window.location.pathname;
      setCurrentUrl(currentUrl2);
    }
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "aside",
    {
      className: sidebarOpen === true ? asideStyle.normal : asideStyle.hidden
    },
    /* @__PURE__ */ React.createElement("ul", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
      de,
      {
        className: currentUrl.includes("/dasboard") ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(RectangleGroupIcon, { className: "w-6 h-6" }), "Dashboad")
    )), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
      de,
      {
        className: currentUrl.includes("/service-products") ? menusStyle.active : menusStyle.normal,
        href: "/service-products"
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(BuildingStorefrontIcon, { className: "w-6 h-6" }), "Services")
    )), /* @__PURE__ */ React.createElement("li", { className: "space-y-4" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: currentUrl.includes("/page-editor") ? menusStyle.active : menusStyle.normal,
        onClick: handleOpenPageMenu
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(DocumentIcon, { className: "w-6 h-6" }), "Page"),
      /* @__PURE__ */ React.createElement(
        ChevronDownIcon,
        {
          className: pageSubmenu === true ? arrowStyle.open : arrowStyle.close
        }
      )
    ), /* @__PURE__ */ React.createElement(
      "ul",
      {
        className: pageSubmenu === true ? submenuStyle.normal : submenuStyle.hidden
      },
      /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
        de,
        {
          className: "py-2 pr-2 pl-10 hover:bg-iapm-yellow rounded-lg flex gap-4 justify-between",
          href: "/page-editor/home-page"
        },
        "Home Page"
      )),
      /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(de, { className: "py-2 pr-2 pl-10 hover:bg-iapm-yellow rounded-lg flex gap-4 justify-between" }, "About Page")),
      /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(de, { className: "py-2 pr-2 pl-10 hover:bg-iapm-yellow rounded-lg flex gap-4 justify-between" }, "Service Page"))
    )), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
      de,
      {
        className: currentUrl.includes("/seo") ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(MagnifyingGlassIcon, { className: "w-6 h-6" }), "SEO")
    )), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
      de,
      {
        className: currentUrl.includes("/testimonials") ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(ChatBubbleBottomCenterIcon, { className: "w-6 h-6" }), "Testimonial")
    )), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
      de,
      {
        className: currentUrl.includes("/blogs") ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(NewspaperIcon, { className: "w-6 h-6" }), "Blog")
    )), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
      de,
      {
        className: currentUrl.includes("/asset") ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(PhotoIcon, { className: "w-6 h-6" }), "Asset")
    )))
  ), /* @__PURE__ */ React.createElement("nav", { className: "w-full bg-white border-b h-fit fixed px-6 py-4 flex justify-between items-center font-poppins z-40" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: " border-2 border-gray-200 p-2 rounded-lg",
      onClick: handleOpenSidebar
    },
    sidebarOpen === true ? /* @__PURE__ */ React.createElement(XMarkIcon, { className: "w-6 h-6" }) : /* @__PURE__ */ React.createElement(Bars3BottomLeftIcon, { className: "w-6 h-6" })
  ), /* @__PURE__ */ React.createElement("div", { className: "max-sm:hidden" }, /* @__PURE__ */ React.createElement("img", { src: Logo$1, alt: "IAMP Logo" })), /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("button", { className: "flex gap-2 text-iapm-red" }, /* @__PURE__ */ React.createElement(ArrowLeftOnRectangleIcon, { className: "w-6 h-6" }), "Logout"))));
};
const Dashboard = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(SidebarMenu, null), /* @__PURE__ */ React.createElement("main", { className: "bg-grid bg-white min-h-screen bg-no-repeat bg-right-top font-poppins" }, children));
};
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard
}, Symbol.toStringTag, { value: "Module" }));
const AdminLayout = (props) => {
  const { children: children2 } = props;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "flex gap-6" }, /* @__PURE__ */ React.createElement(SidebarMenu, null), /* @__PURE__ */ React.createElement("main", { className: "max-w-screen-xl px-6 md:px-8 mx-auto pt-20 bg-white min-h-screen bg-no-repeat bg-right-top font-poppins w-full overflow-x-hidden box-border" }, children2)));
};
const Navbar = () => {
  const [isNavbar, setNavbar] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("/");
  const menusRef = useRef(null);
  const menusStyle = {
    active: "font-medium text-center",
    normal: "text-iapm-dark-gray text-center"
  };
  const hanldeNavbarMenu = () => {
    setNavbar((current) => !current);
  };
  useEffect(() => {
    if (menusRef) {
      const currentUrl2 = window.location.pathname;
      setCurrentUrl(currentUrl2);
    }
  }, []);
  return /* @__PURE__ */ React.createElement("nav", { className: "w-full font-poppins bg-white px-6 md:px-8 z-50 bg-opacity-60 backdrop-blur " }, /* @__PURE__ */ React.createElement("div", { className: "py-4 flex max-w-screen-xl justify-between mx-auto items-center" }, /* @__PURE__ */ React.createElement(de, { href: "/" }, /* @__PURE__ */ React.createElement("img", { src: Logo$1, alt: "IAPM Logo" })), /* @__PURE__ */ React.createElement(
    "ul",
    {
      className: `flex gap-10 max-md:absolute max-md:flex-col max-md:bg-white max-md:top-[72px] max-md:w-full max-md:left-0 max-md:justify-center max-md:py-6 ${isNavbar ? "" : "max-md:hidden"}`,
      ref: menusRef
    },
    /* @__PURE__ */ React.createElement(
      "li",
      {
        className: currentUrl === "/" ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement(de, { href: "/" }, "Home")
    ),
    /* @__PURE__ */ React.createElement(
      "li",
      {
        className: currentUrl.includes("/services") ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement(de, { href: "/services" }, "Services")
    ),
    /* @__PURE__ */ React.createElement(
      "li",
      {
        className: currentUrl.includes("/about-us") ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement(de, { href: "/about-us" }, "About")
    ),
    /* @__PURE__ */ React.createElement(
      "li",
      {
        className: currentUrl.includes("/blogs") ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement(de, { href: "/blogs" }, "Blog")
    )
  ), /* @__PURE__ */ React.createElement("button", { className: "p-2 md:hidden", onClick: hanldeNavbarMenu }, isNavbar ? /* @__PURE__ */ React.createElement(XMarkIcon, { className: "w-6 h-6 text-iapm-black" }) : /* @__PURE__ */ React.createElement(Bars3BottomRightIcon, { className: "w-6 h-6 text-iapm-black" }))));
};
const Logo = "/build/assets/dark-logo-acf66319.svg";
const H1 = ({ children: children2 }) => {
  return /* @__PURE__ */ React.createElement("h1", { className: "text-4xl font-semibold text-iapm-black leading-relaxed" }, children2);
};
const H2 = (props) => {
  const { children: children2, isDark } = props;
  const textStyle = {
    light: "text-3xl font-semibold text-iapm-black leading-relaxed",
    dark: "text-3xl font-semibold text-white leading-relaxed"
  };
  return /* @__PURE__ */ React.createElement("h2", { className: isDark === true ? textStyle.dark : textStyle.light }, children2);
};
const H3 = ({ children: children2 }) => {
  return /* @__PURE__ */ React.createElement("h3", { className: "text-2xl font-semibold text-iapm-black leading-relaxed" }, children2);
};
const H4 = ({ children: children2 }) => {
  return /* @__PURE__ */ React.createElement("h4", { className: "text-xl font-semibold text-iapm-black leading-relaxed" }, children2);
};
const H5 = (props) => {
  const { children: children2, isBold } = props;
  return /* @__PURE__ */ React.createElement("h5", { className: "text-lg font-semibold text-iapm-black leading-relaxed" }, children2);
};
const H6 = (props) => {
  const { children: children2, isDark } = props;
  const textStyle = {
    light: "text-md font-semibold text-iapm-black leading-relaxed",
    dark: "text-md font-semibold text-white leading-relaxed"
  };
  return /* @__PURE__ */ React.createElement("h6", { className: isDark ? textStyle.dark : textStyle.light }, children2);
};
const Paragraph = (props) => {
  const { children: children2, isDark } = props;
  const textStyle = {
    light: "leading-relaxed text-iapm-dark-gray",
    dark: "leading-relaxed text-iapm-light-gray"
  };
  return /* @__PURE__ */ React.createElement("p", { className: isDark === true ? textStyle.dark : textStyle.light }, children2);
};
const Subtitle = ({ children: children2 }) => {
  return /* @__PURE__ */ React.createElement("h6", { className: "text-lg text-iapm-black leading-relaxed" }, children2);
};
const Caption = (props) => {
  const { children: children2 } = props;
  return /* @__PURE__ */ React.createElement("span", { className: "text-sm font-poppins text-iapm-black block" }, children2);
};
const Footer = (props) => {
  return /* @__PURE__ */ React.createElement("footer", { className: "bg-iapm-baltic-sea text-iapm-gray" }, /* @__PURE__ */ React.createElement("div", { className: " grid grid-cols-4 max-lg:grid-cols-1 max-w-screen-xl mx-auto py-16 font-poppins px-6 md:px-6 gap-8 box-border" }, /* @__PURE__ */ React.createElement("div", { className: "w-max" }, /* @__PURE__ */ React.createElement("img", { src: Logo, alt: "logo" })), /* @__PURE__ */ React.createElement("div", { className: " col-span-3" }, /* @__PURE__ */ React.createElement("ul", { className: "grid md:grid-flow-col md:auto-cols-auto gap-6 max-md:grid-cols-2 max-sm:grid-cols-1 lg:justify-items-end" }, /* @__PURE__ */ React.createElement("li", { className: "space-y-4" }, /* @__PURE__ */ React.createElement(H6, { isDark: true }, "Menu"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(
    de,
    {
      href: "/",
      className: "block text-iapm-gray text-base"
    },
    "Home"
  ), /* @__PURE__ */ React.createElement(
    de,
    {
      href: "/services",
      className: "block text-iapm-gray text-base"
    },
    "Service"
  ), /* @__PURE__ */ React.createElement(
    de,
    {
      href: "/about-us",
      className: "block text-iapm-gray text-base"
    },
    "About Us"
  ), /* @__PURE__ */ React.createElement(
    de,
    {
      href: "/blogs",
      className: "block text-iapm-gray text-base"
    },
    "Blog"
  ))), /* @__PURE__ */ React.createElement("li", { className: "space-y-4" }, /* @__PURE__ */ React.createElement(H6, { isDark: true }, "Address"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 max-w-[30ch]" }, /* @__PURE__ */ React.createElement("div", { className: "w-6 h-6" }, /* @__PURE__ */ React.createElement(MapPinIcon, { className: "w-6 h-6 block text-iapm-gray" })), /* @__PURE__ */ React.createElement(
    de,
    {
      href: "/",
      className: "block text-iapm-gray text-base"
    },
    "Cenderawasih Green Residence Alamanda Cluster DE-02 Jember 62881"
  )))), /* @__PURE__ */ React.createElement("li", { className: "space-y-4" }, /* @__PURE__ */ React.createElement(H6, { isDark: true }, "Contact"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 " }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 items-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-6 h-6" }, /* @__PURE__ */ React.createElement(EnvelopeIcon, { className: "w-6 h-6 block text-iapm-gray" })), /* @__PURE__ */ React.createElement(
    de,
    {
      href: "/",
      className: "block text-iapm-gray text-base"
    },
    "hello@iapmelinksolution.co.id"
  ))))))), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center py-6 border-t border-t-iapm-dark-gray max-w-screen-xl mx-auto px-6 md:px-6" }, /* @__PURE__ */ React.createElement("span", { className: "text-iapm-gray block" }, "Copyright © PT IAPM Elinksolution Indonesia 2023")));
};
const ClientLayout = ({ children: children2 }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("main", { className: "bg-grid bg-white min-h-screen bg-no-repeat bg-right-top font-poppins" }, children2), /* @__PURE__ */ React.createElement(Footer, null));
};
const largeImage = "/build/assets/first-image-f644032f.svg";
const smallImage = "/build/assets/second-image-f7f255a5.svg";
const IButton = (props) => {
  const { action, children: children2, type, variant, isLink, url } = props;
  const buttonStyle = {
    primary: "w-max bg-iapm-yellow px-4 py-3 rounded-full font-popins text-iapm-black font-medium block flex gap-4 whitespace-nowrap",
    "normal-link": "w-max font-popins text-iapm-black font-medium block flex gap-4 whitespace-nowrap",
    "link-border": "w-max bg-white border border-iapm-dark-gray px-4 py-3 rounded-full font-popins text-iapm-black font-medium block flex gap-4 whitespace-nowrap",
    "cta-button": "w-max bg-iapm-yellow px-4 py-3 rounded-full font-popins border border-iapm-black text-iapm-black font-medium block flex gap-4 whitespace-nowrap "
  };
  useEffect(() => {
  }, []);
  const handleAction = () => {
    action();
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, isLink === true ? /* @__PURE__ */ React.createElement(de, { href: url, className: buttonStyle[variant] }, children2) : /* @__PURE__ */ React.createElement(
    "button",
    {
      className: buttonStyle[variant],
      type,
      onClick: handleAction
    },
    children2
  ));
};
const Hero = (props) => {
  const { title, description, largeImage: largeImage2, smallImage: smallImage2 } = props;
  return /* @__PURE__ */ React.createElement("section", { className: "grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto items-center px-6 md:px-8 gap-16 pt-20 max-md:pt-16" }, /* @__PURE__ */ React.createElement("div", { className: "w-full space-y-8" }, /* @__PURE__ */ React.createElement(H1, null, title), /* @__PURE__ */ React.createElement(Paragraph, null, description), /* @__PURE__ */ React.createElement(IButton, { isLink: true, url: "/services", variant: "primary" }, "Explore a Service")), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center gap-6 box-border" }, /* @__PURE__ */ React.createElement(
    "span",
    {
      className: "block w-64 max-md:w-48 h-[24rem] max-md:h-72 rounded-full mt-20 bg-cover bg-no-repeat bg-center relative before:content-[''] \r\n                    before:block before:w-24 before:h-24 before:bg-rounded-shape before:absolute before:bg-no-repeat before:bg-center before:right-0 \r\n                    before:-top-24 before:max-md:-top-28 after:block after:w-48 after:h-full after:bg-chart after:absolute after:bg-no-repeat after:bg-center \r\n                    after:-left-20 after:-bottom-28 after:max-md:-left-6",
      style: { backgroundImage: `url('${largeImage2}')` }
    }
  ), /* @__PURE__ */ React.createElement(
    "span",
    {
      className: "block w-56 max-md:w-36 h-80 max-md:h-48  rounded-full bg-cover bg-no-repeat bg-center relative after:content-[''] \r\n                    after:block after:w-full after:h-full after:bg-triangle-shape after:absolute after:bg-no-repeat after:bg-center after:bg-contain \r\n                    after:right-0 after:-bottom-64",
      style: { backgroundImage: `url('${smallImage2}')` }
    }
  )));
};
const __vite_glob_1_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hero
}, Symbol.toStringTag, { value: "Module" }));
const Client1 = "/build/assets/client-1-79641c38.svg";
const ClientGalery = (props) => {
  return /* @__PURE__ */ React.createElement("section", { className: "w-full max-w-screen-xl mx-auto px-6 md:px-8 my-28" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Subtitle, null, "Successful Project & Business Lecturing"), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-evenly mt-4 flex-wrap gap-6 md:gap-12" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[260px] box-border" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: Client1,
      alt: "clien logo",
      className: "w-full h-auto aspect-square object-contain object-center"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "max-w-[260px] box-border" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: Client1,
      alt: "clien logo",
      className: "w-full h-auto aspect-square object-contain object-center"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "max-w-[260px] box-border" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: Client1,
      alt: "clien logo",
      className: "w-full h-auto aspect-square object-contain object-center"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "max-w-[260px] box-border" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: Client1,
      alt: "clien logo",
      className: "w-full h-auto aspect-square object-contain object-center"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "max-w-[260px] box-border" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: Client1,
      alt: "clien logo",
      className: "w-full h-auto aspect-square object-contain object-center"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "max-w-[260px] box-border" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: Client1,
      alt: "clien logo",
      className: "w-full h-auto aspect-square object-contain object-center"
    }
  )))));
};
const __vite_glob_1_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ClientGalery
}, Symbol.toStringTag, { value: "Module" }));
const VideoSource = "/build/assets/video-822e4afa.mp4";
const VideoSection = (props) => {
  return /* @__PURE__ */ React.createElement(
    "section",
    {
      className: "w-full my-36 bg-iapm-light-gray relative py-16 after:content-[''] after:bock after:w-48 after:h-56 after:bg-dot-ornament \r\n        after:bg-no-repeat after:absolute after:right-0 after:-bottom-24 after:md:-bottom-32 after:max-md:w-24 after:max-md:h-36 after:z-0"
    },
    /* @__PURE__ */ React.createElement("div", { className: " max-w-screen-xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("video", { className: "rounded-xl", controls: true }, /* @__PURE__ */ React.createElement("source", { src: VideoSource, type: "video/mp4" }), "Your browser does not support the video tag.")), /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement(H2, null, "Technology is important for your business development"), /* @__PURE__ */ React.createElement(Paragraph, null, "Including Global Framework certified, those are key point to drive your business Growth exponentially")))
  );
};
const __vite_glob_1_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VideoSection
}, Symbol.toStringTag, { value: "Module" }));
const Image = "/build/assets/product-1dc7c071.png";
const swiper = "";
const pagination = "";
const navigation = "";
const SwiperContainer = (props) => {
  const { children: children2 } = props;
  return /* @__PURE__ */ React.createElement(
    Swiper,
    {
      centeredSlides: true,
      pagination: {
        clickable: true
      },
      spaceBetween: 40,
      navigation: true,
      modules: [Pagination, Navigation],
      className: "swiper",
      breakpoints: {
        640: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
        1280: {
          slidesPerView: 3
        },
        1536: {
          slidesPerView: 3
        }
      }
    },
    /* @__PURE__ */ React.createElement("div", { className: "py-32" }, children2)
  );
};
const ProductOverview$1 = (props) => {
  return /* @__PURE__ */ React.createElement("section", { className: "w-full my-36" }, /* @__PURE__ */ React.createElement("div", { className: " max-w-screen-xl mx-auto px-6 md:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center gap-6 max-sm:flex-col max-sm:items-start" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(H2, null, "Services We Offer"), /* @__PURE__ */ React.createElement(Paragraph, null, "We provide a variety of services that are integrated with the global framework")), /* @__PURE__ */ React.createElement(
    IButton,
    {
      isLink: true,
      url: "/services",
      variant: "normal-link"
    },
    "Explore All",
    " ",
    /* @__PURE__ */ React.createElement(ArrowRightIcon, { className: "w-6 h-6 text-iapm-black" })
  )), /* @__PURE__ */ React.createElement("div", { className: "my-6" }, /* @__PURE__ */ React.createElement(SwiperContainer, null, [...new Array(4)].map((_, i) => {
    return /* @__PURE__ */ React.createElement(SwiperSlide, { key: i }, /* @__PURE__ */ React.createElement("div", { className: "min-w-[320px] min-h-[320px] bg-white mb-16" }, /* @__PURE__ */ React.createElement("div", { className: " overflow-hidden rounded-xl" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: Image,
        alt: "",
        className: "w-full h-auto rounded-xl hover:scale-110 transition duration-200"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "my-4 space-y-6 " }, /* @__PURE__ */ React.createElement(Subtitle, null, "Business Analyst & Portfolio Management"), /* @__PURE__ */ React.createElement(
      IButton,
      {
        isLink: true,
        url: "/services",
        variant: "link-border"
      },
      "Learn More"
    ))));
  })))));
};
const Carousel = (props) => {
  const { children: children2 } = props;
  return /* @__PURE__ */ React.createElement(
    Swiper,
    {
      pagination: {
        dynamicBullets: true
      },
      modules: [Pagination, Autoplay],
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      className: "swiper"
    },
    children2
  );
};
const Testimonial = (props) => {
  return /* @__PURE__ */ React.createElement("section", { className: "w-full my-36 bg-grid bg-no-repeat" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-screen-xl mx-auto px-6 md:px-8 text-center space-y-12 bg-gradient-linear-white" }, /* @__PURE__ */ React.createElement(H2, null, "What do they say about us?"), /* @__PURE__ */ React.createElement(Carousel, null, [...new Array(3)].map((_, i) => {
    return /* @__PURE__ */ React.createElement(SwiperSlide, { key: i }, /* @__PURE__ */ React.createElement("div", { className: "text-center relative max-w-screen-sm mx-auto space-y-6 mb-16 " }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("blockquote", { className: " text-iapm-black" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-start" }, /* @__PURE__ */ React.createElement(
      "svg",
      {
        className: "w-8 h-8 text-iapm-dark-gray mb-4",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 18 14"
      },
      /* @__PURE__ */ React.createElement("path", { d: "M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" })
    )), /* @__PURE__ */ React.createElement(Paragraph, null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quibusdam debitis repellat, qui eos impedit? Nam doloremque saepe ratione! Officia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quibusdam debitis repellat, qui eos impedit?"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-end" }, /* @__PURE__ */ React.createElement(
      "svg",
      {
        className: "w-8 h-8 text-iapm-dark-gray mb-4",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 18 14"
      },
      /* @__PURE__ */ React.createElement("path", { d: "M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" })
    )))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(H5, null, "Larry Pageim"), /* @__PURE__ */ React.createElement(Paragraph, null, "Sr. Director, Brand Marketing at PT XYZ"))));
  }))));
};
const __vite_glob_1_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Testimonial
}, Symbol.toStringTag, { value: "Module" }));
const ICCollaborate = "/build/assets/ic-collaborate-89c2c567.svg";
const CTA = () => {
  return /* @__PURE__ */ React.createElement("section", { className: "w-full " }, /* @__PURE__ */ React.createElement("div", { className: "bg-lines bg-cover bg-no-repeat py-16 bg-iapm-yellow" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-screen-xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 items-center gap-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-6 max-md:flex-col col-span-2" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: ICCollaborate,
      alt: "icon of collaborate",
      className: "w-28 h-28 "
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "max-md:text-center" }, /* @__PURE__ */ React.createElement(H3, null, "Let's make something extraordinary"), /* @__PURE__ */ React.createElement(Paragraph, null, "You can contact us to get more information or collaborate"))), /* @__PURE__ */ React.createElement("div", { className: "mx-auto" }, /* @__PURE__ */ React.createElement(IButton, { isLink: true, url: "/", variant: "cta-button" }, "Contact Us")))));
};
const HomePage = () => {
  const dummy = {
    heroTitle: "Creating ideas, innovations in Business and Technology within Global Frameworks!",
    heroDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus."
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ae, null, /* @__PURE__ */ React.createElement("title", null, "Home")), /* @__PURE__ */ React.createElement(ClientLayout, null, /* @__PURE__ */ React.createElement(
    Hero,
    {
      title: dummy.heroTitle,
      description: dummy.heroDescription,
      largeImage,
      smallImage
    }
  ), /* @__PURE__ */ React.createElement(ClientGalery, null), /* @__PURE__ */ React.createElement(VideoSection, null), /* @__PURE__ */ React.createElement(ProductOverview$1, null), /* @__PURE__ */ React.createElement(Testimonial, null), /* @__PURE__ */ React.createElement(CTA, null)));
};
const __vite_glob_1_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HomePage
}, Symbol.toStringTag, { value: "Module" }));
const SidebarEditor = (props) => {
  const { children: children2, isOpenEditor } = props;
  const editorContainerStyle = {
    open: "w-80 fixed top-16 min-h-screen bg-white z-10 shadow-xl right-0 translate-x-0 trasition duration-100 box-border",
    close: "w-80 fixed top-16 min-h-screen bg-white z-10 shadow-xl right-0 translate-x-80 trasition duration-100 box-border"
  };
  return /* @__PURE__ */ React.createElement(
    "aside",
    {
      className: isOpenEditor === true ? editorContainerStyle.open : editorContainerStyle.close
    },
    /* @__PURE__ */ React.createElement("div", { className: "pt-3" }, /* @__PURE__ */ React.createElement("div", { className: "h-screen overflow-y-scroll custom-scrollbar px-4" }, children2))
  );
};
const FloatingButton = (props) => {
  const { children: children2, action } = props;
  const hanldeClick = () => {
    action();
  };
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "p-3 bg-iapm-yellow rounded-full fixed bottom-6 right-12 z-50",
      onClick: hanldeClick
    },
    children2
  );
};
const IInput = (props) => {
  const {
    inputLabel,
    inputName,
    inputId,
    defaultValue,
    onChange,
    inputType,
    errorMessage
  } = props;
  const handleChange = (e) => {
    onChange(e.target);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "my-4 w-full space-y-1" }, /* @__PURE__ */ React.createElement(
    "label",
    {
      htmlFor: inputId,
      className: "text-iapm-dark-gray block text-base font-poppins"
    },
    inputLabel
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: inputType,
      name: inputName,
      id: inputId,
      value: defaultValue,
      onChange: handleChange,
      className: " bg-gray-100 rounded-lg w-full px-4 py-3 font-poppins focus:border focus:border-iapm-yellow"
    }
  ), !!errorMessage && /* @__PURE__ */ React.createElement("span", { className: "text-sm text-iapm-red block" }, errorMessage));
};
const ITextarea = (props) => {
  const {
    textareaLabel,
    textareaName,
    textareaId,
    defaultValue,
    onChange,
    textareaType,
    errorMessage
  } = props;
  const handleChange = (e) => {
    onChange(e.target);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "my-4 w-full space-y-1" }, /* @__PURE__ */ React.createElement(
    "label",
    {
      htmlFor: textareaId,
      className: "text-iapm-dark-gray block text-base font-poppins"
    },
    textareaLabel
  ), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      type: textareaType,
      name: textareaName,
      id: textareaId,
      value: defaultValue,
      onChange: handleChange,
      className: " bg-gray-100 rounded-lg w-full px-4 py-3 font-poppins focus:border focus:border-iapm-yellow"
    }
  ), !!errorMessage && /* @__PURE__ */ React.createElement("span", { className: "text-sm text-iapm-red block" }, errorMessage));
};
const ISelect = (props) => {
  const {
    options,
    defaultValue,
    selectLabel,
    selectId,
    selectName,
    errorMessage,
    onChange
  } = props;
  const styles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "#f3f4f6",
      color: "#1A1C29",
      borderRadius: "8px",
      paddingTop: "7px",
      paddingBottom: "7px",
      marginTop: "4px",
      fontSize: "16px",
      boxShadow: state.isFocused ? 0 : 0,
      border: "none"
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: "#f3f4f6",
      color: "#1A1C29",
      fontSize: "16px"
    }),
    option: (baseStyle, state) => ({
      ...baseStyle,
      backgroundColor: state.isSelected ? "#FDC204" : null,
      color: state.isSelected ? "#1A1C29" : null
    })
  };
  const handleChange = (event) => {
    let target = {
      name: selectName,
      value: event.value
    };
    onChange(target);
  };
  const isDefaultValue = (e) => e.value === defaultValue;
  return /* @__PURE__ */ React.createElement("div", { className: "my-4 w-full space-y-1 font-poppins" }, /* @__PURE__ */ React.createElement(
    "label",
    {
      htmlFor: selectId,
      className: "text-iapm-dark-gray font-normal block"
    },
    selectLabel
  ), /* @__PURE__ */ React.createElement(
    Select,
    {
      onChange: handleChange,
      options,
      id: selectId,
      name: selectName,
      value: defaultValue && options[options.findIndex(isDefaultValue)],
      theme: (theme) => ({
        ...theme,
        colors: {
          primary25: "#FDC204",
          primary: "#1A1C29"
        }
      }),
      styles
    }
  ), errorMessage && /* @__PURE__ */ React.createElement("span", { className: "text-iapm-red text-sm" }, errorMessage));
};
const HomeEditor = () => {
  const [isOpenEditor, setOpenEditor] = useState(false);
  const handleOpenEditor = () => {
    setOpenEditor((isOpen) => !isOpen);
  };
  const handleChange = (e) => {
    console.log(e.value);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ae, null, /* @__PURE__ */ React.createElement("title", null, "Page Editor")), /* @__PURE__ */ React.createElement(AdminLayout, null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center my-4 gap-4 p-4 border" }, /* @__PURE__ */ React.createElement(EyeIcon, { className: "w-6 h-6 " }), /* @__PURE__ */ React.createElement(H4, null, "Editing Home Page")), /* @__PURE__ */ React.createElement("div", { className: "border" }, /* @__PURE__ */ React.createElement(HomePage, null)), /* @__PURE__ */ React.createElement(FloatingButton, { action: handleOpenEditor }, isOpenEditor ? /* @__PURE__ */ React.createElement(XMarkIcon, { className: "w-6 h-6 text-iapm-black" }) : /* @__PURE__ */ React.createElement(PencilIcon, { className: "w-6 h-6 text-iapm-black" })), /* @__PURE__ */ React.createElement(SidebarEditor, { isOpenEditor }, /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Title",
      inputName: "title",
      inputId: "title",
      inputType: "text",
      onChange: handleChange
    }
  ), /* @__PURE__ */ React.createElement(
    ITextarea,
    {
      textareaLabel: "Description",
      textareaName: "description",
      textareaId: "description",
      textareaType: "description",
      onChange: handleChange
    }
  ), /* @__PURE__ */ React.createElement(
    ISelect,
    {
      selectLabel: "Image 1",
      selectName: "image-left",
      selectId: "image-left",
      onChange: handleChange
    }
  ), /* @__PURE__ */ React.createElement(
    ISelect,
    {
      selectLabel: "Image 2",
      selectName: "image-right",
      selectId: "image-right",
      onChange: handleChange
    }
  ))));
};
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HomeEditor
}, Symbol.toStringTag, { value: "Module" }));
const PageEditor = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ae, null, /* @__PURE__ */ React.createElement("title", null, "Page Editor")), /* @__PURE__ */ React.createElement(AdminLayout, null, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h1", null, "PageEditor"))));
};
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PageEditor
}, Symbol.toStringTag, { value: "Module" }));
const ICPhoto = "/build/assets/ic-photo-ac1131ce.svg";
const InputMedia = (props) => {
  const previewRef = useRef(null);
  const [previwContent, setPreviewContent] = useState();
  const {
    mediaLabel,
    mediaId,
    mediaName,
    errorMessage,
    onChange,
    defaultValue,
    mediaButtonLabel,
    mediaType
  } = props;
  const handleChange = (event) => {
    onChange(event.target);
    handlePreviw(event.target.files[0], event.target.name);
  };
  const handlePreviw = (media, targetName) => {
    if (media && targetName) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(media);
      if (mediaType === "image") {
        fileReader.addEventListener("load", function() {
          setPreviewContent(`
                        <img src="${this.result}" alt="${targetName}"  class="h-44"/>
                    `);
        });
      } else if (mediaType === "video") {
        fileReader.addEventListener("load", function() {
          setPreviewContent(`<video class="h-44" controls>
                         <source src="${this.result}" type="video/mp4">
                         Your browser does not support the video tag
                     </video>`);
        });
      }
    } else if (!media && !targetName) {
      if (mediaType === "image") {
        setPreviewContent(`
                    <img src="${baseUrlAsset}/${defaultValue}" alt="${targetName}"  class="h-44"/>
               `);
      } else if (mediaType === "video") {
        setPreviewContent(`<video class="h-44" controls>
                         <source src="${baseUrlAsset}/${defaultValue}" type="video/mp4">
                         Your browser does not support the video tag
                     </video>`);
      }
    }
  };
  useEffect(() => {
    setPreviewContent(`
            <img src="${ICPhoto}" alt="No image icon"/>
            <span class="block">No ${mediaType} displayed</span>
        `);
  }, [mediaType]);
  return /* @__PURE__ */ React.createElement("div", { className: "my-4 w-full space-y-1" }, /* @__PURE__ */ React.createElement("span", { className: " text-iapm-dark-gray font-normal block text-sm" }, mediaLabel), /* @__PURE__ */ React.createElement("div", { className: " h-auto border border-dashed border-gray-300 rounded-2xl p-4 flex flex-col justify-center items-center gap-2" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: previewRef,
      className: "lg:w-1/2 w-4/5 h-52 bg-gray-100 p-4 rounded-md flex justify-center items-center flex-col space-y-2",
      dangerouslySetInnerHTML: { __html: previwContent }
    }
  ), /* @__PURE__ */ React.createElement(
    "label",
    {
      htmlFor: mediaId,
      className: "bg-iapm-yellow w-max py-2 px-4 rounded-2xl"
    },
    mediaButtonLabel
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "file",
      id: mediaId,
      name: mediaName,
      className: "hidden",
      onChange: handleChange,
      accept: `${mediaType}/*`
    }
  )), errorMessage && /* @__PURE__ */ React.createElement("span", { className: "text-iapm-red text-sm" }, errorMessage));
};
const RichEditor = (props) => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "text-iapm-dark-gray block text-base font-poppins" }, "Description"), /* @__PURE__ */ React.createElement(
    Editor,
    {
      onInit: (evt, editor) => editorRef.current = editor,
      initialValue: "<p>This is the initial content of the editor.</p>",
      init: {
        height: 500,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount"
        ],
        toolbar: "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
      }
    }
  ), /* @__PURE__ */ React.createElement("button", { onClick: log }, "Log editor content"));
};
const ServiceForm = (props) => {
  const { mode } = props;
  const formik = useFormik({
    initialValues: {
      title: "",
      short_description: "",
      image: "",
      description: ""
    }
  });
  const handleForm = (target) => {
    const { name, value, type } = target;
    formik.setFieldValue(name, type === "file" ? target.files[0] : value);
  };
  console.log(formik.values);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ae, null, /* @__PURE__ */ React.createElement("title", null, "Service Form")), /* @__PURE__ */ React.createElement(AdminLayout, null, /* @__PURE__ */ React.createElement("section", { className: "space-y-6 mt-8" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white shadow rounded-3xl p-6 border border-gray-100 my-6" }, mode === "update" ? /* @__PURE__ */ React.createElement(H3, null, "Update Service") : /* @__PURE__ */ React.createElement(H3, null, "Add Service"), /* @__PURE__ */ React.createElement("form", { action: "" }, /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Title",
      inputName: "title",
      inputId: "title",
      inputType: "text",
      onChange: handleForm
    }
  ), /* @__PURE__ */ React.createElement(
    ITextarea,
    {
      textareaLabel: "Short Description",
      textareaName: "short_description",
      textareaId: "short_description",
      onChange: handleForm
    }
  ), /* @__PURE__ */ React.createElement(
    InputMedia,
    {
      mediaLabel: "Image",
      mediaId: "image",
      mediaName: "image",
      mediaType: "image",
      mediaButtonLabel: "Choose Image",
      onChange: handleForm
    }
  ), /* @__PURE__ */ React.createElement(RichEditor, null))))));
};
const __vite_glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ServiceForm
}, Symbol.toStringTag, { value: "Module" }));
const Service$1 = (props) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ae, null, /* @__PURE__ */ React.createElement("title", null, "Service")), /* @__PURE__ */ React.createElement(AdminLayout, null, /* @__PURE__ */ React.createElement("section", { className: "space-y-6 mt-8" }, /* @__PURE__ */ React.createElement(H3, null, "Service"), /* @__PURE__ */ React.createElement("div", { className: "bg-white shadow-md rounded-3xl p-6 border border-gray-100 my-6 flex justify-between flex-wrap" }, /* @__PURE__ */ React.createElement(
    IButton,
    {
      variant: "primary",
      isLink: true,
      url: "/service-products/form"
    },
    /* @__PURE__ */ React.createElement(PlusIcon, { className: "w-6 h-6 text-iapm-black" }),
    "Add Service"
  )))));
};
const __vite_glob_1_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Service$1
}, Symbol.toStringTag, { value: "Module" }));
const LogoImage = "/build/assets/3dLogo-9924950f.svg";
const CompanyDesc = (props) => {
  return /* @__PURE__ */ React.createElement("section", { className: "w-full bg-iapm-light-gray shadow-[-1px_-149px_65px_-159px_rgba(0,0,0,0.03)_inset] border-b border-b-iapm-light-gray" }, /* @__PURE__ */ React.createElement("div", { className: "bg-grid py-20 bg-no-repeat bg-left-top" }, /* @__PURE__ */ React.createElement("div", { className: "grid max-md:grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto px-6 md:px-8 gap-8 max-md:gap-6 items-start" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-8 min-h-screen" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white space-y-6 p-6 rounded-3xl shadow-md" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement("span", { className: "p-2 bg-iapm-yellow block w-max rounded-full h-max" }, /* @__PURE__ */ React.createElement(BuildingOffice2Icon, { className: "w-6 h-6" })), /* @__PURE__ */ React.createElement(H3, null, "About IAPM Elinksolution")), /* @__PURE__ */ React.createElement(Paragraph, null, "IAPM e-Link Solution Indonesia is the company's business transformation professionals in the field of Information Technology become a solution company project management consultants, certification services, business analysts, and of course still is a reliable consulting company in the field of information technology that became the core business of the corporation a decade ago. Business transformation carried out By applying an international standard framework to each service, Thus the experience of the solution provided is ensured under Industry standardization is global.")), /* @__PURE__ */ React.createElement("div", { className: "bg-white space-y-6 p-6 rounded-3xl shadow-md" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement("span", { className: "p-2 bg-iapm-yellow block w-max rounded-full h-max" }, /* @__PURE__ */ React.createElement(EyeIcon, { className: "w-6 h-6" })), /* @__PURE__ */ React.createElement(H3, null, "Vision")), /* @__PURE__ */ React.createElement(Paragraph, null, 'The vision of IAPM e-Link Solution Indonesia is "Making IAPM e-Link Solution Indonesia a reliable partner with global solutions in the field of Project Management, Business Analysis, and Information Technology Management that are quality and reliable"')), /* @__PURE__ */ React.createElement("div", { className: "bg-white space-y-6 p-6 rounded-3xl shadow-md" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement("span", { className: "p-2 bg-iapm-yellow block w-max rounded-full h-max" }, /* @__PURE__ */ React.createElement(RocketLaunchIcon, { className: "w-6 h-6" })), /* @__PURE__ */ React.createElement(H3, null, "Mission")), /* @__PURE__ */ React.createElement(Paragraph, null, `IAPM e-Link Solution Indonesia's mission is "Establish harmonious cooperation with investors, clients and partners, improving skills, interpretation, humanist personnel, honest, transparent, educate clients, provide analysis of handling Project, Business and Information Technology problems in a manner Fast and precise, prioritizing the quality of service solutions. Framework implementation internationally certified: International Association of Project Managers (IAPM) Europe, International Institute of Business Analyst (IIBA) and ISO/IEC standardization 27001”.`))), /* @__PURE__ */ React.createElement("div", { className: "max-md:hidden sticky top-36" }, /* @__PURE__ */ React.createElement("div", { className: "after:content-logo after:bg-white after:px-4 after:py-2 after:rounded-full after:shadow-md after:-bottom-8 after:absolute after:left-6" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: LogoImage,
      alt: "",
      className: "aspect-square object-cover w-full mx-auto rounded-t-[64px] rounded-br-[64px]"
    }
  ))))));
};
const __vite_glob_1_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CompanyDesc
}, Symbol.toStringTag, { value: "Module" }));
const TabBar = (props) => {
  const { children: children2, datas, onClickMenu } = props;
  const [activeMenu, setActiveMenu] = useState(0);
  const handleClickMenu = (index) => {
    setActiveMenu(index);
    onClickMenu(index);
  };
  useEffect(() => {
    setActiveMenu(0);
  }, []);
  return /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-flow-col lg:auto-cols-fr md:auto-cols-auto gap-6 max-md:grid-cols-1" }, /* @__PURE__ */ React.createElement("ul", { className: "md:space-y-12 max-md:flex max-md:justify-start max-md:gap-6 max-sm:flex-wrap max-md:items-center w-full" }, datas.map((val, i) => {
    return /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("button", { onClick: () => handleClickMenu(i) }, i == activeMenu ? /* @__PURE__ */ React.createElement("h3", { className: "text-3xl max-md:text-2xl text-iapm-black font-semibold" }, val.year) : /* @__PURE__ */ React.createElement("h3", { className: "text-3xl max-md:text-2xl text-iapm-gray font-semibold" }, val.year)));
  })), /* @__PURE__ */ React.createElement("div", { className: "w-full space-y-8 col-span-3" }, children2));
};
const HistoryDevelopment$1 = () => {
  const [displayedData, setDisplayedData] = useState({});
  const dummyData = [
    {
      year: 2014,
      description: "Online Payment Integrator Cloud Microsoft Azure, Google, Amazon AWS Information Technology System Design Architect"
    },
    {
      year: 2017,
      description: "Accredited Project Manager and Project Requirement Analyst Certified Informations System Security"
    },
    {
      year: 2020,
      description: "Certified International Associations of Project Managers, Scrum Master Europe Business Value Oriented Project Manager Enterprise Resource Planning ERP UK ISO/ IEC 27001 2019 Auditor Century Link GDC: Data Center Facility Planning and Management Schneider"
    },
    {
      year: 2022,
      description: "Financial Analyst and Investing Corporate Cyber Security Capability of Business Analyst - International Institute of Business Analyst (IIBA)"
    }
  ];
  const onClickMenu = (index) => {
    setDisplayedData(dummyData[index]);
  };
  useEffect(() => {
    setDisplayedData(dummyData[0]);
  }, []);
  return /* @__PURE__ */ React.createElement("section", { className: "w-full px-6 md:px-8 my-36 bg-grid bg-no-repeat" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-screen-xl mx-auto bg-gradient-linear-white space-y-16 " }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(H3, null, "History Of Development"), /* @__PURE__ */ React.createElement(Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit."))), /* @__PURE__ */ React.createElement("div", { className: "relative items-center max-lg:grid-cols-1" }, /* @__PURE__ */ React.createElement("div", { className: "" }, /* @__PURE__ */ React.createElement(TabBar, { datas: dummyData, onClickMenu }, /* @__PURE__ */ React.createElement("div", { className: "grid gap-6 grid-cols-2 items-center max-md:grid-cols-1" }, /* @__PURE__ */ React.createElement("div", { className: "border border-iapm-red rounded-[32px]  mt-8 ml-8" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: Image,
      alt: "",
      className: "aspect-[4/3] object-cover w-full mx-auto relative -left-8 -top-8 rounded-t-[32px] rounded-br-[32px] rounded-bl-lg"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement(H3, null, "What have we completed in", " ", displayedData.year, "?"), /* @__PURE__ */ React.createElement(Paragraph, null, displayedData.description))))))));
};
const __vite_glob_1_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HistoryDevelopment$1
}, Symbol.toStringTag, { value: "Module" }));
const HistoryDevelopment = () => {
  const [displayedData, setDisplayedData] = useState({});
  const dummyData = [
    {
      year: 2014,
      description: "Online Payment Integrator Cloud Microsoft Azure, Google, Amazon AWS Information Technology System Design Architect"
    },
    {
      year: 2017,
      description: "Accredited Project Manager and Project Requirement Analyst Certified Informations System Security"
    },
    {
      year: 2020,
      description: "Certified International Associations of Project Managers, Scrum Master Europe Business Value Oriented Project Manager Enterprise Resource Planning ERP UK ISO/ IEC 27001 2019 Auditor Century Link GDC: Data Center Facility Planning and Management Schneider"
    },
    {
      year: 2022,
      description: "Financial Analyst and Investing Corporate Cyber Security Capability of Business Analyst - International Institute of Business Analyst (IIBA)"
    }
  ];
  const onClickMenu = (index) => {
    setDisplayedData(dummyData[index]);
  };
  useEffect(() => {
    setDisplayedData(dummyData[0]);
  }, []);
  return /* @__PURE__ */ React.createElement("section", { className: "w-full px-6 md:px-8 my-36 bg-grid bg-no-repeat" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-screen-xl mx-auto bg-gradient-linear-white space-y-16 " }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(H3, null, "History Of Development"), /* @__PURE__ */ React.createElement(Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit."))), /* @__PURE__ */ React.createElement("div", { className: "relative items-center max-lg:grid-cols-1" }, /* @__PURE__ */ React.createElement("div", { className: "" }, /* @__PURE__ */ React.createElement(TabBar, { datas: dummyData, onClickMenu }, /* @__PURE__ */ React.createElement("div", { className: "grid gap-6 grid-cols-2 items-center max-md:grid-cols-1" }, /* @__PURE__ */ React.createElement("div", { className: "border border-iapm-red rounded-[32px]  mt-8 ml-8" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: Image,
      alt: "",
      className: "aspect-[4/3] object-cover w-full mx-auto relative -left-8 -top-8 rounded-t-[32px] rounded-br-[32px] rounded-bl-lg"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement(H3, null, "What have we completed in", " ", displayedData.year, "?"), /* @__PURE__ */ React.createElement(Paragraph, null, displayedData.description))))))));
};
const About = (props) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ae, null, /* @__PURE__ */ React.createElement("title", null, "About Us")), /* @__PURE__ */ React.createElement(ClientLayout, null, /* @__PURE__ */ React.createElement(CompanyDesc, null), /* @__PURE__ */ React.createElement(HistoryDevelopment, null), /* @__PURE__ */ React.createElement(CTA, null)));
};
const __vite_glob_1_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
const DummyImage = "/build/assets/bg-service-d43db916.jpg";
const BlogSuggestion = (props) => {
  return /* @__PURE__ */ React.createElement("section", { className: "w-full" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-6 " }, /* @__PURE__ */ React.createElement(H4, null, "Recent Posts"), /* @__PURE__ */ React.createElement("div", { className: "grid gap-4 lg:grid-cols-1 max-lg:grid-cols-4  md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1" }, [...new Array(4)].map((_, i) => {
    return /* @__PURE__ */ React.createElement(de, { className: "flex gap-2 items-center ", key: i }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: DummyImage,
        alt: "",
        className: "rounded-lg max-w-[100px] object-cover aspect-square"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Paragraph, null, "Lorem ipsum dolor sit amet consectetur.."), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(CalendarIcon, { className: "w-5 h-5 text-iapm-dark-gray" }), /* @__PURE__ */ React.createElement(Caption, null, "14/02/2023"))));
  }))));
};
const __vite_glob_1_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BlogSuggestion
}, Symbol.toStringTag, { value: "Module" }));
const ICWhatsapp = "/build/assets/ic-whatsapp-a52d360f.svg";
const ICTwitter = "/build/assets/ic-twitter-bb4e0194.svg";
const ICFacebook = "/build/assets/ic-facebook-b5d40dce.svg";
const SocialSharing = (props) => {
  const { url, sharingMedia, qoute, hashtag } = props;
  const socialUrls = {
    facebook: `https://web.facebook.com/sharer/sharer.php?u=${url}&quote=${qoute}&hashtag=%23${hashtag}&_rdc=1&_rdr`,
    whatsapp: `https://web.whatsapp.com/send?text=${url}`,
    twitter: `https://twitter.com/intent/tweet?url=${url}`
  };
  const socialIcons = {
    facebook: ICFacebook,
    twitter: ICTwitter,
    whatsapp: ICWhatsapp
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("a", { href: socialUrls[sharingMedia], target: "_blank" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: socialIcons[sharingMedia],
      alt: "icon",
      className: "h-8 w-8"
    }
  )));
};
const ReadingView = (porps) => {
  const dummyData = {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    exceprt: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.`,
    published: "14/08/2023",
    content: `<h3>What is Lorem Ipsum?</h3> <p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
including versions of Lorem Ipsum.<p> <h3>Where does it come from?</h3><p>Contrary to popular belief,
Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the 
cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>`
  };
  return /* @__PURE__ */ React.createElement("section", { className: "max-w-screen-xl mx-auto mb-32 mt-16 px-6 md:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-4 max-lg:grid-cols-3 gap-6 md:gap-8" }, /* @__PURE__ */ React.createElement("div", { className: "md:col-span-1 max-sm:col-span-full" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-4 lg:sticky lg:top-16" }, /* @__PURE__ */ React.createElement(H5, null, "Share this post "), /* @__PURE__ */ React.createElement("div", { className: "flex space-x-4 " }, /* @__PURE__ */ React.createElement(
    SocialSharing,
    {
      url: "test.com",
      sharingMedia: "facebook",
      qoute: "test",
      hashtag: "123"
    }
  ), /* @__PURE__ */ React.createElement(
    SocialSharing,
    {
      url: "test.com",
      sharingMedia: "twitter"
    }
  ), /* @__PURE__ */ React.createElement(
    SocialSharing,
    {
      url: "test.com",
      sharingMedia: "whatsapp"
    }
  )))), /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-2 max-lg:col-span-2 max-md:col-span-full space-y-6" }, /* @__PURE__ */ React.createElement(H2, null, dummyData.title), /* @__PURE__ */ React.createElement("div", { className: "flex gap-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(CalendarIcon, { className: "w-5 h-5 text-iapm-dark-gray" }), /* @__PURE__ */ React.createElement(Caption, null, dummyData.published)), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(EyeIcon, { className: "w-5 h-5 text-iapm-dark-gray" }), /* @__PURE__ */ React.createElement(Caption, null, "124"))), /* @__PURE__ */ React.createElement("img", { src: DummyImage, alt: "", className: "rounded-xl" }), /* @__PURE__ */ React.createElement(
    "div",
    {
      dangerouslySetInnerHTML: { __html: dummyData.content },
      className: "space-y-4"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "col-span-1 max-lg:col-span-full " }, /* @__PURE__ */ React.createElement("div", { className: "lg:sticky lg:top-16" }, /* @__PURE__ */ React.createElement(BlogSuggestion, null)))));
};
const __vite_glob_1_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ReadingView
}, Symbol.toStringTag, { value: "Module" }));
const BlogDetail = (props) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ae, null, /* @__PURE__ */ React.createElement("title", null, "Lorem ipsum dolor sit.")), /* @__PURE__ */ React.createElement(ClientLayout, null, /* @__PURE__ */ React.createElement(ReadingView, null)));
};
const __vite_glob_1_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BlogDetail
}, Symbol.toStringTag, { value: "Module" }));
const Badge = (props) => {
  const { children: children2 } = props;
  return /* @__PURE__ */ React.createElement("span", { className: "block py-1 px-2 bg-iapm-light-gray rounded-full border border-gray-200" }, /* @__PURE__ */ React.createElement(Caption, null, children2));
};
const BlogCollection = (props) => {
  return /* @__PURE__ */ React.createElement("section", { className: "w-full my-16" }, /* @__PURE__ */ React.createElement("div", { className: " max-w-screen-xl px-6 md:px-8 mx-auto grid gap-6 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-3" }, /* @__PURE__ */ React.createElement(
    de,
    {
      className: "grid grid-cols-2 gap-6 max-sm:col-span-1 max-md:col-span-2 md:col-span-3 max-md:grid-cols-1 mb-16",
      href: ""
    },
    /* @__PURE__ */ React.createElement("img", { src: DummyImage, alt: "", className: "rounded-lg" }),
    /* @__PURE__ */ React.createElement("div", { className: "w-full space-y-6" }, /* @__PURE__ */ React.createElement(H3, null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, tempore?"), /* @__PURE__ */ React.createElement(Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae sequi sit placeat suscipit laudantium ipsam saepe ad odio, quis soluta."), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, /* @__PURE__ */ React.createElement(Badge, null, "Technology"), /* @__PURE__ */ React.createElement(Badge, null, "Latest")), /* @__PURE__ */ React.createElement(Caption, null, "Posted on : 32/08/2023"))
  ), /* @__PURE__ */ React.createElement("div", { className: "sm:hidden" }, /* @__PURE__ */ React.createElement(H3, null, "Other posts")), [...new Array(6)].map((_, i) => {
    return /* @__PURE__ */ React.createElement(de, { href: "", className: "space-y-4 block", key: i }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: DummyImage,
        alt: "",
        className: "rounded-lg"
      }
    ), /* @__PURE__ */ React.createElement(H4, null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, tempore?"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap" }, /* @__PURE__ */ React.createElement(Badge, null, "Project Magement")), /* @__PURE__ */ React.createElement(Caption, null, "Posted on : 32/08/2023"));
  })));
};
const __vite_glob_1_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BlogCollection
}, Symbol.toStringTag, { value: "Module" }));
const SearchInput = (props) => {
  const { onChange, defaultValue, inputType, inputName, inputId } = props;
  const handleChangeSearch = (e) => {
    onChange(e.target);
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "relative flex gap-6" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-x-0 flex items-center h-full px-6 w-min" }, /* @__PURE__ */ React.createElement(MagnifyingGlassIcon, { className: "w-6 h-6 text-iapm-dark-gray" })), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: inputType,
      id: inputId,
      name: inputName,
      placeholder: "Search ...",
      className: "w-full bg-gray-100 py-3 pl-16  rounded-xl border-gray-100 dark:focus:border-iapm-yellow focus:border-iapm-yellow",
      onChange: handleChangeSearch
    }
  ), /* @__PURE__ */ React.createElement("button", { className: "py-3 px-4 bg-iapm-yellow rounded-xl" }, "Search")));
};
const BlogHeader = (props) => {
  const [keyword, setKeyword] = useState("");
  const handleChangeSearch = (target) => {
    setKeyword(target.value);
  };
  return /* @__PURE__ */ React.createElement("section", { className: "my-16 " }, /* @__PURE__ */ React.createElement("div", { className: " max-w-screen-xl mx-auto px-6 md:px-8 space-y-6 " }, /* @__PURE__ */ React.createElement(H2, null, "Our Blogs"), /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement(
    SearchInput,
    {
      inputName: "blog-search",
      inputId: "blogSearch",
      onChange: handleChangeSearch
    }
  ))));
};
const __vite_glob_1_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BlogHeader
}, Symbol.toStringTag, { value: "Module" }));
const Blog = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ae, null, /* @__PURE__ */ React.createElement("title", null, "Blog")), /* @__PURE__ */ React.createElement(ClientLayout, null, /* @__PURE__ */ React.createElement(BlogHeader, null), /* @__PURE__ */ React.createElement(BlogCollection, null)));
};
const __vite_glob_1_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Blog
}, Symbol.toStringTag, { value: "Module" }));
const ProductOverview = (props) => {
  return /* @__PURE__ */ React.createElement("section", { className: "w-full my-36" }, /* @__PURE__ */ React.createElement("div", { className: " max-w-screen-xl mx-auto px-6 md:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center gap-6 max-sm:flex-col max-sm:items-start" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(H2, null, "Services We Offer"), /* @__PURE__ */ React.createElement(Paragraph, null, "We provide a variety of services that are integrated with the global framework")), /* @__PURE__ */ React.createElement(
    IButton,
    {
      isLink: true,
      url: "/services",
      variant: "normal-link"
    },
    "Explore All",
    " ",
    /* @__PURE__ */ React.createElement(ArrowRightIcon, { className: "w-6 h-6 text-iapm-black" })
  )), /* @__PURE__ */ React.createElement("div", { className: "my-6" }, /* @__PURE__ */ React.createElement(SwiperContainer, null, [...new Array(4)].map((_, i) => {
    return /* @__PURE__ */ React.createElement(SwiperSlide, { key: i }, /* @__PURE__ */ React.createElement("div", { className: "min-w-[320px] min-h-[320px] bg-white mb-16" }, /* @__PURE__ */ React.createElement("div", { className: " overflow-hidden rounded-xl" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: Image,
        alt: "",
        className: "w-full h-auto rounded-xl hover:scale-110 transition duration-200"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "my-4 space-y-6 " }, /* @__PURE__ */ React.createElement(Subtitle, null, "Business Analyst & Portfolio Management"), /* @__PURE__ */ React.createElement(
      IButton,
      {
        isLink: true,
        url: "/services",
        variant: "link-border"
      },
      "Learn More"
    ))));
  })))));
};
const __vite_glob_1_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProductOverview
}, Symbol.toStringTag, { value: "Module" }));
const ServiceDisplay = (props) => {
  const content = `<h3>What is Lorem Ipsum?</h3> <p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
including versions of Lorem Ipsum.<p> <h3>Where does it come from?</h3><p>Contrary to popular belief,
Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the 
cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>`;
  return /* @__PURE__ */ React.createElement("section", { className: "min-h-screen py-16" }, /* @__PURE__ */ React.createElement("div", { className: " max-w-screen-xl mx-auto px-6 md:px-8 grid grid-cols-2 max-md:grid-cols-1 gap-8" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: DummyImage,
      alt: "",
      className: "aspect-square object-cover w-full mx-auto rounded-t-[64px] rounded-bl-[64px] sticky top-36 max-md:static"
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "space-y-8" }, /* @__PURE__ */ React.createElement(H2, null, "Business Analyst & Portfolio Management"), /* @__PURE__ */ React.createElement(
    "div",
    {
      dangerouslySetInnerHTML: { __html: content },
      className: "space-y-2"
    }
  ))));
};
const __vite_glob_1_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ServiceDisplay
}, Symbol.toStringTag, { value: "Module" }));
const ServiceHeader = (props) => {
  return /* @__PURE__ */ React.createElement("section", { className: "bg-no-repeat bg-left bg-grid " }, /* @__PURE__ */ React.createElement("div", { className: " h-full py-16 bg-opacity-60" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-screen-xl mx-auto px-6 md:px-8 " }, /* @__PURE__ */ React.createElement("span", { className: "bg-iapm-yellow block w-max h-max p-4 rounded-full mb-6" }, /* @__PURE__ */ React.createElement(CubeIcon, { className: "w-12 h-12" })), /* @__PURE__ */ React.createElement(H2, null, "Our Service"), /* @__PURE__ */ React.createElement("div", { className: "md:max-w-[70vw]" }, /* @__PURE__ */ React.createElement(Paragraph, null, "Business transformation carried out By applying an international standard framework to each service, Thus the experience of the solution provided is ensured in accordance with Global industry standardization.")))));
};
const __vite_glob_1_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ServiceHeader
}, Symbol.toStringTag, { value: "Module" }));
const ServiceListing = (props) => {
  return /* @__PURE__ */ React.createElement("section", { className: "max-w-screen-xl mx-auto px-6 md:px-8 mb-16" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-6 items-center max-md:grid-cols-1 " }, /* @__PURE__ */ React.createElement("div", { className: "md:pr-16" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: DummyImage,
      alt: "image product 1",
      className: "rounded-3xl w-full"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement(H3, null, "Business Analyst & ", /* @__PURE__ */ React.createElement("br", null), "Portfolio Management"), /* @__PURE__ */ React.createElement(Paragraph, null, "Analisa bisnis dan portofolio Manajemen strategis dan Resiko bisnis Product Management (Design and Technical Writers) Data Analytics"), /* @__PURE__ */ React.createElement(IButton, { isLink: true, variant: "link-border" }, "Learn More"))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-6 items-center max-md:grid-cols-1 my-10" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-6 order-2 md:order-1" }, /* @__PURE__ */ React.createElement(H3, null, "Business Analyst & ", /* @__PURE__ */ React.createElement("br", null), "Portfolio Management"), /* @__PURE__ */ React.createElement(Paragraph, null, "Analisa bisnis dan portofolio Manajemen strategis dan Resiko bisnis Product Management (Design and Technical Writers) Data Analytics"), /* @__PURE__ */ React.createElement(IButton, { isLink: true, variant: "link-border" }, "Learn More")), /* @__PURE__ */ React.createElement("div", { className: "md:pr-16 order-1 md:order-2" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: DummyImage,
      alt: "image product 1",
      className: "rounded-3xl w-full"
    }
  ))));
};
const __vite_glob_1_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ServiceListing
}, Symbol.toStringTag, { value: "Module" }));
const ServiceSuggestion = (props) => {
  return /* @__PURE__ */ React.createElement("section", { className: "py-24" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-screen-xl space-y-8 mx-auto px-6 md:px-8" }, /* @__PURE__ */ React.createElement(H3, null, "Our other services"), /* @__PURE__ */ React.createElement("div", { className: "grid gap-6 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" }, [...new Array(4)].map((_, i) => {
    return /* @__PURE__ */ React.createElement("div", { className: "md:max-w-[320px] space-y-4", key: i }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: DummyImage,
        alt: "",
        className: "aspect-square rounded-xl object-cover w-auto"
      }
    ), /* @__PURE__ */ React.createElement(H5, null, "Business Analyst & Portfolio Management"), /* @__PURE__ */ React.createElement(IButton, { isLink: true, variant: "link-border" }, "Learn More"));
  }))));
};
const __vite_glob_1_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ServiceSuggestion
}, Symbol.toStringTag, { value: "Module" }));
const ServiceDetail = (props) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ae, null, /* @__PURE__ */ React.createElement("title", null, "Services")), /* @__PURE__ */ React.createElement(ClientLayout, null, /* @__PURE__ */ React.createElement(ServiceDisplay, null), /* @__PURE__ */ React.createElement(ServiceSuggestion, null), /* @__PURE__ */ React.createElement(CTA, null)));
};
const __vite_glob_1_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ServiceDetail
}, Symbol.toStringTag, { value: "Module" }));
const Service = (props) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ae, null, /* @__PURE__ */ React.createElement("title", null, "Services")), /* @__PURE__ */ React.createElement(ClientLayout, null, /* @__PURE__ */ React.createElement(ServiceHeader, null), /* @__PURE__ */ React.createElement(ServiceListing, null), /* @__PURE__ */ React.createElement(CTA, null)));
};
const __vite_glob_1_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Service
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => j({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Admin/Dashboard/index.jsx": __vite_glob_1_0, "./Pages/Admin/PageEditor/home.jsx": __vite_glob_1_1, "./Pages/Admin/PageEditor/index.jsx": __vite_glob_1_2, "./Pages/Admin/Service/Form.jsx": __vite_glob_1_3, "./Pages/Admin/Service/index.jsx": __vite_glob_1_4, "./Pages/Client/About/Section/CompanyDesc.jsx": __vite_glob_1_5, "./Pages/Client/About/Section/HistoryDevelopment.jsx": __vite_glob_1_6, "./Pages/Client/About/index.jsx": __vite_glob_1_7, "./Pages/Client/Blog/BlogDetail.jsx": __vite_glob_1_8, "./Pages/Client/Blog/Section/BlogCollection.jsx": __vite_glob_1_9, "./Pages/Client/Blog/Section/BlogHeader.jsx": __vite_glob_1_10, "./Pages/Client/Blog/Section/BlogSuggestion.jsx": __vite_glob_1_11, "./Pages/Client/Blog/Section/ReadingView.jsx": __vite_glob_1_12, "./Pages/Client/Blog/index.jsx": __vite_glob_1_13, "./Pages/Client/Home/Section/Capability.jsx": __vite_glob_1_14, "./Pages/Client/Home/Section/ClientGalery.jsx": __vite_glob_1_15, "./Pages/Client/Home/Section/Hero.jsx": __vite_glob_1_16, "./Pages/Client/Home/Section/ProductOverview.jsx": __vite_glob_1_17, "./Pages/Client/Home/Section/Testimonial.jsx": __vite_glob_1_18, "./Pages/Client/Home/index.jsx": __vite_glob_1_19, "./Pages/Client/Service/Section/ServiceDisplay.jsx": __vite_glob_1_20, "./Pages/Client/Service/Section/ServiceHeader.jsx": __vite_glob_1_21, "./Pages/Client/Service/Section/ServiceListing.jsx": __vite_glob_1_22, "./Pages/Client/Service/Section/ServiceSuggestion.jsx": __vite_glob_1_23, "./Pages/Client/Service/ServiceDetail.jsx": __vite_glob_1_24, "./Pages/Client/Service/index.jsx": __vite_glob_1_25 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ App, props }) => /* @__PURE__ */ React.createElement(App, { ...props })
  })
);
