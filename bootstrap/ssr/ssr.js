import React, { useState, useRef, useEffect } from "react";
import { Link, Head, createInertiaApp } from "@inertiajs/react";
import { XMarkIcon, Bars3BottomRightIcon, MapPinIcon, EnvelopeIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import ReactDOMServer from "react-dom/server";
import createServer from "@inertiajs/react/server";
const Logo = "/build/assets/logo-07a76e50.svg";
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
  return /* @__PURE__ */ React.createElement("nav", { className: "w-full font-poppins bg-white px-6 md:px-8 top-0 z-50 bg-opacity-60 backdrop-blur" }, /* @__PURE__ */ React.createElement("div", { className: "py-4 flex max-w-screen-xl justify-between mx-auto items-center" }, /* @__PURE__ */ React.createElement(Link, { href: "/" }, /* @__PURE__ */ React.createElement("img", { src: Logo, alt: "IAPM Logo" })), /* @__PURE__ */ React.createElement(
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
      /* @__PURE__ */ React.createElement(Link, { href: "/" }, "Home")
    ),
    /* @__PURE__ */ React.createElement(
      "li",
      {
        className: currentUrl === "/services" ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement(Link, { href: "/services" }, "Services")
    ),
    /* @__PURE__ */ React.createElement(
      "li",
      {
        className: currentUrl === "/about-us" ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement(Link, { href: "/about-us" }, "About")
    ),
    /* @__PURE__ */ React.createElement(
      "li",
      {
        className: currentUrl === "/blogs" ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement(Link, { href: "/blogs" }, "Blog")
    )
  ), /* @__PURE__ */ React.createElement("button", { className: "p-2 md:hidden", onClick: hanldeNavbarMenu }, isNavbar ? /* @__PURE__ */ React.createElement(XMarkIcon, { className: "w-6 h-6 text-iapm-black" }) : /* @__PURE__ */ React.createElement(Bars3BottomRightIcon, { className: "w-6 h-6 text-iapm-black" }))));
};
const H1 = ({ children }) => {
  return /* @__PURE__ */ React.createElement("h1", { className: "text-4xl font-semibold text-iapm-black leading-relaxed" }, children);
};
const H2 = ({ children }) => {
  return /* @__PURE__ */ React.createElement("h2", { className: "text-3xl font-semibold text-iapm-black leading-relaxed" }, children);
};
const H3 = ({ children }) => {
  return /* @__PURE__ */ React.createElement("h3", { className: "text-2xl font-semibold text-iapm-black leading-relaxed" }, children);
};
const H5 = (props) => {
  const { children, isBold } = props;
  return /* @__PURE__ */ React.createElement("h5", { className: "text-lg font-semibold text-iapm-black leading-relaxed" }, children);
};
const H6 = ({ children }) => {
  return /* @__PURE__ */ React.createElement("h6", { className: "text-md font-semibold text-iapm-black leading-relaxed" }, children);
};
const Paragraph = ({ children }) => {
  return /* @__PURE__ */ React.createElement("p", { className: " leading-relaxed text-iapm-dark-gray" }, children);
};
const Subtitle = ({ children }) => {
  return /* @__PURE__ */ React.createElement("h6", { className: "text-lg text-iapm-black leading-relaxed" }, children);
};
const Footer = (props) => {
  return /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("div", { className: " grid grid-cols-4 max-lg:grid-cols-1 max-w-screen-xl mx-auto py-16 font-poppins px-6 md:px-6 gap-8 box-border" }, /* @__PURE__ */ React.createElement("div", { className: "w-max" }, /* @__PURE__ */ React.createElement("img", { src: Logo, alt: "logo" })), /* @__PURE__ */ React.createElement("div", { className: " col-span-3" }, /* @__PURE__ */ React.createElement("ul", { className: "grid md:grid-flow-col md:auto-cols-auto gap-6 max-md:grid-cols-2 max-sm:grid-cols-1" }, /* @__PURE__ */ React.createElement("li", { className: "space-y-4" }, /* @__PURE__ */ React.createElement(H6, null, "Menu"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(
    Link,
    {
      href: "/",
      className: "block text-iapm-dark-gray"
    },
    "Home"
  ), /* @__PURE__ */ React.createElement(
    Link,
    {
      href: "/services",
      className: "block text-iapm-dark-gray"
    },
    "Service"
  ), /* @__PURE__ */ React.createElement(
    Link,
    {
      href: "/",
      className: "block text-iapm-dark-gray"
    },
    "About Us"
  ), /* @__PURE__ */ React.createElement(
    Link,
    {
      href: "/",
      className: "block text-iapm-dark-gray"
    },
    "Blog"
  ))), /* @__PURE__ */ React.createElement("li", { className: "space-y-4" }, /* @__PURE__ */ React.createElement(H6, null, "Address"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-6 h-6" }, /* @__PURE__ */ React.createElement(MapPinIcon, { className: "w-6 h-6 block text-iapm-dark-gray" })), /* @__PURE__ */ React.createElement(Paragraph, null, "Cenderawasih Green Residence Alamanda Cluster DE-02 Jember 62881")))), /* @__PURE__ */ React.createElement("li", { className: "space-y-4" }, /* @__PURE__ */ React.createElement(H6, null, "Contact"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 items-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-6 h-6" }, /* @__PURE__ */ React.createElement(EnvelopeIcon, { className: "w-6 h-6 block text-iapm-dark-gray" })), /* @__PURE__ */ React.createElement(Paragraph, null, "hello@iapmelinksolution.co.id"))))))), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center py-6 border-t border-t-light-gray max-w-screen-xl mx-auto px-6 md:px-6" }, /* @__PURE__ */ React.createElement(Paragraph, null, "Copyright © PT IAPM Elinksolution Indonesia 2023")));
};
const ClientLayout = ({ children }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("main", { className: "bg-grid bg-white min-h-screen bg-no-repeat bg-right-top font-poppins pt-8" }, children), /* @__PURE__ */ React.createElement(Footer, null));
};
const About = (props) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "About Us")), /* @__PURE__ */ React.createElement(ClientLayout, null));
};
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
const IButton = (props) => {
  const { action, children, type, variant, isLink, url } = props;
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, isLink === true ? /* @__PURE__ */ React.createElement(Link, { href: url, className: buttonStyle[variant] }, children) : /* @__PURE__ */ React.createElement(
    "button",
    {
      className: buttonStyle[variant],
      type,
      onClick: handleAction
    },
    children
  ));
};
const Hero = (props) => {
  const { title, description, largeImage: largeImage2, smallImage: smallImage2 } = props;
  return /* @__PURE__ */ React.createElement("section", { className: "grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto items-center px-6 md:px-8 gap-16 pt-16" }, /* @__PURE__ */ React.createElement("div", { className: "w-full space-y-8" }, /* @__PURE__ */ React.createElement(H1, null, title), /* @__PURE__ */ React.createElement(Paragraph, null, description), /* @__PURE__ */ React.createElement(IButton, { isLink: true, url: "/services", variant: "primary" }, "Explore a Service")), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center gap-6 box-border" }, /* @__PURE__ */ React.createElement(
    "span",
    {
      className: "block w-64 max-md:w-48 h-[24rem] max-md:h-72 rounded-full mt-20 bg-cover bg-no-repeat bg-center relative before:content-[''] \n                    before:block before:w-24 before:h-24 before:bg-rounded-shape before:absolute before:bg-no-repeat before:bg-center before:right-0 \n                    before:-top-24 before:max-md:-top-28 after:block after:w-48 after:h-full after:bg-chart after:absolute after:bg-no-repeat after:bg-center \n                    after:-left-20 after:-bottom-28 after:max-md:-left-6",
      style: { backgroundImage: `url('${largeImage2}')` }
    }
  ), /* @__PURE__ */ React.createElement(
    "span",
    {
      className: "block w-56 max-md:w-36 h-80 max-md:h-48  rounded-full bg-cover bg-no-repeat bg-center relative after:content-[''] \n                    after:block after:w-full after:h-full after:bg-triangle-shape after:absolute after:bg-no-repeat after:bg-center after:bg-contain \n                    after:right-0 after:-bottom-64",
      style: { backgroundImage: `url('${smallImage2}')` }
    }
  )));
};
const largeImage = "/build/assets/first-image-f644032f.svg";
const smallImage = "/build/assets/second-image-f7f255a5.svg";
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
const VideoSource = "/build/assets/video-822e4afa.mp4";
const VideoSection = (props) => {
  return /* @__PURE__ */ React.createElement(
    "section",
    {
      className: "w-full mt-28 mb-40 bg-iapm-light-gray relative py-16 after:content-[''] after:bock after:w-48 after:h-56 after:bg-dot-ornament \n        after:bg-no-repeat after:absolute after:right-0 after:-bottom-24 after:md:-bottom-32 after:max-md:w-24 after:max-md:h-36 after:z-0"
    },
    /* @__PURE__ */ React.createElement("div", { className: " max-w-screen-xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("video", { className: "rounded-xl", controls: true }, /* @__PURE__ */ React.createElement("source", { src: VideoSource, type: "video/mp4" }), "Your browser does not support the video tag.")), /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement(H2, null, "Technology is important for your business development"), /* @__PURE__ */ React.createElement(Paragraph, null, "Including Global Framework certified, those are key point to drive your business Growth exponentially")))
  );
};
const Image = "/build/assets/product-1dc7c071.png";
const swiper = "";
const pagination = "";
const navigation = "";
const SwiperContainer = (props) => {
  const { children } = props;
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
    /* @__PURE__ */ React.createElement("div", { className: "py-32" }, children)
  );
};
const ProductOverview = (props) => {
  return /* @__PURE__ */ React.createElement("section", { className: "w-full my-28" }, /* @__PURE__ */ React.createElement("div", { className: " max-w-screen-xl mx-auto px-6 md:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center gap-6 max-sm:flex-col max-sm:items-start" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(H2, null, "Services We Offer"), /* @__PURE__ */ React.createElement(Paragraph, null, "We provide a variety of services that are integrated with the global framework")), /* @__PURE__ */ React.createElement(
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
  const { children } = props;
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
    children
  );
};
const Testimonial = (props) => {
  return /* @__PURE__ */ React.createElement("section", { className: "w-full my-28 bg-grid bg-no-repeat" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-screen-xl mx-auto px-6 md:px-8 text-center space-y-12 bg-gradient-linear-white" }, /* @__PURE__ */ React.createElement(H2, null, "What do they say about us?"), /* @__PURE__ */ React.createElement(Carousel, null, [...new Array(3)].map((_, i) => {
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Home")), /* @__PURE__ */ React.createElement(ClientLayout, null, /* @__PURE__ */ React.createElement(
    Hero,
    {
      title: dummy.heroTitle,
      description: dummy.heroDescription,
      largeImage,
      smallImage
    }
  ), /* @__PURE__ */ React.createElement(ClientGalery, null), /* @__PURE__ */ React.createElement(VideoSection, null), /* @__PURE__ */ React.createElement(ProductOverview, null), /* @__PURE__ */ React.createElement(Testimonial, null), /* @__PURE__ */ React.createElement(CTA, null)));
};
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HomePage
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Client/About.jsx": __vite_glob_1_0, "./Pages/Client/Home.jsx": __vite_glob_1_1 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ App, props }) => /* @__PURE__ */ React.createElement(App, { ...props })
  })
);
