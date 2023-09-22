import React, { useState, useRef, useEffect } from "react";
import { XMarkIcon, RectangleGroupIcon, BuildingStorefrontIcon, BuildingOfficeIcon, DocumentTextIcon, ChevronDownIcon, ChatBubbleBottomCenterTextIcon, NewspaperIcon, PhotoIcon, WindowIcon, Bars3BottomLeftIcon, UserIcon, ArrowPathIcon, PlusIcon, ShieldCheckIcon, EyeSlashIcon, EyeIcon, ChevronRightIcon, PencilIcon, TrashIcon, MagnifyingGlassIcon, ArrowUpRightIcon, RocketLaunchIcon, Bars3BottomRightIcon, MapPinIcon, EnvelopeIcon, PhoneIcon, BuildingOffice2Icon, ArrowRightIcon, CubeIcon, GlobeAmericasIcon, CalendarIcon, BellAlertIcon } from "@heroicons/react/24/outline";
import { Link, router as router$1, Head, createInertiaApp } from "@inertiajs/react";
import MaterialReactTable from "material-react-table";
import Swal from "sweetalert2";
import { MenuItem } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Select from "react-select";
import { Editor } from "@tinymce/tinymce-react";
import ReactGA from "react-ga";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import ReCAPTCHA from "react-google-recaptcha";
import ReactDOMServer from "react-dom/server";
import createServer from "@inertiajs/react/server";
const Modal = (props) => {
  const { title, handleModal, children } = props;
  const handleOpenModal = () => {
    handleModal();
  };
  return /* @__PURE__ */ React.createElement("section", { className: "fixed w-screen h-screen bg-iapm-black bg-opacity-60 top-0 left-0 right-0 z-50 overflow-y-scroll pb-16" }, /* @__PURE__ */ React.createElement("div", { className: " max-w-screen-xxl px-4 md:px-8 mx-auto mt-20 " }, /* @__PURE__ */ React.createElement("div", { className: "p-6 rounded-3xl bg-white md:w-1/2 w-full mx-auto" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mb-6 border-b pb-2 border-gray-100" }, /* @__PURE__ */ React.createElement("h5", { className: "text-lg text-iapm-black capitalize" }, title), /* @__PURE__ */ React.createElement("button", { onClick: handleOpenModal, className: "py-2 px-4" }, /* @__PURE__ */ React.createElement(XMarkIcon, { className: "w-6 h-6 text-iapm-dark-gray" }))), /* @__PURE__ */ React.createElement("div", null, children))));
};
const Logo$1 = "/build/assets/logo-07a76e50.svg";
const SidebarMenu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pageSubmenu, setPageSubmenu] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("/dashboard");
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const menusRef = useRef(null);
  const menusStyle = {
    active: "py-2 px-2 rounded-lg bg-iapm-yellow w-full flex gap-4 justify-between",
    normal: "py-2 px-2 hover:bg-gray-100 rounded-lg  w-full flex gap-4 justify-between"
  };
  const asideStyle = {
    normal: "px-6 py-8 bg-white shadow-lg h-screen font-poppins w-72 fixed top-[77px] transition duration-200 translate-x-0 z-30",
    hidden: "px-6 py-8 bg-white shadow-lg h-screen font-poppins w-72 fixed top-[77px] transition duration-200 -translate-x-72 z-30 "
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
  const dropdownMenuStyle = {
    open: "bg-white absolute top-16 right-0 py-4 px-6 shadow rounded-lg",
    close: "bg-white absolute top-16 right-0 py-4 px-6 shadow rounded-lg hidden"
  };
  const handelDropdownMenu = () => {
    setDropdownMenu((condition) => !condition);
  };
  useEffect(() => {
    if (menusRef) {
      const currentUrl2 = window.location.pathname;
      setCurrentUrl(currentUrl2);
    }
  }, []);
  const handelSignOut = () => {
    router$1.post("/logout");
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("aside", { className: "relative" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: sidebarOpen === true ? asideStyle.normal : asideStyle.hidden
    },
    /* @__PURE__ */ React.createElement("ul", { className: "space-y-4 overflow-y-scroll custom-scrollbar max-h-screen pr-2" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
      Link,
      {
        href: "/dashboard",
        className: currentUrl.includes("/dashboard") ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 " }, /* @__PURE__ */ React.createElement(RectangleGroupIcon, { className: "w-6 h-6" }), "Dashboad")
    )), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
      Link,
      {
        className: currentUrl.includes("/service-products") ? menusStyle.active : menusStyle.normal,
        href: "/service-products"
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(BuildingStorefrontIcon, { className: "w-6 h-6" }), "Services")
    )), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
      Link,
      {
        className: currentUrl.includes("/company") ? menusStyle.active : menusStyle.normal,
        href: "/company"
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(BuildingOfficeIcon, { className: "w-6 h-6" }), "Company")
    )), /* @__PURE__ */ React.createElement("li", { className: "space-y-4" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: currentUrl.includes("/pages") ? menusStyle.active : menusStyle.normal,
        onClick: handleOpenPageMenu
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(DocumentTextIcon, { className: "w-6 h-6" }), "Page"),
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
        Link,
        {
          className: "py-2 pr-2 pl-10 hover:bg-gray-100 rounded-lg flex gap-4 justify-between",
          href: "/pages/home-page"
        },
        "Home Page"
      )),
      /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
        Link,
        {
          href: "/pages/about-page",
          className: "py-2 pr-2 pl-10 hover:bg-gray-100 rounded-lg flex gap-4 justify-between"
        },
        "About Page"
      )),
      /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
        Link,
        {
          href: "/pages/service-page",
          className: "py-2 pr-2 pl-10 hover:bg-gray-100 rounded-lg flex gap-4 justify-between"
        },
        "Service Page"
      ))
    )), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
      Link,
      {
        href: "/testimonials",
        className: currentUrl.includes("/testimonials") ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(ChatBubbleBottomCenterTextIcon, { className: "w-6 h-6" }), "Testimonial")
    )), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
      Link,
      {
        href: "/manage-blogs",
        className: currentUrl.includes("/manage-blogs") ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(NewspaperIcon, { className: "w-6 h-6" }), "Blog")
    )), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
      Link,
      {
        href: "/web-assets",
        className: currentUrl.includes("/web-assets") ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(PhotoIcon, { className: "w-6 h-6" }), "Web Asset")
    )), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
      Link,
      {
        href: "/web-attributes",
        className: currentUrl.includes("/web-attributes") ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(WindowIcon, { className: "w-6 h-6" }), "Web Attribute")
    )))
  ), /* @__PURE__ */ React.createElement("nav", { className: "w-full bg-white border-b h-fit fixed py-4 font-poppins z-40 box-border" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between max-w-screen-xl w-full items-center mx-auto box-border px-6 md:px-8" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: " border-2 border-gray-200 p-2 rounded-lg block",
      onClick: handleOpenSidebar
    },
    sidebarOpen === true ? /* @__PURE__ */ React.createElement(XMarkIcon, { className: "w-6 h-6" }) : /* @__PURE__ */ React.createElement(Bars3BottomLeftIcon, { className: "w-6 h-6" })
  ), /* @__PURE__ */ React.createElement("div", { className: "max-sm:hidden" }, /* @__PURE__ */ React.createElement("img", { src: Logo$1, alt: "IAMP Logo" })), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "bg-iapm-yellow p-2 rounded-full  border-2 border-gray-300",
      onClick: handelDropdownMenu
    },
    /* @__PURE__ */ React.createElement(UserIcon, { className: "w-6 h-6" })
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: dropdownMenu === true ? dropdownMenuStyle.open : dropdownMenuStyle.close
    },
    /* @__PURE__ */ React.createElement("ul", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, { href: "" }, "Account")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "flex gap-2 whitespace-nowrap",
        onClick: handelSignOut
      },
      "Logout"
    )))
  ))))));
};
const AdminLayout = (props) => {
  const { children } = props;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "flex bg-iapm-light-gray" }, /* @__PURE__ */ React.createElement(SidebarMenu, null), /* @__PURE__ */ React.createElement(
    "main",
    {
      className: "max-w-screen-xl px-6 md:px-8 mx-auto pt-20 min-h-screen bg-no-repeat bg-right-top \r\n                font-poppins w-full overflow-x-hidden box-border"
    },
    children
  )));
};
const IButton = (props) => {
  const {
    action,
    children,
    type,
    variant,
    isLink,
    url,
    isLoading,
    isDisable = false
  } = props;
  const buttonStyle = {
    primary: "w-max bg-iapm-yellow px-4 py-3 rounded-xl font-popins text-iapm-black font-medium flex gap-4 whitespace-nowrap disabled:opacity-60",
    "normal-link": "w-max font-popins text-iapm-black font-medium flex gap-4 whitespace-nowrap",
    "link-border": "w-max border border-iapm-dark-gray px-4 py-3 rounded-xl font-popins text-iapm-black font-medium flex gap-4 whitespace-nowrap",
    "cta-button": "w-max bg-iapm-yellow px-4 py-3 rounded-xl font-popins border border-iapm-black text-iapm-black font-medium flex gap-4 whitespace-nowrap "
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
      onClick: action && handleAction,
      disabled: isDisable
    },
    isLoading ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ArrowPathIcon, { className: "w-6 h-6 text-iapm-black animate-spin" }), /* @__PURE__ */ React.createElement("span", { className: "text-iapm-black block" }, "Loading ...")) : children
  ));
};
const ITable = (props) => {
  const { datas, columns, action } = props;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    MaterialReactTable,
    {
      columns,
      data: datas,
      enableRowActions: true,
      renderRowActionMenuItems: action,
      onHoveredColumnChange: false,
      enableColumnFilterModes: false,
      enableGlobalFilter: true,
      muiTablePaperProps: {
        sx: {
          boxShadow: "none"
        }
      }
    }
  ));
};
const H1 = ({ children }) => {
  return /* @__PURE__ */ React.createElement("h1", { className: "text-4xl font-semibold text-iapm-black leading-relaxed" }, children);
};
const H2 = (props) => {
  const { children, isDark } = props;
  const textStyle = {
    light: "text-3xl font-semibold text-iapm-black leading-relaxed",
    dark: "text-3xl font-semibold text-white leading-relaxed"
  };
  return /* @__PURE__ */ React.createElement("h2", { className: isDark === true ? textStyle.dark : textStyle.light }, children);
};
const H3 = ({ children }) => {
  return /* @__PURE__ */ React.createElement("h3", { className: "text-2xl font-semibold text-iapm-black leading-relaxed" }, children);
};
const H4 = ({ children }) => {
  return /* @__PURE__ */ React.createElement("h4", { className: "text-xl font-semibold text-iapm-black leading-relaxed" }, children);
};
const H5 = (props) => {
  const { children, isBold } = props;
  return /* @__PURE__ */ React.createElement("h5", { className: "text-lg font-semibold text-iapm-black leading-relaxed" }, children);
};
const H6 = (props) => {
  const { children, isDark } = props;
  const textStyle = {
    light: "text-md font-semibold text-iapm-black leading-relaxed",
    dark: "text-md font-semibold text-white leading-relaxed"
  };
  return /* @__PURE__ */ React.createElement("h6", { className: isDark ? textStyle.dark : textStyle.light }, children);
};
const Paragraph = (props) => {
  const { children, isDark } = props;
  const textStyle = {
    light: "leading-relaxed text-iapm-dark-gray",
    dark: "leading-relaxed text-iapm-light-gray"
  };
  return /* @__PURE__ */ React.createElement("p", { className: isDark === true ? textStyle.dark : textStyle.light }, children);
};
const Subtitle = ({ children }) => {
  return /* @__PURE__ */ React.createElement("h6", { className: "text-lg text-iapm-black leading-relaxed" }, children);
};
const Caption = (props) => {
  const { children } = props;
  return /* @__PURE__ */ React.createElement("span", { className: "text-sm font-poppins text-iapm-black block" }, children);
};
const getErrorMessage$1 = (errors) => {
  let errorMessage = "";
  Object.keys(errors).forEach((value, i) => {
    return errorMessage += `${errors[value]} ${i === Object.keys(errors).length - 1 ? "" : ", "}`;
  });
  return errorMessage;
};
const toastSettings = {
  position: "top-end",
  showConfirmButton: false,
  timer: 3e3,
  toast: true
};
const confirmSetttings = {
  title: "Are you sure?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#FDC204",
  cancelButtonColor: "#E12838",
  confirmButtonText: "Yes, delete it!"
};
const IInput = (props) => {
  const {
    inputLabel,
    inputName,
    inputId,
    defaultValue,
    onChange,
    inputType,
    errorMessage,
    disable
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
      disabled: disable,
      className: " bg-gray-100 rounded-lg w-full px-4 py-3 font-poppins focus:border focus:border-iapm-yellow disabled:text-gray-400"
    }
  ), !!errorMessage && /* @__PURE__ */ React.createElement("span", { className: "text-sm text-iapm-red block" }, errorMessage));
};
const ICPhoto = "/build/assets/ic-photo-ac1131ce.svg";
const InputMedia = (props) => {
  const previewRef = useRef(null);
  const [previwContent, setPreviewContent] = useState();
  const baseUrlAsset2 = "http://iapm.domaintesting.site/asset";
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
                    <img src="${baseUrlAsset2}/${defaultValue}" alt="${targetName}"  class="h-44"/>
               `);
      } else if (mediaType === "video") {
        setPreviewContent(`<video class="h-44" controls>
                         <source src="${baseUrlAsset2}/${defaultValue}" type="video/mp4">
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
  useEffect(() => {
    defaultValue && handlePreviw();
  }, [defaultValue]);
  return /* @__PURE__ */ React.createElement("div", { className: "my-4 w-full space-y-1" }, /* @__PURE__ */ React.createElement("span", { className: " text-iapm-dark-gray font-normal block text-base" }, mediaLabel), /* @__PURE__ */ React.createElement("div", { className: " h-auto border border-dashed border-gray-300 rounded-2xl p-4 flex flex-col justify-center items-center gap-2" }, /* @__PURE__ */ React.createElement(
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
const serviceValidationSchema = yup.object().shape({
  service_name: yup.string().required("Service name must be filled in").min(6, "The service name must contain at least 6 characters"),
  short_description: yup.string().required("Short description must be filled in").min(10, "The short description must contain at least 10 characters"),
  image: yup.mixed().required("Service Image must be filled in"),
  description: yup.string().required("Service description must be filled in")
});
const assetValidationSchema = yup.object().shape({
  asset_name: yup.string().required("File name must be filled in").min(3, "The file name must contain at least 3 characters"),
  asset_type: yup.string().required("File type must be filled in").test(
    "file type validation",
    "error message",
    (value, validationContext) => {
      const { createError } = validationContext;
      if (value !== "Image" && value !== "Video") {
        return createError({
          message: "File type must be image or video "
        });
      }
      return true;
    }
  ),
  file: yup.mixed().required("Asset file must be filled in")
});
const testimonialValidationSchema = yup.object().shape({
  name: yup.string().required("Name must be filled in").min(3, "The name must contain at least 3 characters"),
  position: yup.string().required("Position must be filled in").min(3, "The position must contain at least 3 characters"),
  quote: yup.string().required("Qote must be filled in").min(8, "The quote must contain at least 8 characters")
});
const contactValidationSchema = yup.object().shape({
  contact_type: yup.string().required("Contact type must be filled in").min(3),
  contact: yup.string().required("This input field is required").min(3, "The contact must contain at least 3 characters").test("contact-test", "error message", (value, validationContext) => {
    const {
      createError,
      parent: { contact_type }
    } = validationContext;
    if (!value) {
      return createError({
        message: "Contact field is required"
      });
    }
    if (contact_type === "Mail") {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return createError({
          message: "Invalid email format"
        });
      }
    }
    if (contact_type == "WhatsApp" || contact_type === "Telephone") {
      if (!/^(\+62|62|0)8[1-9][0-9]{6,9}$/.test(value)) {
        return createError({
          message: "Invalid phone number format"
        });
      }
    }
    if (contact_type === "Telegram") {
      if (!/^[a-zA-Z0-9]+$/.test(value)) {
        return createError({
          message: "Username invalid"
        });
      }
    }
    return true;
  })
});
const addressValidationSchema = yup.object().shape({
  address: yup.string().required("Address must be filled in").min(15, "The address must contain at least 15 characters")
});
const socialValidationSchema = yup.object().shape({
  social_type: yup.string().required("Social media type must be filled in").min(3),
  username: yup.string().required("Username must be filled").min(3),
  link: yup.string().required("Social media link must be filled in").matches(
    /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/,
    {
      message: "Invalid link format"
    }
  )
});
const postValidationSchema = yup.object().shape({
  title: yup.string().required("Title must be filled in").min(10, "The title must contain at least 10 characters "),
  slug: yup.string().required("Complete the title to create the slug"),
  status: yup.string().required("Status must be filled in").test(
    "status type validation",
    "error message",
    (value, validationContext) => {
      const { createError } = validationContext;
      if (value !== "Published" && value !== "Draft") {
        return createError({
          message: "Status must be Published or Draft"
        });
      }
      return true;
    }
  )
});
const categoryValidationSchema = yup.object().shape({
  category_name: yup.string().required("Category name must be filled in").min(3, "Category name must contain at least 3 characters")
});
const companyDescriptionSchema = yup.object().shape({
  description: yup.string().required("Description must be filledin").min(10, "Description must contain at least 10 characters")
});
const companyVisionSchema = yup.object().shape({
  vision: yup.string().required("Vision must be filledin").min(10, "Vision must contain at least 10 characters")
});
const companyMissionSchema = yup.object().shape({
  mission: yup.string().required("Mission must be filledin").min(10, "Mission must contain at least 10 characters")
});
const historyDevelopmentValidationSchema = yup.object().shape({
  year: yup.number().required("Year must be filled in").min(4, "Year must contain at least 4 character"),
  history_description: yup.string().required("History description must be filled in").min(10, "History description must contain at least 10 character")
});
const signInValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email must be filled in").test("contact-test", "error message", (value, validationContext) => {
    const { createError } = validationContext;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return createError({
        message: "Invalid email format"
      });
    }
    return true;
  }),
  password: yup.string().required("Password must be filled in").min(8, "Password must be contain at least 8 character")
});
const sendMailValidationSchema = yup.object().shape({
  name: yup.string().required("Name must be filled in").matches(/^[A-Za-z ]*$/, "Please enter valid name"),
  email: yup.string().email("Invalid email format").required("Email must be filled in").test("contact-test", "error message", (value, validationContext) => {
    const { createError } = validationContext;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return createError({
        message: "Invalid email format"
      });
    }
    return true;
  }),
  message: yup.string().required("Message must be filled in").min(10, "Message must be contain at least 10 character"),
  token: yup.mixed().required("ReCaptcha must be filled in")
});
const ISelect = (props) => {
  const {
    options,
    defaultValue,
    selectLabel,
    selectId,
    selectName,
    errorMessage,
    onChange,
    isMulti
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
    let target2 = {
      name: selectName,
      value: isMulti ? event : event.value
    };
    onChange(target2);
  };
  const getIndex = (option) => {
    return option.value === defaultValue;
  };
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
      isMulti,
      onChange: handleChange,
      options,
      id: selectId,
      name: selectName,
      defaultValue: isMulti === true ? defaultValue : options[options.findIndex(getIndex)],
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
const Asset = (props) => {
  const { assets, errors, flash } = props;
  const [isModalOpen, setModalOpen] = useState(false);
  const [updateProps, setUpdateProps] = useState({
    isUpdates: false,
    idUpdate: ""
  });
  const assetColumn = [
    {
      header: "Asset Name",
      accessorKey: "asset_name"
    },
    {
      header: "Asset Type",
      accessorKey: "asset_type"
    },
    {
      header: "File",
      accessorKey: "file",
      Cell: ({ cell }) => {
        return /* @__PURE__ */ React.createElement(
          "a",
          {
            href: `/media-preview?url=${cell.getValue()}`,
            target: "_blank",
            className: "text-amber-700"
          },
          "View"
        );
      }
    }
  ];
  const assetOptions = [
    { value: "Video", label: "Video" },
    { value: "Image", label: "Image" }
  ];
  const handleSubmit = () => {
    handleOpenModal();
    updateProps.isUpdates ? router$1.post(`/web-assets/${updateProps.idUpdate}`, formik.values) : router$1.post(`/web-assets`, formik.values);
  };
  const formik = useFormik({
    initialValues: {
      asset_name: "",
      asset_type: "",
      file: ""
    },
    validationSchema: assetValidationSchema,
    onSubmit: handleSubmit
  });
  const handleForm = (target2) => {
    const { name, value, type } = target2;
    formik.setFieldValue(name, type === "file" ? target2.files[0] : value);
  };
  const handleOpenModal = () => {
    !!isModalOpen === true && formik.resetForm();
    !!isModalOpen && setUpdateProps({
      isUpdates: false,
      idUpdate: ""
    });
    setModalOpen((currentCondition) => !currentCondition);
  };
  const hanldeDeleteAction = (id) => {
    Swal.fire({
      ...confirmSetttings,
      text: `Delete this web asset`
    }).then((result) => {
      if (result.isConfirmed) {
        router$1.delete(`/web-assets/${id}`);
      }
    });
  };
  const handleUpdateAction = async (assetData) => {
    const { id, asset_name, asset_type, file } = assetData;
    setUpdateProps({
      isUpdates: true,
      idUpdate: id
    });
    handleOpenModal();
    await formik.setFieldValue("asset_type", asset_type);
    await formik.setFieldValue("asset_name", asset_name);
    await formik.setFieldValue("file", file);
  };
  useEffect(() => {
    formik.setFieldValue("file", "");
  }, [formik.values.asset_type]);
  useEffect(() => {
    if (flash == null ? void 0 : flash.success) {
      Swal.fire({
        ...toastSettings,
        icon: "success",
        title: flash.success
      });
      !!isModalOpen && handleOpenModal();
    } else if (Object.keys(errors).length > 0) {
      Swal.fire({
        ...toastSettings,
        icon: "error",
        title: getErrorMessage$1(errors)
      });
      !!isModalOpen && handleOpenModal();
    }
    setUpdateProps({
      isUpdates: false,
      idUpdate: ""
    });
  }, [errors, flash]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Web Asset")), /* @__PURE__ */ React.createElement(AdminLayout, null, !!isModalOpen && /* @__PURE__ */ React.createElement(
    Modal,
    {
      title: updateProps.isUpdates ? "Update Web Asset" : "Add Web Asset",
      handleModal: handleOpenModal
    },
    /* @__PURE__ */ React.createElement("form", { onSubmit: formik.handleSubmit }, /* @__PURE__ */ React.createElement(
      IInput,
      {
        inputLabel: "Asset Filename",
        inputName: "asset_name",
        inputId: "asset_name",
        inputType: "text",
        onChange: handleForm,
        defaultValue: formik.values.asset_name || "",
        errorMessage: formik.errors.asset_name
      }
    ), /* @__PURE__ */ React.createElement(
      ISelect,
      {
        defaultValue: formik.values.asset_type || "",
        selectLabel: "Asset File Type",
        selectName: "asset_type",
        selectId: "asset_type",
        options: assetOptions,
        onChange: handleForm,
        errorMessage: formik.errors.asset_type
      }
    ), formik.values.asset_type && /* @__PURE__ */ React.createElement(
      InputMedia,
      {
        mediaLabel: "File",
        mediaButtonLabel: "Choose File",
        mediaName: "file",
        mediaId: "file",
        onChange: handleForm,
        errorMessage: formik.errors.file,
        defaultValue: formik.values.file || "",
        mediaType: formik.values.asset_type.toLowerCase()
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "flex justify-end my-6" }, /* @__PURE__ */ React.createElement(IButton, { type: "submit", variant: "primary" }, "Submit")))
  ), /* @__PURE__ */ React.createElement("section", { className: "space-y-6 bg-white shadow rounded-3xl p-6 my-6 " }, /* @__PURE__ */ React.createElement(H3, null, "Web Asset"), /* @__PURE__ */ React.createElement("div", { className: "justify-between flex-wrap" }, /* @__PURE__ */ React.createElement(
    IButton,
    {
      variant: "primary",
      isLink: false,
      action: handleOpenModal
    },
    /* @__PURE__ */ React.createElement(PlusIcon, { className: "w-6 h-6 text-iapm-black" }),
    "Add Asset"
  )), /* @__PURE__ */ React.createElement(
    ITable,
    {
      columns: assetColumn,
      datas: assets,
      action: ({ row, closeMenu }) => [
        /* @__PURE__ */ React.createElement(
          MenuItem,
          {
            key: "detail",
            sx: { fontSize: "10pt" },
            onClick: () => {
              handleUpdateAction(row.original);
              closeMenu();
            }
          },
          "Update"
        ),
        /* @__PURE__ */ React.createElement(
          MenuItem,
          {
            key: "edit",
            sx: { fontSize: "10pt" },
            onClick: () => {
              hanldeDeleteAction(row.original.id);
              closeMenu();
            }
          },
          "Delete"
        )
      ]
    }
  ))));
};
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Asset
}, Symbol.toStringTag, { value: "Module" }));
const Terrain = "/build/assets/terrain-896585e1.svg";
const SignIn = (props) => {
  const { errors } = props;
  const [isShowPassword, setShowPassword] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [message, setMessage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [submitLimiter, setSubmitLimiter] = useState({
    time: 60,
    isActive: false
  });
  const handleShowPassword = () => {
    setShowPassword((currentCondition) => !currentCondition);
  };
  const handleSubmit = () => {
    setLoading(true);
    router$1.post("/login", formik.values);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: signInValidationSchema,
    onSubmit: handleSubmit
  });
  const handleForm = (e) => {
    if (invalid && !message.includes("exceeds limit")) {
      setInvalid(false);
      setMessage(null);
    }
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
  };
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setLoading(false);
      const errorMessage = getErrorMessage$1(errors);
      setMessage(errorMessage);
      setInvalid(true);
      errorMessage.includes("exceeds limit") && setSubmitLimiter({ ...submitLimiter, isActive: true });
    }
  }, [errors]);
  const activatedLimiter = (value) => setSubmitLimiter({ isActive: true, time: value });
  useEffect(() => {
    if (submitLimiter.isActive) {
      if (submitLimiter.time === 0) {
        localStorage.removeItem("time_limiter");
        setMessage(null);
        setInvalid(false);
        setSubmitLimiter({ isActive: false, time: 60 });
        return;
      }
      const interval = setInterval(() => {
        setSubmitLimiter({
          ...submitLimiter,
          time: submitLimiter.time - 1
        });
        localStorage.setItem("time_limiter", submitLimiter.time);
      }, 1e3);
      return () => clearInterval(interval);
    }
  }, [submitLimiter]);
  useEffect(() => {
    const localLimiter = localStorage.getItem("time_limiter");
    if (localLimiter !== null) {
      activatedLimiter(localLimiter);
      setMessage("Request exceeds limit, try again in");
      setInvalid(true);
    }
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Login")), /* @__PURE__ */ React.createElement("main", { className: "bg-white font-poppins" }, /* @__PURE__ */ React.createElement("div", { className: "object-cover bg-no-repeat " }, /* @__PURE__ */ React.createElement("section", { className: "max-w-screen-xl h-screen px-6 md:px-8 grid grid-cols-2 max-md:grid-cols-1 items-center mx-auto gap-6" }, /* @__PURE__ */ React.createElement("div", { className: " max-md:hidden p-6" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: Terrain,
      alt: "login pettern image",
      className: "h-1/2"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "w-full mx-auto p-6 max-md:p-0 " }, /* @__PURE__ */ React.createElement("span", { className: "bg-iapm-yellow block w-max h-max p-4 rounded-full mb-6" }, /* @__PURE__ */ React.createElement(ShieldCheckIcon, { className: "w-12 h-12" })), /* @__PURE__ */ React.createElement("div", { className: "my-4" }, /* @__PURE__ */ React.createElement(H2, null, " Login"), /* @__PURE__ */ React.createElement(Paragraph, null, "Enter your registered email and password")), /* @__PURE__ */ React.createElement("form", { onSubmit: formik.handleSubmit }, /* @__PURE__ */ React.createElement("div", { className: "py-4" }, /* @__PURE__ */ React.createElement(
    "label",
    {
      htmlFor: "email",
      className: "mb-2 text-iapm-dark-gray"
    },
    "Email"
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      autoComplete: "off",
      onChange: handleForm,
      name: "email",
      id: "email",
      type: "email",
      value: formik.values.email || "",
      className: "bg-gray-100 rounded-lg w-full px-4 py-3 font-poppins focus:border focus:border-iapm-yellow disabled:text-gray-400"
    }
  ), formik.errors.email && /* @__PURE__ */ React.createElement("span", { className: "text-sm text-iapm-red" }, formik.errors.email)), /* @__PURE__ */ React.createElement("div", { className: "py-4 " }, /* @__PURE__ */ React.createElement(
    "label",
    {
      htmlFor: "password",
      className: "mb-2 text-iapm-dark-gray"
    },
    "Password"
  ), /* @__PURE__ */ React.createElement("div", { className: "bg-gray-100 flex rounded-lg w-full relative" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      autoComplete: "off",
      onChange: handleForm,
      id: "password",
      name: "password",
      value: formik.values.password || "",
      type: isShowPassword ? "text" : "password",
      className: "rounded-lg bg-transparent w-full px-4 py-3 font-poppins focus:border focus:border-iapm-yellow disabled:text-gray-400"
    }
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "px-4 py-3 absolute right-0",
      type: "button",
      onClick: handleShowPassword
    },
    !isShowPassword ? /* @__PURE__ */ React.createElement(EyeSlashIcon, { className: "w-6 h-6 text-iapm-dark-gray" }) : /* @__PURE__ */ React.createElement(EyeIcon, { className: "w-6 h-6 text-iapm-dark-gray" })
  )), formik.errors.password && /* @__PURE__ */ React.createElement("span", { className: "text-sm text-iapm-red" }, formik.errors.password)), invalid && /* @__PURE__ */ React.createElement("span", { className: "text-sm text-iapm-red" }, message, " ", submitLimiter.isActive && submitLimiter.time), /* @__PURE__ */ React.createElement("div", { className: "flex justify-end mt-6" }, /* @__PURE__ */ React.createElement(
    IButton,
    {
      variant: "primary",
      type: "submit",
      isLoading,
      isDisable: submitLimiter.isActive
    },
    "Login",
    /* @__PURE__ */ React.createElement(ChevronRightIcon, { className: "w-6 h-6" })
  )))))), /* @__PURE__ */ React.createElement("span", { className: "absolute w-max bottom-2 m-auto left-0 right-0 font-poppins text-iapm-dark-gray" }, "IAPM Elinksolution Indonesia 2023")));
};
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SignIn
}, Symbol.toStringTag, { value: "Module" }));
const BlogCategory = (props) => {
  const { categories, errors } = props;
  const [isOpenModal, setOpenModal] = useState(false);
  const [updateProps, setUpdateProps] = useState({
    isUpdate: false,
    idUpdate: ""
  });
  const handleSubmit = () => {
    handelOpenModal();
    updateProps.isUpdate ? router$1.put(`/categories/${updateProps.idUpdate}`, formik.values) : router$1.post(`/categories`, formik.values);
  };
  const formik = useFormik({
    initialValues: {
      category_name: ""
    },
    validationSchema: categoryValidationSchema,
    onSubmit: handleSubmit
  });
  const handelForm = (target2) => {
    const { name, value } = target2;
    formik.setFieldValue(name, value);
  };
  const handelOpenModal = () => {
    !!isOpenModal === true && formik.resetForm();
    !!isOpenModal && setUpdateProps({
      isUpdate: false,
      idUpdate: ""
    });
    setOpenModal((currentCondition) => !currentCondition);
  };
  const handleUpdateAction = async (category) => {
    const { id, category_name } = category;
    setUpdateProps({
      isUpdate: true,
      idUpdate: id
    });
    handelOpenModal();
    await formik.setFieldValue("category_name", category_name);
  };
  const handleDeleteAction = (id) => {
    Swal.fire({
      ...confirmSetttings,
      text: `Delete this category`
    }).then((result) => {
      if (result.isConfirmed) {
        router$1.delete(`/categories/${id}`);
      }
    });
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, !!isOpenModal && /* @__PURE__ */ React.createElement(
    Modal,
    {
      title: updateProps.isUpdate ? "Update Category" : "Add Category",
      handleModal: handelOpenModal
    },
    /* @__PURE__ */ React.createElement("form", { onSubmit: formik.handleSubmit }, /* @__PURE__ */ React.createElement(
      IInput,
      {
        inputLabel: "Category Name",
        inputName: "category_name",
        inputId: "category_name",
        onChange: handelForm,
        defaultValue: formik.values.category_name || ""
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "flex justify-end" }, /* @__PURE__ */ React.createElement(IButton, { type: "submit", variant: "primary" }, "Save")))
  ), /* @__PURE__ */ React.createElement(IButton, { variant: "primary", action: handelOpenModal }, /* @__PURE__ */ React.createElement(PlusIcon, { className: "w-6 h-6" }), "Add Category"), /* @__PURE__ */ React.createElement("ul", { className: "grid grid-cols-2 gap-6 max-sm:grid-cols-1" }, Object.keys(categories).length > 0 ? categories.map((category, i) => {
    return /* @__PURE__ */ React.createElement(
      "li",
      {
        className: "p-6 bg-gray-100 rounded-xl flex justify-between items-center gap-4 max-md:flex-col",
        key: i
      },
      /* @__PURE__ */ React.createElement(H6, null, category.category_name),
      /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 max-sm:mt-4" }, /* @__PURE__ */ React.createElement(
        "button",
        {
          className: "p-2 rounded-xl",
          onClick: () => handleUpdateAction(category)
        },
        /* @__PURE__ */ React.createElement(PencilIcon, { className: "w-6 h-6 text-center" })
      ), /* @__PURE__ */ React.createElement(
        "button",
        {
          className: "p-2 rounded-xl",
          onClick: () => handleDeleteAction(category.id)
        },
        /* @__PURE__ */ React.createElement(TrashIcon, { className: "w-6 h-6 text-center" })
      ))
    );
  }) : /* @__PURE__ */ React.createElement("li", { className: "p-6 bg-gray-100 rounded-xl flex justify-center items-center flex-wrap sm:col-span-2 text-center" }, "No Data to display")));
};
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BlogCategory
}, Symbol.toStringTag, { value: "Module" }));
const RichEditor = (props) => {
  const { onChange, defaultValue, editorName, editorLabel, errorMessage } = props;
  const TINY_API_KEY = "g5eqty458zykq4v6gd6i080n07r7isgahp90an865w61ywlx";
  const editorRef = useRef(null);
  const handleChange = (e) => {
    onChange({ name: editorName, value: e });
  };
  return /* @__PURE__ */ React.createElement("div", { className: "my-4 w-full space-y-1" }, /* @__PURE__ */ React.createElement("span", { className: "text-iapm-dark-gray block text-base font-poppins" }, editorLabel), /* @__PURE__ */ React.createElement(
    Editor,
    {
      apiKey: TINY_API_KEY,
      onInit: (evt, editor) => editorRef.current = editor,
      value: defaultValue,
      onEditorChange: handleChange,
      init: {
        height: 500,
        menubar: false,
        plugins: ["lists "],
        toolbar: "undo redo | formatselect | blocks fontsizebold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat ",
        content_style: "body { font-family:Poppins,Helvetica,Arial,sans-serif; font-size:14px }"
      }
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
    errorMessage
  } = props;
  const handleChange = (e) => {
    onChange(e.target);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "my-4 w-full space-y-1" }, /* @__PURE__ */ React.createElement(
    "label",
    {
      htmlFor: textareaId,
      className: "text-iapm-dark-gray block text-base font-poppins capitalize"
    },
    textareaLabel
  ), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      name: textareaName,
      id: textareaId,
      value: defaultValue,
      onChange: handleChange,
      className: " bg-gray-100 rounded-lg w-full px-4 py-3 font-poppins focus:border focus:border-iapm-yellow h-64"
    }
  ), !!errorMessage && /* @__PURE__ */ React.createElement("span", { className: "text-sm text-iapm-red block" }, errorMessage));
};
const BlogForm = (props) => {
  const { post, isUpdate, categories, errors, flash } = props;
  const [categoriesOption, setCategoriesOption] = useState([]);
  const blogStatusOptions = [
    {
      label: "Published",
      value: "Published"
    },
    {
      label: "Draft",
      value: "Draft"
    }
  ];
  const handleSubmit = () => {
    isUpdate === true ? router$1.post(`/manage-blogs/${post.id}/form`, formik.values) : router$1.post(`/manage-blogs`, formik.values);
  };
  const getDefaultValueCategories = () => {
    let result = [];
    if (post == null ? void 0 : post.post_categories) {
      categories.map((category) => {
        post == null ? void 0 : post.post_categories.forEach((val) => {
          if (val.id_category === category.id) {
            result = [
              ...result,
              {
                value: val == null ? void 0 : val.id_category,
                label: category.category_name
              }
            ];
          }
        });
      });
    }
    return result;
  };
  const formik = useFormik({
    initialValues: {
      title: (post == null ? void 0 : post.title) || "",
      content: (post == null ? void 0 : post.content) || "",
      slug: (post == null ? void 0 : post.slug) || "",
      thumbnail: (post == null ? void 0 : post.thumbnail) || "",
      status: (post == null ? void 0 : post.status) || "",
      categories: getDefaultValueCategories(),
      meta_title: (post == null ? void 0 : post.meta_title) || "",
      meta_description: (post == null ? void 0 : post.meta_description) || ""
    },
    validationSchema: postValidationSchema,
    onSubmit: handleSubmit
  });
  const handleForm = (target2) => {
    const { name, value, type } = target2;
    if (name === "categories") {
      formik.setFieldValue(name, value);
    } else {
      formik.setFieldValue(
        name,
        type === "file" ? target2.files[0] : value
      );
    }
    name === "title" && formik.setFieldValue(
      "slug",
      value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "").split(" ").join("-")
    );
  };
  useEffect(() => {
    const result = categories.map((category) => {
      return {
        value: category.id,
        label: category.category_name
      };
    });
    setCategoriesOption(result);
  }, [categories]);
  useEffect(() => {
    if (flash == null ? void 0 : flash.success) {
      Swal.fire({
        ...toastSettings,
        icon: "success",
        title: flash.success
      });
      router$1.visit("/manage-blogs");
    } else if (Object.keys(errors).length > 0) {
      Swal.fire({
        ...toastSettings,
        icon: "error",
        title: getErrorMessage$1(errors)
      });
    }
  }, [errors, flash]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Blog Form")), /* @__PURE__ */ React.createElement(AdminLayout, null, /* @__PURE__ */ React.createElement("section", { className: "my-6" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white p-6 rounded-3xl shadow space-y-8" }, /* @__PURE__ */ React.createElement(H3, null, "Blog From"), /* @__PURE__ */ React.createElement(
    "form",
    {
      onSubmit: formik.handleSubmit,
      className: "grid grid-cols-3 gap-6 max-md:grid-cols-1"
    },
    /* @__PURE__ */ React.createElement("div", { className: "md:col-span-2" }, /* @__PURE__ */ React.createElement(H4, null, "Main Form"), /* @__PURE__ */ React.createElement(
      IInput,
      {
        inputLabel: "Title*",
        inputName: "title",
        inputType: "text",
        inputId: "title",
        onChange: handleForm,
        defaultValue: formik.values.title || "",
        errorMessage: formik.errors.title
      }
    ), /* @__PURE__ */ React.createElement(
      ISelect,
      {
        selectLabel: "Status*",
        selectName: "status",
        selectId: "status",
        options: blogStatusOptions,
        onChange: handleForm,
        defaultValue: formik.values.status || "",
        errorMessage: formik.errors.status
      }
    ), /* @__PURE__ */ React.createElement(
      ISelect,
      {
        isMulti: true,
        selectLabel: "Category",
        selectName: "categories",
        selectId: "categories",
        options: categoriesOption,
        onChange: handleForm,
        defaultValue: formik.values.categories || "",
        errorMessage: formik.errors.categories
      }
    ), /* @__PURE__ */ React.createElement(
      IInput,
      {
        inputLabel: "Slug",
        inputName: "slug",
        inputType: "text",
        inputId: "slug",
        disable: true,
        onChange: handleForm,
        defaultValue: formik.values.slug,
        errorMessage: formik.errors.slug
      }
    ), /* @__PURE__ */ React.createElement(
      InputMedia,
      {
        mediaLabel: "Thumbnail",
        mediaButtonLabel: "Choose thumbnail",
        mediaName: "thumbnail",
        mediaId: "thumbnail",
        mediaType: "image",
        onChange: handleForm,
        errorMessage: formik.errors.thumbnail,
        defaultValue: formik.values.thumbnail || ""
      }
    ), /* @__PURE__ */ React.createElement(
      RichEditor,
      {
        editorLabel: "Content",
        editorName: "content",
        onChange: handleForm,
        defaultValue: formik.values.content || "",
        errorMessage: formik.errors.content
      }
    )),
    /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(H4, null, "Additional Form"), /* @__PURE__ */ React.createElement(
      IInput,
      {
        inputLabel: "Meta Title",
        inputName: "meta_title",
        inputType: "text",
        inputId: "meta_title",
        onChange: handleForm,
        defaultValue: formik.values.meta_title,
        errorMessage: formik.errors.meta_title
      }
    ), /* @__PURE__ */ React.createElement(
      ITextarea,
      {
        textareaLabel: "Meta Description (Optional)",
        textareaName: "meta_description",
        textareaId: "meta_description",
        onChange: handleForm,
        defaultValue: formik.values.meta_description || ""
      }
    )),
    /* @__PURE__ */ React.createElement("div", { className: "flex justify-end mt-8 md:col-span-3" }, /* @__PURE__ */ React.createElement(IButton, { variant: "primary", type: "submit" }, "Save"))
  )))));
};
const __vite_glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BlogForm
}, Symbol.toStringTag, { value: "Module" }));
const ListContainer = (props) => {
  const { children } = props;
  return /* @__PURE__ */ React.createElement("ul", { className: "space-y-3 w-full" }, children);
};
const ListItem = (props) => {
  const { children, isEmpty } = props;
  const listStyle = {
    normal: "bg-gray-100 rounded-2xl flex justify-between items-center p-4 max-sm:flex-col max-sm:justify-left max-sm:items-start max-sm:gap-4 box-border",
    noData: "bg-gray-100 rounded-2xl flex justify-center items-center p-4"
  };
  return /* @__PURE__ */ React.createElement("li", { className: isEmpty ? listStyle.noData : listStyle.normal }, children);
};
const defaultImage = "/build/assets/3dLogo-9924950f.svg";
const SearchInput = (props) => {
  const { onChange, inputType, inputName, inputId } = props;
  const handleChangeSearch = (e) => {
    onChange(e.target);
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "relative flex gap-6 z-0" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-x-0 flex items-center h-full px-6 w-min" }, /* @__PURE__ */ React.createElement(MagnifyingGlassIcon, { className: "w-6 h-6 text-iapm-dark-gray" })), /* @__PURE__ */ React.createElement(
    "input",
    {
      autoComplete: "off",
      type: inputType,
      id: inputId,
      name: inputName,
      placeholder: "Search ...",
      className: "w-full bg-gray-100 py-3 pl-16  rounded-xl border-gray-100 dark:focus:border-iapm-yellow focus:border-iapm-yellow",
      onChange: handleChangeSearch
    }
  )));
};
const BlogList = (props) => {
  const { posts } = props;
  const VITE_ASSET_URL = "http://iapm.domaintesting.site/asset";
  const VITE_BLOG_URL = "http://iapm.domaintesting.site/blogs";
  const [keyword, setKeyword] = useState("");
  const handleDeleteAction = (id) => {
    Swal.fire({
      ...confirmSetttings,
      text: `Delete this blog post`
    }).then((result) => {
      if (result.isConfirmed) {
        router$1.delete(`/manage-blogs/${id}`);
      }
    });
  };
  const hanldeChangeKeyword = (target2) => {
    setKeyword(target2.value);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(IButton, { variant: "primary", isLink: true, url: "/manage-blogs/form" }, /* @__PURE__ */ React.createElement(PlusIcon, { className: "w-6 h-6" }), "Add Blog"), /* @__PURE__ */ React.createElement(
    SearchInput,
    {
      inputName: "keyword",
      inputType: "text",
      inputId: "keyword",
      onChange: hanldeChangeKeyword
    }
  ), /* @__PURE__ */ React.createElement(ListContainer, null, Object.keys(posts).length > 0 ? posts.filter((result) => {
    if (keyword === "")
      return result;
    if (result == null ? void 0 : result.title.toLowerCase().includes(keyword.toLowerCase()))
      return result;
  }).map((post, i) => {
    var _a;
    return /* @__PURE__ */ React.createElement(ListItem, { key: i }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 max-sm:flex-col w-full box-border" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: post.thumbnail ? `${VITE_ASSET_URL}/${post.thumbnail}` : defaultImage,
        alt: "",
        className: "aspect-square object-cover sm:max-w-[80px] rounded-xl"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(H6, null, post.title), /* @__PURE__ */ React.createElement("div", { className: "flex gap-6 max-sm:flex-wrap" }, /* @__PURE__ */ React.createElement("span", { className: "flex gap-2 text-iapm-dark-gray text-sm items-center" }, /* @__PURE__ */ React.createElement(EyeIcon, { className: "w-4 h-4" }), ((_a = post == null ? void 0 : post.visits) == null ? void 0 : _a.score) || 0), /* @__PURE__ */ React.createElement("span", { className: "flex gap-2 text-iapm-dark-gray text-sm items-center" }, /* @__PURE__ */ React.createElement(DocumentTextIcon, { className: "w-4 h-4" }), post.status), /* @__PURE__ */ React.createElement(
      "a",
      {
        href: `${VITE_BLOG_URL}/${post.slug}`,
        target: "_blank",
        className: "flex gap-2 text-iapm-dark-gray text-sm items-center"
      },
      /* @__PURE__ */ React.createElement(ArrowUpRightIcon, { className: "w-4 h-4" }),
      "Preview"
    )))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 max-sm:mt-4" }, /* @__PURE__ */ React.createElement(
      Link,
      {
        href: `/manage-blogs/${post.id}/form`,
        className: "p-2 rounded-xl"
      },
      /* @__PURE__ */ React.createElement(PencilIcon, { className: "w-6 h-6 text-center" })
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "p-2 rounded-xl",
        onClick: () => handleDeleteAction(post.id)
      },
      /* @__PURE__ */ React.createElement(TrashIcon, { className: "w-6 h-6 text-center" })
    )));
  }) : /* @__PURE__ */ React.createElement("li", { className: "p-6 bg-gray-100 rounded-xl flex justify-center items-center flex-wrap sm:col-span-2 text-center" }, "No Data to display")));
};
const __vite_glob_1_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BlogList
}, Symbol.toStringTag, { value: "Module" }));
const HorizontalTabBar = (props) => {
  const [menuIndex, setMenuIndex] = useState(0);
  const { menus, menuAction } = props;
  const tabBarStyle = {
    normal: "w-full text-iapm-gray p-2",
    active: "w-full p-2 bg-iapm-yellow rounded-lg"
  };
  const handelClickMenu = (e, index) => {
    setMenuIndex(index);
    menuAction(e.target.innerText);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "w-full flex pb-2 border-b border-b-iamp-gray items-starch" }, menus.map((menu, i) => {
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        className: i === menuIndex ? tabBarStyle.active : tabBarStyle.normal,
        key: i,
        onClick: (e) => handelClickMenu(e, i)
      },
      menu.label
    );
  }));
};
const BlogAuthor = (props) => {
  const { posts, categories, errors, flash } = props;
  const tabBarMenus = [
    {
      label: "Blog List"
    },
    {
      label: "Blog Category"
    }
  ];
  const [activeMenu, setActiveMenu] = useState(tabBarMenus[0].label);
  const hanldeActionMenu = (menu) => {
    setActiveMenu(menu);
  };
  useEffect(() => {
    if (flash == null ? void 0 : flash.success) {
      Swal.fire({
        ...toastSettings,
        icon: "success",
        title: flash.success
      });
      flash.success = null;
    } else if (Object.keys(errors).length > 0) {
      Swal.fire({
        ...toastSettings,
        icon: "error",
        title: getErrorMessage$1(errors)
      });
    }
  }, [errors, flash]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Blog")), /* @__PURE__ */ React.createElement(AdminLayout, null, /* @__PURE__ */ React.createElement("section", { className: "my-6" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white p-6 rounded-3xl shadow flex flex-col gap-8" }, /* @__PURE__ */ React.createElement(H3, null, "Manage Blog"))), /* @__PURE__ */ React.createElement("section", { className: "my-6 bg-white p-6 shadow space-y-6  rounded-3xl  overflow-x-scroll" }, /* @__PURE__ */ React.createElement("div", { className: "mb-16" }, /* @__PURE__ */ React.createElement(
    HorizontalTabBar,
    {
      menus: tabBarMenus,
      menuAction: hanldeActionMenu
    }
  )), activeMenu === "Blog List" ? /* @__PURE__ */ React.createElement(BlogList, { posts }) : activeMenu === "Blog Category" && /* @__PURE__ */ React.createElement(
    BlogCategory,
    {
      errors,
      categories
    }
  ))));
};
const __vite_glob_1_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BlogAuthor
}, Symbol.toStringTag, { value: "Module" }));
const HistoryDevelopement = (props) => {
  const { datas } = props;
  const [isModalOpen, setModalOpen] = useState(false);
  const [updateProps, setUpdateProps] = useState({
    isUpdates: false,
    idUpdate: ""
  });
  const handleOpenModal = () => {
    !!isModalOpen === true && formik.resetForm();
    !!isModalOpen && setUpdateProps({
      isUpdates: false,
      idUpdate: ""
    });
    setModalOpen((currentCondition) => !currentCondition);
  };
  const historyColumns = [
    {
      header: "Year",
      accessorKey: "year"
    },
    {
      header: "Description",
      accessorKey: "history_description"
    }
  ];
  const handleSubmit = () => {
    handleOpenModal();
    updateProps.isUpdates ? router$1.post(
      `/history-development/${updateProps.idUpdate}`,
      formik.values
    ) : router$1.post(`/history-development`, formik.values);
  };
  const formik = useFormik({
    initialValues: {
      year: "",
      history_description: "",
      image: ""
    },
    validationSchema: historyDevelopmentValidationSchema,
    onSubmit: handleSubmit
  });
  const handleForm = (target2) => {
    const { name, value, type } = target2;
    formik.setFieldValue(name, type === "file" ? target2.files[0] : value);
  };
  const handleUpdateAction = async (data) => {
    const { id, year, history_description, image } = data;
    console.log(data);
    setUpdateProps({
      isUpdates: true,
      idUpdate: id
    });
    handleOpenModal();
    await formik.setFieldValue("year", year);
    await formik.setFieldValue("history_description", history_description);
    await formik.setFieldValue("image", image);
  };
  const hanldeDeleteAction = (id) => {
    Swal.fire({
      ...confirmSetttings,
      text: `Delete this history development`
    }).then((result) => {
      if (result.isConfirmed) {
        router$1.delete(`/history-development/${id}`);
      }
    });
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, !!isModalOpen && /* @__PURE__ */ React.createElement(
    Modal,
    {
      title: updateProps.isUpdates ? "Update History Development" : "Add History Development",
      handleModal: handleOpenModal
    },
    /* @__PURE__ */ React.createElement("form", { onSubmit: formik.handleSubmit }, /* @__PURE__ */ React.createElement(
      IInput,
      {
        inputLabel: "Year",
        inputName: "year",
        inputId: "year",
        inputType: "number",
        onChange: handleForm,
        defaultValue: formik.values.year || "",
        errorMessage: formik.errors.year
      }
    ), /* @__PURE__ */ React.createElement(
      ITextarea,
      {
        textareaName: "history_description",
        textareaLabel: "History Description",
        defaultValue: formik.values.history_description || "",
        onChange: handleForm,
        errorMessage: formik.errors.history_description
      }
    ), /* @__PURE__ */ React.createElement(
      InputMedia,
      {
        mediaLabel: "Image",
        mediaButtonLabel: "Choose Image",
        mediaName: "image",
        mediaId: "image",
        onChange: handleForm,
        errorMessage: formik.errors.image,
        defaultValue: formik.values.image || "",
        mediaType: "image"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "flex justify-end my-6" }, /* @__PURE__ */ React.createElement(IButton, { type: "submit", variant: "primary" }, "Submit")))
  ), /* @__PURE__ */ React.createElement("section", { className: "rounded-3xl bg-white p-6" }, /* @__PURE__ */ React.createElement(IButton, { action: handleOpenModal, variant: "primary" }, /* @__PURE__ */ React.createElement(PlusIcon, { className: "w-6 h-6 text-iapm-black" }), "Add History Data"), /* @__PURE__ */ React.createElement(
    ITable,
    {
      columns: historyColumns,
      datas,
      action: ({ row, closeMenu }) => [
        /* @__PURE__ */ React.createElement(
          MenuItem,
          {
            key: "detail",
            sx: { fontSize: "10pt" },
            onClick: () => {
              handleUpdateAction(row.original);
              closeMenu();
            }
          },
          "Update"
        ),
        /* @__PURE__ */ React.createElement(
          MenuItem,
          {
            key: "edit",
            sx: { fontSize: "10pt" },
            onClick: () => {
              hanldeDeleteAction(row.original.id);
              closeMenu();
            }
          },
          "Delete"
        )
      ]
    }
  )));
};
const __vite_glob_1_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HistoryDevelopement
}, Symbol.toStringTag, { value: "Module" }));
const CompanyProfile = (props) => {
  const { datas } = props;
  const [isModalOpen, setModalOpen] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  const [validationSchema, setValidationSchema] = useState();
  const handleSubmit = () => {
    router$1.put("/company", formik.values);
    handelModalOpen();
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: handleSubmit,
    validationSchema
  });
  const handelModalOpen = (initialValue = {}) => {
    isModalOpen ? setInitialValues({}) : setInitialValues(initialValue);
    setModalOpen((currentCondition) => !currentCondition);
  };
  const handleForm = (target2) => {
    const { name, value } = target2;
    formik.setFieldValue(name, value);
  };
  useEffect(() => {
    switch (String(Object.keys(initialValues)[0])) {
      case "description":
        setValidationSchema(companyDescriptionSchema);
        break;
      case "vision":
        setValidationSchema(companyVisionSchema);
        break;
      case "mission":
        setValidationSchema(companyMissionSchema);
        break;
    }
  }, [Object.keys(initialValues)]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, !!isModalOpen && /* @__PURE__ */ React.createElement(
    Modal,
    {
      title: `Update ${Object.keys(formik.values)[0]}`,
      handleModal: handelModalOpen
    },
    /* @__PURE__ */ React.createElement("form", { onSubmit: formik.handleSubmit }, /* @__PURE__ */ React.createElement(
      ITextarea,
      {
        textareaName: Object.keys(initialValues)[0],
        textareaLabel: Object.keys(initialValues)[0],
        defaultValue: formik.values[Object.keys(formik.values)[0]],
        onChange: handleForm,
        errorMessage: formik.errors[Object.keys(initialValues)[0]]
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "flex justify-end" }, /* @__PURE__ */ React.createElement(IButton, { variant: "primary", type: "submit" }, "Save")))
  ), /* @__PURE__ */ React.createElement("section", { className: "grid grid-cols-2 gap-6 max-md:grid-cols-1" }, /* @__PURE__ */ React.createElement("div", { className: "p-6 bg-white rounded-3xl space-y-6 shadow" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 items-center" }, /* @__PURE__ */ React.createElement("span", { className: "p-2 bg-iapm-yellow rounded-full" }, /* @__PURE__ */ React.createElement(DocumentTextIcon, { className: "w-6 h-6" })), /* @__PURE__ */ React.createElement(H4, null, "Company Description")), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "p-2",
      onClick: () => handelModalOpen({
        description: datas == null ? void 0 : datas.description
      })
    },
    /* @__PURE__ */ React.createElement(PencilIcon, { className: "w-6 h-6" })
  )), /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-gray-100 rounded-2xl" }, /* @__PURE__ */ React.createElement(Paragraph, null, (datas == null ? void 0 : datas.description) || "No data to display"))), /* @__PURE__ */ React.createElement("div", { className: "p-6 bg-white rounded-3xl space-y-6 shadow" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 items-center" }, /* @__PURE__ */ React.createElement("span", { className: "p-2 bg-iapm-yellow rounded-full" }, /* @__PURE__ */ React.createElement(EyeIcon, { className: "w-6 h-6" })), /* @__PURE__ */ React.createElement(H4, null, "Vision")), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "p-2",
      onClick: () => handelModalOpen({
        vision: datas == null ? void 0 : datas.vision
      })
    },
    /* @__PURE__ */ React.createElement(PencilIcon, { className: "w-6 h-6" })
  )), /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-gray-100 rounded-2xl" }, /* @__PURE__ */ React.createElement(Paragraph, null, (datas == null ? void 0 : datas.vision) || "No data to display"))), /* @__PURE__ */ React.createElement("div", { className: "p-6 bg-white rounded-3xl space-y-6 shadow" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 items-center" }, /* @__PURE__ */ React.createElement("span", { className: "p-2 bg-iapm-yellow rounded-full" }, /* @__PURE__ */ React.createElement(RocketLaunchIcon, { className: "w-6 h-6" })), /* @__PURE__ */ React.createElement(H4, null, "Mission")), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "p-2",
      onClick: () => handelModalOpen({
        mission: datas == null ? void 0 : datas.mission
      })
    },
    /* @__PURE__ */ React.createElement(PencilIcon, { className: "w-6 h-6" })
  )), /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-gray-100 rounded-2xl" }, /* @__PURE__ */ React.createElement(Paragraph, null, (datas == null ? void 0 : datas.mission) || "No data to display")))));
};
const __vite_glob_1_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CompanyProfile
}, Symbol.toStringTag, { value: "Module" }));
const Company = (props) => {
  const { companyData, histories, flash, errors } = props;
  const tabBarMenus = [
    {
      label: "Profile"
    },
    {
      label: "History Development"
    }
  ];
  const [activeMenu, setActiveMenu] = useState(tabBarMenus[0].label);
  const hanldeActionMenu = (menu) => {
    setActiveMenu(menu);
  };
  useEffect(() => {
    if (flash == null ? void 0 : flash.success) {
      Swal.fire({
        ...toastSettings,
        icon: "success",
        title: flash.success
      });
      flash.success = null;
    } else if (Object.keys(errors).length > 0) {
      Swal.fire({
        ...toastSettings,
        icon: "error",
        title: getErrorMessage(errors)
      });
    }
  }, [errors, flash]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Company")), /* @__PURE__ */ React.createElement(AdminLayout, null, /* @__PURE__ */ React.createElement("section", { className: "space-y-6 bg-white shadow rounded-3xl p-6 my-6 " }, /* @__PURE__ */ React.createElement(H3, null, "Company"), /* @__PURE__ */ React.createElement(
    HorizontalTabBar,
    {
      menus: tabBarMenus,
      menuAction: hanldeActionMenu
    }
  )), /* @__PURE__ */ React.createElement("section", { className: "mb-16" }, activeMenu === "Profile" ? /* @__PURE__ */ React.createElement(CompanyProfile, { datas: companyData }) : activeMenu === "History Development" && /* @__PURE__ */ React.createElement(HistoryDevelopement, { datas: histories }))));
};
const __vite_glob_1_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Company
}, Symbol.toStringTag, { value: "Module" }));
const MessageList = (props) => {
  const { messages } = props;
  const [lastedMessage, setLastedMessage] = useState([]);
  const formatingDate = (date) => {
    const newDate = new Date(date);
    const day = newDate.getDay();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    const time = `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
    return `${day}/${month}/${year} - ${time}`;
  };
  useEffect(() => {
    const newMessageFormat = messages.map((message) => {
      return {
        name: message == null ? void 0 : message.name,
        email: message == null ? void 0 : message.email,
        message: message == null ? void 0 : message.message,
        created_at: formatingDate(message == null ? void 0 : message.created_at)
      };
    });
    setLastedMessage(newMessageFormat);
  }, []);
  console.log(lastedMessage);
  return /* @__PURE__ */ React.createElement("section", { className: "p-6 bg-white shadow rounded-3xl" }, /* @__PURE__ */ React.createElement("div", { className: "mb-6" }, /* @__PURE__ */ React.createElement(H5, null, "Lasted Message"), /* @__PURE__ */ React.createElement(Paragraph, null, "Recent messages sent via email form on the contact page")), /* @__PURE__ */ React.createElement(ListContainer, null, lastedMessage == null ? void 0 : lastedMessage.map((message, i) => {
    return /* @__PURE__ */ React.createElement(ListItem, { key: i }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
      "a",
      {
        href: `mailto:${message == null ? void 0 : message.email}`,
        target: "_blank",
        className: "block space-x-2"
      },
      /* @__PURE__ */ React.createElement("span", { className: " capitalize" }, message == null ? void 0 : message.name),
      /* @__PURE__ */ React.createElement("span", null, "-"),
      /* @__PURE__ */ React.createElement("span", null, message == null ? void 0 : message.email)
    ), /* @__PURE__ */ React.createElement("span", { className: "block text-sm text-iapm-dark-gray" }, message == null ? void 0 : message.created_at), /* @__PURE__ */ React.createElement("div", { className: "mt-4 " }, /* @__PURE__ */ React.createElement(Paragraph, null, message == null ? void 0 : message.message))));
  })));
};
const __vite_glob_1_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MessageList
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard = (props) => {
  const { lastedMessages } = props;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Dashboard")), /* @__PURE__ */ React.createElement(AdminLayout, null, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 my-8" }, /* @__PURE__ */ React.createElement(MessageList, { messages: lastedMessages }))));
};
const __vite_glob_1_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard
}, Symbol.toStringTag, { value: "Module" }));
const MediaPreview = (props) => {
  const { media, type } = props;
  const baseUrl = "http://iapm.domaintesting.site/asset";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Media Previw")), /* @__PURE__ */ React.createElement("main", { className: " max-w-screen-xl px-6 md:px-8 mx-auto" }, /* @__PURE__ */ React.createElement("section", { className: "flex h-screen justify-center items-center " }, type === "Image" && /* @__PURE__ */ React.createElement(
    "img",
    {
      src: `${baseUrl}/${media.url}`,
      alt: "image media preview"
    }
  ), type === "Video" && /* @__PURE__ */ React.createElement("video", { className: "w-full aspect-video", controls: true }, /* @__PURE__ */ React.createElement(
    "source",
    {
      src: `${baseUrl}/${media.url}`,
      type: "video/mp4"
    }
  ), "Your browser does not support the video tag"))));
};
const __vite_glob_1_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MediaPreview
}, Symbol.toStringTag, { value: "Module" }));
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
  return /* @__PURE__ */ React.createElement("nav", { className: "w-full font-poppins bg-white px-6 md:px-8 z-50 " }, /* @__PURE__ */ React.createElement("div", { className: "py-4 flex max-w-screen-xl justify-between mx-auto items-center" }, /* @__PURE__ */ React.createElement(Link, { href: "/" }, /* @__PURE__ */ React.createElement("img", { src: Logo$1, alt: "IAPM Logo" })), /* @__PURE__ */ React.createElement(
    "ul",
    {
      className: `flex gap-10 max-md:absolute max-md:z-40 max-md:flex-col max-md:bg-white max-md:top-[72px] max-md:w-full max-md:left-0 max-md:justify-center max-md:py-6 ${isNavbar ? "" : "max-md:hidden"}`,
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
        className: currentUrl.includes("/services") ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement(Link, { href: "/services" }, "Services")
    ),
    /* @__PURE__ */ React.createElement(
      "li",
      {
        className: currentUrl.includes("/contacts") ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement(Link, { href: "/contacts" }, "Contacts")
    ),
    /* @__PURE__ */ React.createElement(
      "li",
      {
        className: currentUrl.includes("/about-us") ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement(Link, { href: "/about-us" }, "About")
    ),
    /* @__PURE__ */ React.createElement(
      "li",
      {
        className: currentUrl.includes("/blogs") ? menusStyle.active : menusStyle.normal
      },
      /* @__PURE__ */ React.createElement(Link, { href: "/blogs" }, "Blog")
    )
  ), /* @__PURE__ */ React.createElement("button", { className: "p-2 md:hidden", onClick: hanldeNavbarMenu }, isNavbar ? /* @__PURE__ */ React.createElement(XMarkIcon, { className: "w-6 h-6 text-iapm-black" }) : /* @__PURE__ */ React.createElement(Bars3BottomRightIcon, { className: "w-6 h-6 text-iapm-black" }))));
};
const Logo = "/build/assets/dark-logo-acf66319.svg";
const IcInstagtam = "/build/assets/ic-instagram-3ec334e4.svg";
const IcFacebook = "/build/assets/ic-facebook-c773fca5.svg";
const IcWhatsapp = "/build/assets/ic-whatsapp-c9968b93.svg";
const IcLinkedIn = "/build/assets/ic-linkedin-8a4a5854.svg";
const IcYoutube = "/build/assets/ic-youtube-1bf69cb0.svg";
const IcTwitter = "/build/assets/ic-twitter-6112153e.svg";
const SocialIcon = (props) => {
  const [iconProps, setIconProps] = useState({});
  const { url } = props;
  const socials = [
    {
      socialName: "instagram",
      icon: IcInstagtam
    },
    {
      socialName: "facebook",
      icon: IcFacebook
    },
    {
      socialName: "twitter",
      icon: IcTwitter
    },
    {
      socialName: "wa.me",
      icon: IcWhatsapp
    },
    {
      socialName: "youtube",
      icon: IcYoutube
    },
    {
      socialName: "linkedin",
      icon: IcLinkedIn
    }
  ];
  const urlChecked = () => {
    socials.forEach((social) => {
      if (url.includes(social.socialName)) {
        setIconProps(social);
      }
    });
  };
  useEffect(() => {
    urlChecked();
  }, [url]);
  return /* @__PURE__ */ React.createElement("img", { src: iconProps == null ? void 0 : iconProps.icon, alt: `icon of ${iconProps.socialName}`, className: "w-max" });
};
const Footer = (props) => {
  const { attributes } = props;
  return /* @__PURE__ */ React.createElement("footer", { className: "bg-iapm-baltic-sea text-iapm-gray" }, /* @__PURE__ */ React.createElement("div", { className: " grid grid-cols-4 max-lg:grid-cols-1 max-w-screen-xl mx-auto py-16 font-poppins px-6 md:px-6 gap-8 box-border" }, /* @__PURE__ */ React.createElement("div", { className: "w-max" }, /* @__PURE__ */ React.createElement("img", { src: Logo, alt: "logo" })), /* @__PURE__ */ React.createElement("div", { className: "col-span-3" }, /* @__PURE__ */ React.createElement("ul", { className: "grid md:grid-flow-col md:auto-cols-auto gap-6 max-md:grid-cols-2 max-sm:grid-cols-1 lg:justify-items-end" }, /* @__PURE__ */ React.createElement("li", { className: "space-y-4" }, /* @__PURE__ */ React.createElement(H6, { isDark: true }, "Menu"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(
    Link,
    {
      href: "/",
      className: "block text-iapm-gray text-base"
    },
    "Home"
  ), /* @__PURE__ */ React.createElement(
    Link,
    {
      href: "/services",
      className: "block text-iapm-gray text-base"
    },
    "Service"
  ), /* @__PURE__ */ React.createElement(
    Link,
    {
      href: "/contacts",
      className: "block text-iapm-gray text-base"
    },
    "Contact"
  ), /* @__PURE__ */ React.createElement(
    Link,
    {
      href: "/about-us",
      className: "block text-iapm-gray text-base"
    },
    "About Us"
  ), /* @__PURE__ */ React.createElement(
    Link,
    {
      href: "/blogs",
      className: "block text-iapm-gray text-base"
    },
    "Blog"
  ))), /* @__PURE__ */ React.createElement("li", { className: "space-y-4" }, /* @__PURE__ */ React.createElement(H6, { isDark: true }, "Address"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, attributes == null ? void 0 : attributes.addresses.map((address, i) => {
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "flex gap-2 max-w-[30ch]",
        key: i
      },
      /* @__PURE__ */ React.createElement("div", { className: "w-6 h-6" }, /* @__PURE__ */ React.createElement(MapPinIcon, { className: "w-6 h-6 block text-iapm-gray" })),
      /* @__PURE__ */ React.createElement("span", { className: "block text-iapm-gray text-base" }, address.address)
    );
  }))), /* @__PURE__ */ React.createElement("li", { className: "space-y-4" }, /* @__PURE__ */ React.createElement(H6, { isDark: true }, "Contact"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 " }, attributes == null ? void 0 : attributes.contacts.map((contact, i) => {
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "flex gap-2 items-center",
        key: i
      },
      /* @__PURE__ */ React.createElement("div", { className: "w-6 h-6" }, (contact == null ? void 0 : contact.contact_type) === "Mail" ? /* @__PURE__ */ React.createElement(EnvelopeIcon, { className: "w-6 h-6 block text-iapm-gray" }) : /* @__PURE__ */ React.createElement(PhoneIcon, { className: "w-6 h-6 block text-iapm-gray" })),
      /* @__PURE__ */ React.createElement("span", { className: "block text-iapm-gray text-base" }, contact.contact)
    );
  })))))), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "flex justify-between items-center py-6 border-t border-t-iapm-dark-gray \n            max-w-screen-xl mx-auto px-6 md:px-6 max-md:flex-col max-md:justify-center gap-4"
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2 justify-center items-center" }, attributes == null ? void 0 : attributes.socials.map((socials, i) => {
      return /* @__PURE__ */ React.createElement("a", { href: socials.link, target: "_blank", key: i }, /* @__PURE__ */ React.createElement(SocialIcon, { url: socials.link }));
    })),
    /* @__PURE__ */ React.createElement("span", { className: "text-iapm-gray block" }, "Copyright © PT IAPM Elinksolution Indonesia 2023")
  ));
};
const ClientLayout = (props) => {
  const { children, attributes } = props;
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("main", { className: "bg-grid bg-white min-h-screen bg-no-repeat bg-right-top font-poppins" }, children), /* @__PURE__ */ React.createElement(Footer, { attributes }));
};
const CompanyDesc = (props) => {
  const { aboutTitle, visionTitle, missionTitle, image, datas } = props;
  return /* @__PURE__ */ React.createElement("section", { className: "w-full bg-iapm-light-gray shadow-[-1px_-149px_65px_-159px_rgba(0,0,0,0.03)_inset] border-b border-b-iapm-light-gray" }, /* @__PURE__ */ React.createElement("div", { className: "bg-grid py-20 bg-no-repeat bg-left-top" }, /* @__PURE__ */ React.createElement("div", { className: "grid max-md:grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto px-6 md:px-8 gap-8 max-md:gap-6 items-start" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-8 min-h-screen" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white space-y-6 p-6 rounded-3xl shadow-md" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement("span", { className: "p-2 bg-iapm-yellow block w-max rounded-full h-max" }, /* @__PURE__ */ React.createElement(BuildingOffice2Icon, { className: "w-6 h-6" })), /* @__PURE__ */ React.createElement(H3, null, aboutTitle)), /* @__PURE__ */ React.createElement(Paragraph, null, "IAPM e-Link Solution Indonesia is the company's business transformation professionals in the field of Information Technology become a solution company project management consultants, certification services, business analysts, and of course still is a reliable consulting company in the field of information technology that became the core business of the corporation a decade ago. Business transformation carried out By applying an international standard framework to each service, Thus the experience of the solution provided is ensured under Industry standardization is global.")), /* @__PURE__ */ React.createElement("div", { className: "bg-white space-y-6 p-6 rounded-3xl shadow-md" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement("span", { className: "p-2 bg-iapm-yellow block w-max rounded-full h-max" }, /* @__PURE__ */ React.createElement(EyeIcon, { className: "w-6 h-6" })), /* @__PURE__ */ React.createElement(H3, null, visionTitle)), /* @__PURE__ */ React.createElement(Paragraph, null, 'The vision of IAPM e-Link Solution Indonesia is "Making IAPM e-Link Solution Indonesia a reliable partner with global solutions in the field of Project Management, Business Analysis, and Information Technology Management that are quality and reliable"')), /* @__PURE__ */ React.createElement("div", { className: "bg-white space-y-6 p-6 rounded-3xl shadow-md" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement("span", { className: "p-2 bg-iapm-yellow block w-max rounded-full h-max" }, /* @__PURE__ */ React.createElement(RocketLaunchIcon, { className: "w-6 h-6" })), /* @__PURE__ */ React.createElement(H3, null, missionTitle)), /* @__PURE__ */ React.createElement(Paragraph, null, `IAPM e-Link Solution Indonesia's mission is "Establish harmonious cooperation with investors, clients and partners, improving skills, interpretation, humanist personnel, honest, transparent, educate clients, provide analysis of handling Project, Business and Information Technology problems in a manner Fast and precise, prioritizing the quality of service solutions. Framework implementation internationally certified: International Association of Project Managers (IAPM) Europe, International Institute of Business Analyst (IIBA) and ISO/IEC standardization 27001”.`))), /* @__PURE__ */ React.createElement("div", { className: "max-md:hidden sticky top-20" }, /* @__PURE__ */ React.createElement("div", { className: "after:content-logo after:bg-white after:px-4 after:py-2 after:rounded-full after:shadow-md after:-bottom-8 after:absolute after:left-6" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: image ? image : defaultImage,
      alt: "Image of About IAPM Elinksolution",
      className: "aspect-square object-cover w-full mx-auto rounded-t-[64px] rounded-br-[64px]"
    }
  ))))));
};
const __vite_glob_1_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CompanyDesc
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
const TabBar = (props) => {
  const { children, datas, onClickMenu } = props;
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
  })), /* @__PURE__ */ React.createElement("div", { className: "w-full space-y-8 col-span-3" }, children));
};
const HistoryDevelopment$1 = (props) => {
  const { title, description } = props;
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
  return /* @__PURE__ */ React.createElement("section", { className: "w-full px-6 md:px-8 my-36 bg-grid bg-no-repeat" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-screen-xl mx-auto bg-gradient-linear-white space-y-16 " }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(H3, null, title), /* @__PURE__ */ React.createElement(Paragraph, null, description))), /* @__PURE__ */ React.createElement("div", { className: "relative items-center max-lg:grid-cols-1" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    TabBar,
    {
      datas: dummyData,
      onClickMenu
    },
    /* @__PURE__ */ React.createElement("div", { className: "grid gap-6 grid-cols-2 items-center max-md:grid-cols-1" }, /* @__PURE__ */ React.createElement("div", { className: "border border-iapm-red rounded-[32px]  mt-8 ml-8" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: defaultImage,
        alt: "",
        className: "aspect-[4/3] object-cover w-full mx-auto relative -left-8 -top-8 rounded-t-[32px] rounded-br-[32px] rounded-bl-lg"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement(H3, null, "What have we completed in", " ", displayedData.year, "?"), /* @__PURE__ */ React.createElement(Paragraph, null, displayedData.description)))
  )))));
};
const baseUrlAsset = "http://iapm.domaintesting.site/asset";
const GetterAsset = (id, assets) => {
  const asset = findImage(id, assets);
  if (!asset) {
    return "";
  }
  return `${baseUrlAsset}/${asset == null ? void 0 : asset.file}`;
};
const findImage = (id, assets) => {
  const asset = assets.find((asset2) => {
    return asset2.id === id;
  });
  return asset;
};
const About = (props) => {
  var _a, _b, _c, _d, _e, _f;
  const { datas, assets, attributes } = props;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "About Us")), /* @__PURE__ */ React.createElement(ClientLayout, { attributes }, /* @__PURE__ */ React.createElement(
    CompanyDesc,
    {
      aboutTitle: (_a = datas["about"]) == null ? void 0 : _a.title,
      image: GetterAsset((_b = datas["about"]) == null ? void 0 : _b.id_asset, assets),
      missionTitle: (_c = datas["mission"]) == null ? void 0 : _c.title,
      visionTitle: (_d = datas["vision"]) == null ? void 0 : _d.title
    }
  ), /* @__PURE__ */ React.createElement(
    HistoryDevelopment$1,
    {
      title: (_e = datas["history-of-development"]) == null ? void 0 : _e.title,
      description: (_f = datas["history-of-development"]) == null ? void 0 : _f.description
    }
  ), /* @__PURE__ */ React.createElement(CTA, null)));
};
const __vite_glob_1_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
const SidebarEditor = (props) => {
  const { children, isOpenEditor } = props;
  const editorContainerStyle = {
    open: "w-80 fixed top-16 min-h-screen bg-white z-10 shadow-xl right-0 translate-x-0 trasition duration-100 box-border",
    close: "w-80 fixed top-16 min-h-screen bg-white z-10 shadow-xl right-0 translate-x-80 trasition duration-100 box-border"
  };
  return /* @__PURE__ */ React.createElement(
    "aside",
    {
      className: isOpenEditor === true ? editorContainerStyle.open : editorContainerStyle.close
    },
    /* @__PURE__ */ React.createElement("div", { className: "pt-3" }, /* @__PURE__ */ React.createElement("div", { className: "h-screen overflow-y-scroll custom-scrollbar px-4 pb-40" }, children))
  );
};
const FloatingButton = (props) => {
  const { children, action } = props;
  const hanldeClick = () => {
    action();
  };
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "p-3 bg-iapm-yellow rounded-full fixed bottom-6 right-12 z-50 shadow-xl",
      onClick: hanldeClick
    },
    children
  );
};
const AssetMapping = (assets) => {
  return new Promise((resolve) => {
    let imageMappingResult = [];
    let videoMappingResult = [];
    assets.map((asset) => {
      if (asset.asset_type === "Image") {
        imageMappingResult = [
          ...imageMappingResult,
          { value: asset.id, label: asset.asset_name }
        ];
      } else if (asset.asset_type === "Video") {
        videoMappingResult = [
          ...videoMappingResult,
          { value: asset.id, label: asset.asset_name }
        ];
      }
    });
    resolve({
      image: imageMappingResult,
      video: videoMappingResult
    });
  });
};
const AboutEditor = (props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { datas, assets, flash, errors } = props;
  const [isOpenEditor, setOpenEditor] = useState(false);
  const [options, setOptions] = useState({});
  const handleOpenEditor = () => {
    setOpenEditor((isOpen) => !isOpen);
  };
  const handleSubmit = () => {
    router$1.put("/pages", formik.values);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: datas,
    onSubmit: handleSubmit
  });
  const handleForm = (props2) => {
    const { name, value, type } = props2;
    formik.setFieldValue(name, type === "file" ? target.files[0] : value);
  };
  useEffect(() => {
    const mapAsset = async () => {
      const result = await AssetMapping(assets);
      setOptions(result);
    };
    mapAsset();
  }, [assets]);
  useEffect(() => {
    if (flash == null ? void 0 : flash.success) {
      Swal.fire({
        ...toastSettings,
        icon: "success",
        title: flash.success
      });
    } else if (Object.keys(errors).length > 0) {
      Swal.fire({
        ...toastSettings,
        icon: "error",
        title: getErrorMessage$1(errors)
      });
    }
  }, [errors, flash]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Page Editor")), /* @__PURE__ */ React.createElement(AdminLayout, null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center my-4 gap-4 p-4 border bg-white" }, /* @__PURE__ */ React.createElement(EyeIcon, { className: "w-6 h-6 " }), /* @__PURE__ */ React.createElement(H4, null, "Editing About Page")), /* @__PURE__ */ React.createElement("div", { className: "border" }, /* @__PURE__ */ React.createElement(About, { datas: formik.values, assets })), /* @__PURE__ */ React.createElement(FloatingButton, { action: handleOpenEditor }, isOpenEditor ? /* @__PURE__ */ React.createElement(XMarkIcon, { className: "w-6 h-6 text-iapm-black" }) : /* @__PURE__ */ React.createElement(PencilIcon, { className: "w-6 h-6 text-iapm-black" })), /* @__PURE__ */ React.createElement(SidebarEditor, { isOpenEditor }, /* @__PURE__ */ React.createElement("form", { onSubmit: formik.handleSubmit }, /* @__PURE__ */ React.createElement("div", { className: "my-6" }, /* @__PURE__ */ React.createElement("div", { className: "py-4 border-b border-b-gray-200 " }, /* @__PURE__ */ React.createElement(H6, null, "Meta Data")), /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Meta Title",
      inputName: "meta.meta_title",
      inputId: "meta.meta_title",
      inputType: "text",
      onChange: handleForm,
      defaultValue: ((_b = (_a = formik.values) == null ? void 0 : _a.meta) == null ? void 0 : _b.meta_title) || ""
    }
  ), /* @__PURE__ */ React.createElement(
    ITextarea,
    {
      textareaLabel: "Meta Description",
      textareaName: "meta.meta_description",
      textareaId: "meta.meta_description",
      onChange: handleForm,
      defaultValue: ((_d = (_c = formik.values) == null ? void 0 : _c.meta) == null ? void 0 : _d.meta_description) || ""
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "my-6" }, /* @__PURE__ */ React.createElement("div", { className: "py-4 border-b border-b-gray-200" }, /* @__PURE__ */ React.createElement(H6, null, "Section 1")), /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Title",
      inputName: "about.title",
      inputId: "about-title",
      inputType: "text",
      onChange: handleForm,
      defaultValue: ((_e = formik.values["about"]) == null ? void 0 : _e.title) || ""
    }
  ), /* @__PURE__ */ React.createElement(
    ISelect,
    {
      options: options.image || [],
      selectLabel: "Image",
      selectName: "about.id_asset",
      selectId: "about-id_asset",
      onChange: handleForm,
      defaultValue: ((_f = formik.values["about"]) == null ? void 0 : _f.id_asset) || ""
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "my-6" }, /* @__PURE__ */ React.createElement("div", { className: "py-4 border-b border-b-gray-200" }, /* @__PURE__ */ React.createElement(H6, null, "Section 2")), /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Title",
      inputName: "history-of-development.title",
      inputId: "history-of-development-title",
      inputType: "text",
      onChange: handleForm,
      defaultValue: ((_g = formik.values["history-of-development"]) == null ? void 0 : _g.title) || ""
    }
  ), /* @__PURE__ */ React.createElement(
    ITextarea,
    {
      textareaLabel: "Description",
      textareaName: "history-of-development.description",
      textareaId: "history-of-development-description",
      onChange: handleForm,
      defaultValue: ((_h = formik.values["history-of-development"]) == null ? void 0 : _h.description) || ""
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "flex justify-end my-6" }, /* @__PURE__ */ React.createElement(IButton, { type: "submit", variant: "primary" }, "Save"))))));
};
const __vite_glob_1_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AboutEditor
}, Symbol.toStringTag, { value: "Module" }));
const DefaultImage = "/build/assets/home-hero-img-32163812.svg";
const Hero = (props) => {
  const { title, description, image, buttonLabel, buttonUrl } = props;
  return /* @__PURE__ */ React.createElement("section", { className: "grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto items-center px-6 md:px-8 gap-16 pt-20 max-md:pt-16" }, /* @__PURE__ */ React.createElement("div", { className: "w-full space-y-8" }, /* @__PURE__ */ React.createElement(H1, null, title), /* @__PURE__ */ React.createElement(Paragraph, null, description), /* @__PURE__ */ React.createElement(IButton, { isLink: true, url: buttonUrl, variant: "primary" }, buttonLabel)), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center gap-6 box-border" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: image ? image : DefaultImage,
      alt: "image of hero section"
    }
  )));
};
const __vite_glob_1_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hero
}, Symbol.toStringTag, { value: "Module" }));
const Client1 = "/build/assets/client-1-79641c38.svg";
const ClientGalery = (props) => {
  const { clients, title } = props;
  return /* @__PURE__ */ React.createElement("section", { className: "w-full max-w-screen-xl mx-auto px-6 md:px-8 my-28" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Subtitle, null, title), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-evenly mt-4 flex-wrap gap-6 md:gap-12" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[260px] box-border" }, /* @__PURE__ */ React.createElement(
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
const __vite_glob_1_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ClientGalery
}, Symbol.toStringTag, { value: "Module" }));
const VideoSource = "/build/assets/video-822e4afa.mp4";
const VideoSection = (props) => {
  const { title, description, video } = props;
  return /* @__PURE__ */ React.createElement(
    "section",
    {
      className: "w-full my-36 bg-iapm-light-gray relative py-16 after:content-[''] after:bock after:w-48 after:h-56 after:bg-dot-ornament \r\n        after:bg-no-repeat after:absolute after:right-0 after:-bottom-24 after:md:-bottom-32 after:max-md:w-24 after:max-md:h-36 after:z-0"
    },
    /* @__PURE__ */ React.createElement("div", { className: " max-w-screen-xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("video", { className: "rounded-xl", controls: true }, /* @__PURE__ */ React.createElement("source", { src: VideoSource, type: "video/mp4" }), "Your browser does not support the video tag.")), /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement(H2, null, title), /* @__PURE__ */ React.createElement(Paragraph, null, description)))
  );
};
const __vite_glob_1_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VideoSection
}, Symbol.toStringTag, { value: "Module" }));
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
const ServiceOverview = (props) => {
  const { title, description, buttonLabel, buttonUrl } = props;
  return /* @__PURE__ */ React.createElement("section", { className: "w-full my-36" }, /* @__PURE__ */ React.createElement("div", { className: " max-w-screen-xl mx-auto px-6 md:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center gap-6 max-sm:flex-col max-sm:items-start" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(H2, null, title), /* @__PURE__ */ React.createElement(Paragraph, null, description)), /* @__PURE__ */ React.createElement(
    IButton,
    {
      isLink: true,
      url: buttonUrl,
      variant: "normal-link"
    },
    buttonLabel,
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
const __vite_glob_1_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ServiceOverview
}, Symbol.toStringTag, { value: "Module" }));
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
const Testimonial$1 = (props) => {
  const { testimonials, title } = props;
  return /* @__PURE__ */ React.createElement("section", { className: "w-full my-36 bg-grid bg-no-repeat" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-screen-xl mx-auto px-6 md:px-8 text-center space-y-12 bg-gradient-linear-white" }, /* @__PURE__ */ React.createElement(H2, null, title), /* @__PURE__ */ React.createElement(Carousel, null, [...new Array(3)].map((_, i) => {
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
const __vite_glob_1_36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Testimonial$1
}, Symbol.toStringTag, { value: "Module" }));
const HomePage = (props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
  const { datas, assets, attributes } = props;
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    setCurrentUrl(window.location.href);
    ReactGA.send({
      hitType: "pageView",
      page: currentUrl
    });
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, (_a = datas == null ? void 0 : datas.meta) == null ? void 0 : _a.meta_title), /* @__PURE__ */ React.createElement("meta", { name: "robots", content: "index, follow" }), /* @__PURE__ */ React.createElement(
    "meta",
    {
      name: "description",
      content: (_b = datas == null ? void 0 : datas.meta) == null ? void 0 : _b.meta_description
    }
  ), /* @__PURE__ */ React.createElement("meta", { property: "og:locale", content: "en_US" }), /* @__PURE__ */ React.createElement("meta", { property: "og:type", content: "article" }), /* @__PURE__ */ React.createElement("meta", { property: "og:title", content: (_c = datas == null ? void 0 : datas.meta) == null ? void 0 : _c.meta_title }), /* @__PURE__ */ React.createElement(
    "meta",
    {
      property: "og:description",
      content: (_d = datas == null ? void 0 : datas.meta) == null ? void 0 : _d.meta_description
    }
  ), /* @__PURE__ */ React.createElement("meta", { property: "og:url", content: currentUrl }), /* @__PURE__ */ React.createElement("meta", { property: "og:site_name", content: "PT IAPM Elinksolution" }), /* @__PURE__ */ React.createElement("meta", { property: "og:image", content: defaultImage }), /* @__PURE__ */ React.createElement("meta", { property: "og:image:width", content: "1280" }), /* @__PURE__ */ React.createElement("meta", { property: "og:image:height", content: "853" }), /* @__PURE__ */ React.createElement("meta", { property: "og:image:type", content: "image/jpeg" }), /* @__PURE__ */ React.createElement("meta", { name: "twitter:card", content: "summary_large_image" }), /* @__PURE__ */ React.createElement("meta", { name: "twitter:site", content: "@iapmelinksolution" })), /* @__PURE__ */ React.createElement(ClientLayout, { attributes }, /* @__PURE__ */ React.createElement(
    Hero,
    {
      title: (_e = datas["home-hero"]) == null ? void 0 : _e.title,
      description: (_f = datas["home-hero"]) == null ? void 0 : _f.description,
      buttonLabel: (_g = datas["home-hero"]) == null ? void 0 : _g.button_label,
      buttonUrl: (_h = datas["home-hero"]) == null ? void 0 : _h.button_url,
      image: GetterAsset((_i = datas["home-hero"]) == null ? void 0 : _i.id_asset, assets)
    }
  ), /* @__PURE__ */ React.createElement(ClientGalery, { title: (_j = datas["successful-project"]) == null ? void 0 : _j.title }), /* @__PURE__ */ React.createElement(
    VideoSection,
    {
      title: (_k = datas["capability"]) == null ? void 0 : _k.title,
      description: (_l = datas["capability"]) == null ? void 0 : _l.description
    }
  ), /* @__PURE__ */ React.createElement(
    ServiceOverview,
    {
      title: (_m = datas["service-overview"]) == null ? void 0 : _m.title,
      description: (_n = datas["service-overview"]) == null ? void 0 : _n.description,
      buttonLabel: (_o = datas["service-overview"]) == null ? void 0 : _o.button_label,
      buttonUrl: (_p = datas["service-overview"]) == null ? void 0 : _p.button_url
    }
  ), /* @__PURE__ */ React.createElement(Testimonial$1, { title: (_q = datas["testimonial"]) == null ? void 0 : _q.title }), /* @__PURE__ */ React.createElement(CTA, null)));
};
const __vite_glob_1_37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HomePage
}, Symbol.toStringTag, { value: "Module" }));
const HomeEditor = (props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
  const { datas, assets, flash, errors } = props;
  const [isOpenEditor, setOpenEditor] = useState(false);
  const [options, setOptions] = useState({});
  const handleOpenEditor = () => {
    setOpenEditor((isOpen) => !isOpen);
  };
  const handleSubmit = () => {
    router$1.put("/pages", formik.values);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: datas,
    onSubmit: handleSubmit
  });
  const handleForm = (props2) => {
    const { name, value, type } = props2;
    formik.setFieldValue(name, type === "file" ? target.files[0] : value);
  };
  useEffect(() => {
    const mapAsset = async () => {
      const result = await AssetMapping(assets);
      setOptions(result);
    };
    mapAsset();
  }, [assets]);
  useEffect(() => {
    if (flash == null ? void 0 : flash.success) {
      Swal.fire({
        ...toastSettings,
        icon: "success",
        title: flash.success
      });
    } else if (Object.keys(errors).length > 0) {
      Swal.fire({
        ...toastSettings,
        icon: "error",
        title: getErrorMessage$1(errors)
      });
    }
  }, [errors, flash]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Page Editor")), /* @__PURE__ */ React.createElement(AdminLayout, null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center my-4 gap-4 p-4 border bg-white" }, /* @__PURE__ */ React.createElement(EyeIcon, { className: "w-6 h-6 " }), /* @__PURE__ */ React.createElement(H4, null, "Editing Home Page")), /* @__PURE__ */ React.createElement("div", { className: "border" }, /* @__PURE__ */ React.createElement(HomePage, { datas: formik.values, assets })), /* @__PURE__ */ React.createElement(FloatingButton, { action: handleOpenEditor }, isOpenEditor ? /* @__PURE__ */ React.createElement(XMarkIcon, { className: "w-6 h-6 text-iapm-black" }) : /* @__PURE__ */ React.createElement(PencilIcon, { className: "w-6 h-6 text-iapm-black" })), /* @__PURE__ */ React.createElement(SidebarEditor, { isOpenEditor }, /* @__PURE__ */ React.createElement("form", { onSubmit: formik.handleSubmit }, /* @__PURE__ */ React.createElement("div", { className: "my-6" }, /* @__PURE__ */ React.createElement("div", { className: "my-6" }, /* @__PURE__ */ React.createElement("div", { className: "py-4 border-b border-b-gray-200 " }, /* @__PURE__ */ React.createElement(H6, null, "Meta Data")), /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Meta Title",
      inputName: "meta.meta_title",
      inputId: "meta.meta_title",
      inputType: "text",
      onChange: handleForm,
      defaultValue: ((_b = (_a = formik.values) == null ? void 0 : _a.meta) == null ? void 0 : _b.meta_title) || ""
    }
  ), /* @__PURE__ */ React.createElement(
    ITextarea,
    {
      textareaLabel: "Meta Description",
      textareaName: "meta.meta_description",
      textareaId: "meta.meta_description",
      onChange: handleForm,
      defaultValue: ((_d = (_c = formik.values) == null ? void 0 : _c.meta) == null ? void 0 : _d.meta_description) || ""
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "py-4 border-b border-b-gray-200" }, /* @__PURE__ */ React.createElement(H6, null, "Section 1")), /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Title",
      inputName: "home-hero.title",
      inputId: "hemo-hero-title",
      inputType: "text",
      onChange: handleForm,
      defaultValue: ((_e = formik.values["home-hero"]) == null ? void 0 : _e.title) || ""
    }
  ), /* @__PURE__ */ React.createElement(
    ITextarea,
    {
      textareaLabel: "Description",
      textareaName: "home-hero.description",
      textareaId: "home-hero-description",
      onChange: handleForm,
      defaultValue: ((_f = formik.values["home-hero"]) == null ? void 0 : _f.description) || ""
    }
  ), /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Button Label",
      inputName: "home-hero.button_label",
      inputId: "hemo-hero-button_label",
      inputType: "text",
      onChange: handleForm,
      defaultValue: ((_g = formik.values["home-hero"]) == null ? void 0 : _g.button_label) || ""
    }
  ), /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Button URL",
      inputName: "home-hero.button_url",
      inputId: "hemo-hero-button_url",
      inputType: "text",
      onChange: handleForm,
      defaultValue: ((_h = formik.values["home-hero"]) == null ? void 0 : _h.button_url) || ""
    }
  ), /* @__PURE__ */ React.createElement(
    ISelect,
    {
      options: options.image || [],
      selectLabel: "Image",
      selectName: "home-hero.id_asset",
      selectId: "home-hero-id_asset",
      onChange: handleForm,
      defaultValue: ((_i = formik.values["home-hero"]) == null ? void 0 : _i.id_asset) || ""
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "my-6" }, /* @__PURE__ */ React.createElement("div", { className: "py-4 border-b border-b-gray-200 " }, /* @__PURE__ */ React.createElement(H6, null, "Section 2")), /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Title",
      inputName: "successful-project.title",
      inputId: "successful-project-title",
      inputType: "text",
      onChange: handleForm,
      defaultValue: ((_j = formik.values["successful-project"]) == null ? void 0 : _j.title) || ""
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "my-6" }, /* @__PURE__ */ React.createElement("div", { className: "py-4 border-b border-b-gray-200 " }, /* @__PURE__ */ React.createElement(H6, null, "Section 3")), /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Title",
      inputName: "capability.title",
      inputId: "capability-title",
      inputType: "text",
      onChange: handleForm,
      defaultValue: ((_k = formik.values["capability"]) == null ? void 0 : _k.title) || ""
    }
  ), /* @__PURE__ */ React.createElement(
    ITextarea,
    {
      textareaLabel: "Description",
      textareaName: "capability.description",
      textareaId: "capability-description",
      onChange: handleForm,
      defaultValue: ((_l = formik.values["capability"]) == null ? void 0 : _l.description) || ""
    }
  ), /* @__PURE__ */ React.createElement(
    ISelect,
    {
      options: options.video || [],
      selectLabel: "Video",
      selectName: "capability.id_asset",
      selectId: "capability-id_asset",
      onChange: handleForm,
      defaultValue: ((_m = formik.values["capability"]) == null ? void 0 : _m.id_asset) || ""
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "my-6" }, /* @__PURE__ */ React.createElement("div", { className: "py-4 border-b border-b-gray-200 " }, /* @__PURE__ */ React.createElement(H6, null, "Section 4")), /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Title",
      inputName: "service-overview.title",
      inputId: "service-overview-title",
      inputType: "text",
      onChange: handleForm,
      defaultValue: ((_n = formik.values["service-overview"]) == null ? void 0 : _n.title) || ""
    }
  ), /* @__PURE__ */ React.createElement(
    ITextarea,
    {
      textareaLabel: "Description",
      textareaName: "service-overview.description",
      textareaId: "service-overview-description",
      onChange: handleForm,
      defaultValue: ((_o = formik.values["service-overview"]) == null ? void 0 : _o.description) || ""
    }
  ), /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Button Label",
      inputName: "service-overview.button_label",
      inputId: "service-overview-button_label",
      inputType: "text",
      onChange: handleForm,
      defaultValue: ((_p = formik.values["service-overview"]) == null ? void 0 : _p.button_label) || ""
    }
  ), /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Button URL",
      inputName: "service-overview.button_url",
      inputId: "service-overview-button_url",
      inputType: "text",
      onChange: handleForm,
      defaultValue: ((_q = formik.values["service-overview"]) == null ? void 0 : _q.button_url) || ""
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "my-6" }, /* @__PURE__ */ React.createElement("div", { className: "py-4 border-b border-b-gray-200 " }, /* @__PURE__ */ React.createElement(H6, null, "Section 5")), /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Title",
      inputName: "testimonial.title",
      inputId: "testimonial-title",
      inputType: "text",
      onChange: handleForm,
      defaultValue: ((_r = formik.values["testimonial"]) == null ? void 0 : _r.title) || ""
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "flex justify-end my-6" }, /* @__PURE__ */ React.createElement(IButton, { type: "submit", variant: "primary" }, "Save"))))));
};
const __vite_glob_1_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HomeEditor
}, Symbol.toStringTag, { value: "Module" }));
const ServiceHeader = (props) => {
  const { title, description } = props;
  return /* @__PURE__ */ React.createElement("section", { className: "bg-no-repeat bg-left bg-grid " }, /* @__PURE__ */ React.createElement("div", { className: " h-full py-16 bg-opacity-60" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-screen-xl mx-auto px-6 md:px-8 " }, /* @__PURE__ */ React.createElement("span", { className: "bg-iapm-yellow block w-max h-max p-4 rounded-full mb-6" }, /* @__PURE__ */ React.createElement(CubeIcon, { className: "w-12 h-12" })), /* @__PURE__ */ React.createElement(H2, null, title), /* @__PURE__ */ React.createElement("div", { className: "md:max-w-[70vw]" }, /* @__PURE__ */ React.createElement(Paragraph, null, description)))));
};
const __vite_glob_1_39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ServiceHeader
}, Symbol.toStringTag, { value: "Module" }));
const DummyImage = "/build/assets/bg-service-d43db916.jpg";
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
const __vite_glob_1_40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ServiceListing
}, Symbol.toStringTag, { value: "Module" }));
const Service$1 = (props) => {
  var _a, _b;
  const { datas, attributes } = props;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Services")), /* @__PURE__ */ React.createElement(ClientLayout, { attributes }, /* @__PURE__ */ React.createElement(
    ServiceHeader,
    {
      title: (_a = datas["service"]) == null ? void 0 : _a.title,
      description: (_b = datas["service"]) == null ? void 0 : _b.description
    }
  ), /* @__PURE__ */ React.createElement(ServiceListing, null), /* @__PURE__ */ React.createElement(CTA, null)));
};
const __vite_glob_1_43 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Service$1
}, Symbol.toStringTag, { value: "Module" }));
const ServiceEditor = (props) => {
  var _a, _b, _c, _d, _e, _f;
  const { datas, flash, errors } = props;
  const [isOpenEditor, setOpenEditor] = useState(false);
  const handleOpenEditor = () => {
    setOpenEditor((isOpen) => !isOpen);
  };
  const handleSubmit = () => {
    router$1.put("/pages", formik.values);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: datas,
    onSubmit: handleSubmit
  });
  const handleForm = (props2) => {
    const { name, value, type } = props2;
    formik.setFieldValue(name, type === "file" ? target.files[0] : value);
  };
  useEffect(() => {
    if (flash == null ? void 0 : flash.success) {
      Swal.fire({
        ...toastSettings,
        icon: "success",
        title: flash.success
      });
    } else if (Object.keys(errors).length > 0) {
      Swal.fire({
        ...toastSettings,
        icon: "error",
        title: getErrorMessage$1(errors)
      });
    }
  }, [errors, flash]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Page Editor")), /* @__PURE__ */ React.createElement(AdminLayout, null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center my-4 gap-4 p-4 border bg-white rounded" }, /* @__PURE__ */ React.createElement(EyeIcon, { className: "w-6 h-6 " }), /* @__PURE__ */ React.createElement(H4, null, "Editing Service Page")), /* @__PURE__ */ React.createElement("div", { className: "border" }, /* @__PURE__ */ React.createElement(Service$1, { datas: formik.values })), /* @__PURE__ */ React.createElement(FloatingButton, { action: handleOpenEditor }, isOpenEditor ? /* @__PURE__ */ React.createElement(XMarkIcon, { className: "w-6 h-6 text-iapm-black" }) : /* @__PURE__ */ React.createElement(PencilIcon, { className: "w-6 h-6 text-iapm-black" })), /* @__PURE__ */ React.createElement(SidebarEditor, { isOpenEditor }, /* @__PURE__ */ React.createElement("form", { onSubmit: formik.handleSubmit }, /* @__PURE__ */ React.createElement("div", { className: "my-6" }, /* @__PURE__ */ React.createElement("div", { className: "py-4 border-b border-b-gray-200 " }, /* @__PURE__ */ React.createElement(H6, null, "Meta Data")), /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Meta Title",
      inputName: "meta.meta_title",
      inputId: "meta.meta_title",
      inputType: "text",
      onChange: handleForm,
      defaultValue: ((_b = (_a = formik.values) == null ? void 0 : _a.meta) == null ? void 0 : _b.meta_title) || ""
    }
  ), /* @__PURE__ */ React.createElement(
    ITextarea,
    {
      textareaLabel: "Meta Description",
      textareaName: "meta.meta_description",
      textareaId: "meta.meta_description",
      onChange: handleForm,
      defaultValue: ((_d = (_c = formik.values) == null ? void 0 : _c.meta) == null ? void 0 : _d.meta_description) || ""
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "my-6" }, /* @__PURE__ */ React.createElement("div", { className: "py-4 border-b border-b-gray-200" }, /* @__PURE__ */ React.createElement(H6, null, "Section 1")), /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Title",
      inputName: "service.title",
      inputId: "service-title",
      inputType: "text",
      onChange: handleForm,
      defaultValue: ((_e = formik.values["service"]) == null ? void 0 : _e.title) || ""
    }
  ), /* @__PURE__ */ React.createElement(
    ITextarea,
    {
      textareaLabel: "Description",
      textareaName: "service.description",
      textareaId: "service-description",
      onChange: handleForm,
      defaultValue: ((_f = formik.values["service"]) == null ? void 0 : _f.description) || ""
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "flex justify-end my-6" }, /* @__PURE__ */ React.createElement(IButton, { type: "submit", variant: "primary" }, "Save"))))));
};
const __vite_glob_1_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ServiceEditor
}, Symbol.toStringTag, { value: "Module" }));
const PageEditor = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Page Editor")), /* @__PURE__ */ React.createElement(AdminLayout, null, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h1", null, "PageEditor"))));
};
const __vite_glob_1_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PageEditor
}, Symbol.toStringTag, { value: "Module" }));
const ServiceForm = (props) => {
  const { mode, service } = props;
  const handleSubmit = () => {
    if (mode === "update") {
      router$1.post(`/service-products/${service.id}/form`, formik.values);
    } else if (mode === "create") {
      router$1.post("/service-products", formik.values);
    }
  };
  const formik = useFormik({
    initialValues: {
      service_name: (service == null ? void 0 : service.service_name) || "",
      short_description: (service == null ? void 0 : service.short_description) || "",
      image: (service == null ? void 0 : service.image) || "",
      description: (service == null ? void 0 : service.description) || ""
    },
    validationSchema: serviceValidationSchema,
    onSubmit: handleSubmit
  });
  const handleForm = (target2) => {
    const { name, value, type } = target2;
    formik.setFieldValue(name, type === "file" ? target2.files[0] : value);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Service Form")), /* @__PURE__ */ React.createElement(AdminLayout, null, /* @__PURE__ */ React.createElement("section", { className: "space-y-6 mt-8" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white shadow rounded-3xl p-6 border border-gray-100 my-6" }, mode === "update" ? /* @__PURE__ */ React.createElement(H3, null, "Update Service") : /* @__PURE__ */ React.createElement(H3, null, "Add Service"), /* @__PURE__ */ React.createElement("form", { onSubmit: formik.handleSubmit }, /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Service Name",
      inputName: "service_name",
      inputId: "service_name",
      inputType: "text",
      onChange: handleForm,
      defaultValue: formik.values.service_name || "",
      errorMessage: formik.errors.service_name
    }
  ), /* @__PURE__ */ React.createElement(
    ITextarea,
    {
      textareaLabel: "Short Description",
      textareaName: "short_description",
      textareaId: "short_description",
      onChange: handleForm,
      defaultValue: formik.values.short_description || "",
      errorMessage: formik.errors.short_description
    }
  ), /* @__PURE__ */ React.createElement(
    InputMedia,
    {
      mediaLabel: "Image",
      mediaId: "image",
      mediaName: "image",
      mediaType: "image",
      mediaButtonLabel: "Choose Image",
      onChange: handleForm,
      defaultValue: formik.values.image || "",
      errorMessage: formik.errors.image
    }
  ), /* @__PURE__ */ React.createElement(
    RichEditor,
    {
      onChange: handleForm,
      editorLabel: "Description",
      editorName: "description",
      defaultValue: formik.values.description || "",
      errorMessage: formik.errors.description
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "flex justify-end my-6" }, /* @__PURE__ */ React.createElement(
    IButton,
    {
      type: "submit",
      variant: "primary",
      action: handleSubmit
    },
    "Submit"
  )))))));
};
const __vite_glob_1_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ServiceForm
}, Symbol.toStringTag, { value: "Module" }));
const Service = (props) => {
  const { services, errors, flash } = props;
  const baseUrlAsset2 = "http://iapm.domaintesting.site/asset";
  const serviceColumns = [
    {
      header: "Service Name",
      accessorKey: "service_name"
    },
    {
      header: "Short Description",
      accessorKey: "short_description"
    },
    {
      header: " Image",
      accessorKey: "image",
      Cell: ({ cell }) => {
        return /* @__PURE__ */ React.createElement(
          "a",
          {
            href: `${baseUrlAsset2}/${cell.getValue()}`,
            target: "_blank",
            className: "text-amber-700"
          },
          "View"
        );
      }
    },
    {
      header: "Description",
      accessorKey: "description"
    }
  ];
  const handleDeleteService = (id) => {
    Swal.fire({
      ...confirmSetttings,
      text: `Delete this service`
    }).then((result) => {
      if (result.isConfirmed) {
        router.delete(`/service-products/${id}`);
      }
    });
  };
  useEffect(() => {
    if (flash.success) {
      Swal.fire({
        ...toastSettings,
        icon: "success",
        title: `${flash.success}`
      });
    } else if (Object.keys(errors).length > 0) {
      Swal.fire({
        ...toastSettings,
        icon: "error",
        title: getErrorMessage$1(errors)
      });
    }
  }, [errors, flash]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Service")), /* @__PURE__ */ React.createElement(AdminLayout, null, /* @__PURE__ */ React.createElement("section", { className: "space-y-6 bg-white shadow rounded-3xl p-6 my-6 " }, /* @__PURE__ */ React.createElement(H3, null, "Service"), /* @__PURE__ */ React.createElement("div", { className: "justify-between flex-wrap" }, /* @__PURE__ */ React.createElement(
    IButton,
    {
      variant: "primary",
      isLink: true,
      url: "/service-products/form"
    },
    /* @__PURE__ */ React.createElement(PlusIcon, { className: "w-6 h-6 text-iapm-black" }),
    "Add Service"
  )), /* @__PURE__ */ React.createElement(
    ITable,
    {
      columns: serviceColumns,
      datas: services,
      action: ({ row, closeMenu }) => [
        /* @__PURE__ */ React.createElement(
          MenuItem,
          {
            key: "detail",
            sx: { fontSize: "10pt" },
            onClick: () => {
              router.visit(
                `/service-products/${row.original.id}/form`
              );
              closeMenu();
            }
          },
          "Update"
        ),
        /* @__PURE__ */ React.createElement(
          MenuItem,
          {
            key: "edit",
            sx: { fontSize: "10pt" },
            onClick: () => {
              handleDeleteService(row.original.id);
              closeMenu();
            }
          },
          "Delete"
        )
      ]
    }
  ))));
};
const __vite_glob_1_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Service
}, Symbol.toStringTag, { value: "Module" }));
const Testimonial = (props) => {
  const { testimonials, errors, flash } = props;
  const [isModalOpen, setModalOpen] = useState(false);
  const [updateProps, setUpdateProps] = useState({
    isUpdate: false,
    idUpdate: ""
  });
  const testimonialColumn = [
    {
      header: "Name",
      accessorKey: "name"
    },
    {
      header: "Position / Employment",
      accessorKey: "position"
    },
    {
      header: "Quote",
      accessorKey: "quote"
    }
  ];
  const handleOpenModal = () => {
    !!isModalOpen === true && formik.resetForm();
    !!isModalOpen && setUpdateProps({
      isUpdates: false,
      idUpdate: ""
    });
    setModalOpen((currentCondition) => !currentCondition);
  };
  const handleSubmit = () => {
    handleOpenModal();
    updateProps.isUpdate ? router.put(
      `/testimonials/${updateProps.idUpdate}`,
      formik.values
    ) : router.post("/testimonials", formik.values);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      quote: ""
    },
    validationSchema: testimonialValidationSchema,
    onSubmit: handleSubmit
  });
  const handleUpdateAction = async (testimonial) => {
    const { id, name, position, quote } = testimonial;
    setUpdateProps({
      isUpdate: true,
      idUpdate: id
    });
    handleOpenModal();
    await formik.setFieldValue("position", position);
    await formik.setFieldValue("name", name);
    await formik.setFieldValue("quote", quote);
  };
  const handleForm = (target2) => {
    const { name, value } = target2;
    formik.setFieldValue(name, value);
  };
  const hanldeDeleteAction = (id) => {
    Swal.fire({
      ...confirmSetttings,
      text: `Delete this testimonial`
    }).then((result) => {
      if (result.isConfirmed) {
        router.delete(`/testimonials/${id}`);
      }
    });
  };
  useEffect(() => {
    if (flash == null ? void 0 : flash.success) {
      Swal.fire({
        ...toastSettings,
        icon: "success",
        title: flash.success
      });
      !!isModalOpen && handleOpenModal();
    } else if (Object.keys(errors).length > 0) {
      Swal.fire({
        ...toastSettings,
        icon: "error",
        title: getErrorMessage$1(errors)
      });
      !!isModalOpen && handleOpenModal();
    }
    setUpdateProps({
      isUpdates: false,
      idUpdate: ""
    });
  }, [errors, flash]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Testimonial")), /* @__PURE__ */ React.createElement(AdminLayout, null, !!isModalOpen && /* @__PURE__ */ React.createElement(
    Modal,
    {
      title: updateProps.isUpdate ? "Update Testimonial" : "Add Testimonial ",
      handleModal: handleOpenModal
    },
    /* @__PURE__ */ React.createElement("form", { onSubmit: formik.handleSubmit }, /* @__PURE__ */ React.createElement(
      IInput,
      {
        inputLabel: "Name (Name of the Testimonial Giver)",
        inputName: "name",
        inputId: "name",
        inputType: "text",
        onChange: handleForm,
        defaultValue: formik.values.name || "",
        errorMessage: formik.errors.name
      }
    ), /* @__PURE__ */ React.createElement(
      IInput,
      {
        inputLabel: "Positon (Postion / Employment)",
        inputName: "position",
        inputId: "position",
        inputType: "text",
        onChange: handleForm,
        defaultValue: formik.values.position || "",
        errorMessage: formik.errors.position
      }
    ), /* @__PURE__ */ React.createElement(
      ITextarea,
      {
        textareaLabel: "Quote",
        textareaName: "quote",
        textareaId: "quote",
        onChange: handleForm,
        defaultValue: formik.values.quote || "",
        errorMessage: formik.errors.quote
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "flex justify-end my-6" }, /* @__PURE__ */ React.createElement(IButton, { type: "submit", variant: "primary" }, "Submit")))
  ), /* @__PURE__ */ React.createElement("section", { className: "space-y-6 bg-white shadow rounded-3xl p-6 my-6 " }, /* @__PURE__ */ React.createElement(H3, null, "Testimonial"), /* @__PURE__ */ React.createElement(
    IButton,
    {
      variant: "primary",
      isLink: false,
      action: handleOpenModal
    },
    /* @__PURE__ */ React.createElement(PlusIcon, { className: "w-6 h-6 text-iapm-black" }),
    "Add Testimonial"
  ), /* @__PURE__ */ React.createElement(
    ITable,
    {
      columns: testimonialColumn,
      datas: testimonials,
      action: ({ row, closeMenu }) => [
        /* @__PURE__ */ React.createElement(
          MenuItem,
          {
            key: "detail",
            sx: { fontSize: "10pt" },
            onClick: () => {
              handleUpdateAction(row.original);
              closeMenu();
            }
          },
          "Update"
        ),
        /* @__PURE__ */ React.createElement(
          MenuItem,
          {
            key: "edit",
            sx: { fontSize: "10pt" },
            onClick: () => {
              hanldeDeleteAction(row.original.id);
              closeMenu();
            }
          },
          "Delete"
        )
      ]
    }
  ))));
};
const __vite_glob_1_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Testimonial
}, Symbol.toStringTag, { value: "Module" }));
const AddressForm = (props) => {
  const { value, closeModal, isUpdate } = props;
  const handleSubmit = () => {
    isUpdate ? router$1.put(`/addresses/${value.id}`, formik.values) : router$1.post("/addresses", formik.values);
    closeModal();
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      address: (value == null ? void 0 : value.address) || ""
    },
    onSubmit: handleSubmit,
    validationSchema: addressValidationSchema
  });
  const handleForm = (e) => {
    const { name, value: value2 } = e;
    formik.setFieldValue(name, value2);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("form", { onSubmit: formik.handleSubmit }, /* @__PURE__ */ React.createElement(
    ITextarea,
    {
      textareaLabel: "Address",
      textareaName: "address",
      textareaId: "address",
      onChange: handleForm,
      defaultValue: formik.values.address || "",
      errorMessage: formik.errors.address
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "flex gap-6 justify-end items-center mt-8" }, /* @__PURE__ */ React.createElement(
    IButton,
    {
      type: "button",
      variant: "link-border",
      action: closeModal
    },
    "Cancel"
  ), /* @__PURE__ */ React.createElement(IButton, { type: "submit", variant: "primary" }, "Submit"))));
};
const __vite_glob_1_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AddressForm
}, Symbol.toStringTag, { value: "Module" }));
const ContactForm = (props) => {
  const { value, closeModal, isUpdate } = props;
  const contactOptions = [
    { value: "Mail", label: "Mail" },
    { value: "Telephone", label: "Telephone" },
    { value: "WhatsApp", label: "WhatsApp" },
    { value: "Telegram", label: "Telegram" }
  ];
  const handleSubmit = () => {
    isUpdate ? router$1.put(`/contacts/${value.id}`, formik.values) : router$1.post("/contacts", formik.values);
    closeModal();
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      contact_type: (value == null ? void 0 : value.contact_type) || "",
      contact: (value == null ? void 0 : value.contact) || ""
    },
    onSubmit: handleSubmit,
    validationSchema: contactValidationSchema
  });
  const handleForm = (e) => {
    const { name, value: value2 } = e;
    formik.setFieldValue(name, value2);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("form", { onSubmit: formik.handleSubmit }, /* @__PURE__ */ React.createElement(
    ISelect,
    {
      defaultValue: formik.values.contact_type || "",
      selectLabel: "Contact Type",
      selectName: "contact_type",
      selectId: "contact_type",
      options: contactOptions,
      onChange: handleForm,
      errorMessage: formik.errors.contact_type
    }
  ), formik.values.contact_type && /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: formik.values.contact_type == "Telegram" ? "Username" : "Contact",
      inputName: "contact",
      inputId: "contact",
      inputType: "text",
      onChange: handleForm,
      defaultValue: formik.values.contact || "",
      errorMessage: formik.errors.contact
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "flex gap-6 justify-end items-center mt-8" }, /* @__PURE__ */ React.createElement(
    IButton,
    {
      type: "button",
      variant: "link-border",
      action: closeModal
    },
    "Cancel"
  ), /* @__PURE__ */ React.createElement(IButton, { type: "submit", variant: "primary" }, "Submit"))));
};
const __vite_glob_1_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ContactForm
}, Symbol.toStringTag, { value: "Module" }));
const SocialForm = (props) => {
  const { value, closeModal, isUpdate } = props;
  const socialOptions = [
    { value: "Linkedin", label: "Linkedin" },
    { value: "Youtube", label: "Youtube" },
    { value: "Twitter", label: "Twitter" },
    { value: "Facebook", label: "Facebook" },
    { value: "Instagram", label: "Instagram" }
  ];
  const handleSubmit = () => {
    isUpdate ? router$1.put(`/socials/${value.id}`, formik.values) : router$1.post("/socials", formik.values);
    closeModal();
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      social_type: (value == null ? void 0 : value.social_type) || "",
      username: (value == null ? void 0 : value.username) || "",
      link: (value == null ? void 0 : value.link) || ""
    },
    onSubmit: handleSubmit,
    validationSchema: socialValidationSchema
  });
  const handleForm = (e) => {
    const { name, value: value2 } = e;
    formik.setFieldValue(name, value2);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("form", { onSubmit: formik.handleSubmit }, /* @__PURE__ */ React.createElement(
    ISelect,
    {
      defaultValue: formik.values.social_type || "",
      selectLabel: "Social Media Platform",
      selectName: "social_type",
      selectId: "social_type",
      options: socialOptions,
      onChange: handleForm,
      errorMessage: formik.errors.social_type
    }
  ), /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Username",
      inputName: "username",
      inputId: "username",
      inputType: "text",
      onChange: handleForm,
      defaultValue: formik.values.username || "",
      errorMessage: formik.errors.username
    }
  ), /* @__PURE__ */ React.createElement(
    IInput,
    {
      inputLabel: "Link",
      inputName: "link",
      inputId: "link",
      inputType: "text",
      onChange: handleForm,
      defaultValue: formik.values.link || "",
      errorMessage: formik.errors.link
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "flex gap-6 justify-end items-center mt-8" }, /* @__PURE__ */ React.createElement(
    IButton,
    {
      type: "button",
      variant: "link-border",
      action: closeModal
    },
    "Cancel"
  ), /* @__PURE__ */ React.createElement(IButton, { type: "submit", variant: "primary" }, "Submit"))));
};
const __vite_glob_1_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SocialForm
}, Symbol.toStringTag, { value: "Module" }));
const IButtonDropdown = (props) => {
  const { action, buttonLabel, menus, variant } = props;
  const [isOpenMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu((currentCondition) => !currentCondition);
  };
  const handleClickMenu = (e) => {
    setOpenMenu(false);
    action(e.target);
  };
  const menuStyle = {
    open: "p-4 bg-white border border-gray-200 rounded-2xl absolute top-14 tex-left w-full left-0",
    close: "p-4 bg-white border border-gray-200 rounded-2xl absolute top-14 tex-left w-full left-0 hidden"
  };
  const buttonStyle = {
    normal: "relative w-max bg-iapm-yellow px-4 py-3 rounded-full font-popins text-iapm-black font-medium flex gap-4 whitespace-nowrap",
    secondary: "relative w-max bg-white border border-iapm-gray px-4 py-3 rounded-full font-popins text-iapm-black font-medium flex gap-4 whitespace-nowrap"
  };
  return /* @__PURE__ */ React.createElement("div", { className: "relative w-max" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handleOpenMenu,
      className: variant === "secondary" ? buttonStyle.secondary : buttonStyle.secondary
    },
    /* @__PURE__ */ React.createElement("span", { className: "text-iapm-black block" }, buttonLabel),
    /* @__PURE__ */ React.createElement(ChevronDownIcon, { className: "w-6 h-6 text-iapm-black" })
  ), /* @__PURE__ */ React.createElement("div", { className: isOpenMenu ? menuStyle.open : menuStyle.close }, /* @__PURE__ */ React.createElement("ul", { className: "flex flex-col justify-start items-start" }, menus.map((menu, i) => {
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "text-iapm-dark-gray py-3 whitespace-nowrap w-full text-left",
        key: i,
        onClick: handleClickMenu,
        "aria-label": menu.ariaLabel
      },
      menu.label
    );
  }), /* @__PURE__ */ React.createElement("li", null))));
};
const WebAttribute = (props) => {
  const { flash, errors, contacts, addresses, socials } = props;
  const [value, setValue] = useState({});
  const [modalProps, setModalProps] = useState({
    isOpen: false,
    field: "",
    title: "",
    isUpdate: false
  });
  const dropdownMenus = [
    {
      label: "Contact",
      ariaLabel: "contact"
    },
    {
      label: "Address",
      ariaLabel: "address"
    },
    {
      label: "Social Media",
      ariaLabel: "social-media"
    }
  ];
  const handleModal = () => {
    !!modalProps.isOpen === true && setValue({});
    setModalProps({
      ...modalProps,
      isUpdate: false,
      field: "",
      title: "",
      isOpen: !modalProps.isOpen
    });
  };
  const handleClickButtonAdd = (e) => {
    const { ariaLabel } = e;
    setModalProps({
      ...modalProps,
      title: `Add ${getTitleByField(ariaLabel)}`,
      field: ariaLabel,
      isOpen: !modalProps.isOpen
    });
  };
  const handleClickButtonUpdate = (value2, field) => {
    setValue(value2);
    setModalProps({
      ...modalProps,
      title: `Update ${getTitleByField(field)}`,
      field,
      isOpen: !modalProps.isOpen,
      isUpdate: true
    });
  };
  const getTitleByField = (field) => {
    switch (field) {
      case "contact":
        return "Contact";
      case "address":
        return "Address";
      case "social-media":
        return "Social Media";
    }
  };
  const handleDelete = (id, field) => {
    Swal.fire({
      ...confirmSetttings,
      text: `Delete this web attribute`
    }).then((result) => {
      if (result.isConfirmed) {
        switch (field) {
          case "contact":
            router$1.delete(`/contacts/${id}`);
            break;
          case "address":
            router$1.delete(`/addresses/${id}`);
            break;
          case "social-media":
            router$1.delete(`/socials/${id}`);
            break;
        }
      }
    });
  };
  useEffect(() => {
    if (flash == null ? void 0 : flash.success) {
      Swal.fire({
        ...toastSettings,
        icon: "success",
        title: flash.success
      });
      !!modalProps.isOpen && handleModal();
    } else if (Object.keys(errors).length > 0) {
      Swal.fire({
        ...toastSettings,
        icon: "error",
        title: getErrorMessage$1(errors)
      });
      !!modalProps.isOpen && handleModal();
    }
    setModalProps({
      ...modalProps,
      title: "",
      field: "",
      isUpdate: false
    });
    setValue({});
  }, [errors, flash]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Web Attribute")), /* @__PURE__ */ React.createElement(AdminLayout, null, !!modalProps.isOpen && /* @__PURE__ */ React.createElement(Modal, { title: modalProps.title, handleModal }, modalProps.field === "contact" && /* @__PURE__ */ React.createElement(
    ContactForm,
    {
      closeModal: handleModal,
      value,
      isUpdate: modalProps.isUpdate
    }
  ), modalProps.field === "address" && /* @__PURE__ */ React.createElement(
    AddressForm,
    {
      closeModal: handleModal,
      value,
      isUpdate: modalProps.isUpdate
    }
  ), modalProps.field === "social-media" && /* @__PURE__ */ React.createElement(
    SocialForm,
    {
      closeModal: handleModal,
      value,
      isUpdate: modalProps.isUpdate
    }
  )), /* @__PURE__ */ React.createElement("section", { className: "space-y-6 bg-white shadow rounded-3xl p-6 my-6 " }, /* @__PURE__ */ React.createElement(H3, null, "Web Attribute"), /* @__PURE__ */ React.createElement(
    IButtonDropdown,
    {
      menus: dropdownMenus,
      buttonLabel: "Add Attribute",
      action: handleClickButtonAdd
    }
  )), /* @__PURE__ */ React.createElement("section", { className: "grid grid-cols-2 gap-6 max-lg:grid-cols-1 mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white space-y-6  shadow rounded-3xl p-6 " }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 items-center" }, /* @__PURE__ */ React.createElement("span", { className: "p-2 rounded-full bg-iapm-yellow" }, /* @__PURE__ */ React.createElement(PhoneIcon, { className: "w-6 h-6 " })), /* @__PURE__ */ React.createElement(H5, null, "Contact")), /* @__PURE__ */ React.createElement(ListContainer, null, Object.keys(contacts).length > 0 ? contacts.map((contact, i) => {
    return /* @__PURE__ */ React.createElement(ListItem, { key: i }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "font-medium block" }, contact.contact_type), /* @__PURE__ */ React.createElement("span", { className: "block text-iapm-dark-gray" }, contact.contact)), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "p-2",
        onClick: () => handleClickButtonUpdate(
          contact,
          "contact"
        )
      },
      /* @__PURE__ */ React.createElement(PencilIcon, { className: "w-6 h-6 text-iapm-black" })
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "p-2",
        onClick: () => handleDelete(
          contact.id,
          "contact"
        )
      },
      /* @__PURE__ */ React.createElement(TrashIcon, { className: "w-6 h-6 text-iapm-black" })
    )));
  }) : /* @__PURE__ */ React.createElement(ListItem, { isEmpty: true }, /* @__PURE__ */ React.createElement("span", null, "No data displayed")))), /* @__PURE__ */ React.createElement("div", { className: "bg-white space-y-6  shadow rounded-3xl p-6 " }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 items-center" }, /* @__PURE__ */ React.createElement("span", { className: "p-2 rounded-full bg-iapm-yellow" }, /* @__PURE__ */ React.createElement(MapPinIcon, { className: "w-6 h-6 " })), /* @__PURE__ */ React.createElement(H5, null, "Address")), /* @__PURE__ */ React.createElement(ListContainer, null, Object.keys(addresses).length > 0 ? addresses.map((address, i) => {
    return /* @__PURE__ */ React.createElement(ListItem, { key: i }, /* @__PURE__ */ React.createElement(Paragraph, null, address.address), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "p-2",
        onClick: () => handleClickButtonUpdate(
          address,
          "address"
        )
      },
      /* @__PURE__ */ React.createElement(PencilIcon, { className: "w-6 h-6 text-iapm-black" })
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "p-2",
        onClick: () => handleDelete(
          address.id,
          "address"
        )
      },
      /* @__PURE__ */ React.createElement(TrashIcon, { className: "w-6 h-6 text-iapm-black" })
    )));
  }) : /* @__PURE__ */ React.createElement(ListItem, { isEmpty: true }, /* @__PURE__ */ React.createElement("span", null, "No data displayed")))), /* @__PURE__ */ React.createElement("div", { className: "bg-white space-y-6  shadow rounded-3xl p-6 " }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 items-center" }, /* @__PURE__ */ React.createElement("span", { className: "p-2 rounded-full bg-iapm-yellow" }, /* @__PURE__ */ React.createElement(GlobeAmericasIcon, { className: "w-6 h-6 " })), /* @__PURE__ */ React.createElement(H5, null, "Social Media")), /* @__PURE__ */ React.createElement(ListContainer, null, Object.keys(socials).length > 0 ? socials.map((social, i) => {
    return /* @__PURE__ */ React.createElement(ListItem, { key: i }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "font-medium block" }, social.social_type), /* @__PURE__ */ React.createElement(
      "a",
      {
        href: social.link,
        target: "_blank",
        className: "block text-iapm-dark-gray"
      },
      social.username
    )), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "p-2",
        onClick: () => handleClickButtonUpdate(
          social,
          "social-media"
        )
      },
      /* @__PURE__ */ React.createElement(PencilIcon, { className: "w-6 h-6 text-iapm-black" })
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "p-2",
        onClick: () => handleDelete(
          social.id,
          "social-media"
        )
      },
      /* @__PURE__ */ React.createElement(TrashIcon, { className: "w-6 h-6 text-iapm-black" })
    )));
  }) : /* @__PURE__ */ React.createElement(ListItem, { isEmpty: true }, /* @__PURE__ */ React.createElement("span", null, "No data displayed")))))));
};
const __vite_glob_1_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WebAttribute
}, Symbol.toStringTag, { value: "Module" }));
const HistoryDevelopment = (props) => {
  const { title, description } = props;
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
  return /* @__PURE__ */ React.createElement("section", { className: "w-full px-6 md:px-8 my-36 bg-grid bg-no-repeat" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-screen-xl mx-auto bg-gradient-linear-white space-y-16 " }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(H3, null, title), /* @__PURE__ */ React.createElement(Paragraph, null, description))), /* @__PURE__ */ React.createElement("div", { className: "relative items-center max-lg:grid-cols-1" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    TabBar,
    {
      datas: dummyData,
      onClickMenu
    },
    /* @__PURE__ */ React.createElement("div", { className: "grid gap-6 grid-cols-2 items-center max-md:grid-cols-1" }, /* @__PURE__ */ React.createElement("div", { className: "border border-iapm-red rounded-[32px]  mt-8 ml-8" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: defaultImage,
        alt: "",
        className: "aspect-[4/3] object-cover w-full mx-auto relative -left-8 -top-8 rounded-t-[32px] rounded-br-[32px] rounded-bl-lg"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement(H3, null, "What have we completed in", " ", displayedData.year, "?"), /* @__PURE__ */ React.createElement(Paragraph, null, displayedData.description)))
  )))));
};
const __vite_glob_1_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HistoryDevelopment
}, Symbol.toStringTag, { value: "Module" }));
const BlogSuggestion = (props) => {
  const { posts } = props;
  const BASE_URL_ASSET = "http://iapm.domaintesting.site/asset";
  return /* @__PURE__ */ React.createElement("section", { className: "w-full" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-6 " }, /* @__PURE__ */ React.createElement(H4, null, "Recent Posts"), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "grid gap-6 lg:grid-cols-1 max-lg:grid-cols-4\n                md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
    },
    Object.keys(posts).length > 0 ? posts == null ? void 0 : posts.map((post, i) => {
      return /* @__PURE__ */ React.createElement(
        Link,
        {
          className: "flex gap-2 items-center ",
          key: i,
          href: `/blogs/${post.slug}`
        },
        /* @__PURE__ */ React.createElement(
          "img",
          {
            src: (post == null ? void 0 : post.thumbnail) ? `${BASE_URL_ASSET}/${post == null ? void 0 : post.thumbnail}` : defaultImage,
            alt: post == null ? void 0 : post.title,
            className: "rounded-lg max-w-[100px] object-cover aspect-square"
          }
        ),
        /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Paragraph, null, (post == null ? void 0 : post.title.length) > 40 ? `${post == null ? void 0 : post.title.substring(
          0,
          40
        )}...` : post == null ? void 0 : post.title), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(CalendarIcon, { className: "w-5 h-5 text-iapm-dark-gray" }), /* @__PURE__ */ React.createElement(Caption, null, post == null ? void 0 : post.published_at)))
      );
    }) : /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "p-4 bg-gray-100 rounded-lg text-center lg:col-span-4\n                        md:col-span-3 max-md:col-span-2 max-sm:col-span-1"
      },
      "No other posts"
    )
  )));
};
const __vite_glob_1_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
const ReadingView = (props) => {
  var _a;
  const { post, lastedPosts } = props;
  const [currentUrl, setCurrentUrl] = useState("");
  const BASE_URL_ASSET = "http://iapm.domaintesting.site/asset";
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  return /* @__PURE__ */ React.createElement("article", { className: "max-w-screen-xl mx-auto mb-32 px-6 md:px-8 pt-12" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-4 max-lg:grid-cols-3 gap-6 md:gap-8" }, /* @__PURE__ */ React.createElement("div", { className: "md:col-span-1 max-sm:col-span-full" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-4 lg:sticky lg:top-16" }, /* @__PURE__ */ React.createElement(H5, null, "Share this post "), /* @__PURE__ */ React.createElement("div", { className: "flex space-x-4 " }, /* @__PURE__ */ React.createElement(
    SocialSharing,
    {
      url: currentUrl,
      sharingMedia: "facebook",
      qoute: "test",
      hashtag: "123"
    }
  ), /* @__PURE__ */ React.createElement(
    SocialSharing,
    {
      url: currentUrl,
      sharingMedia: "twitter"
    }
  ), /* @__PURE__ */ React.createElement(
    SocialSharing,
    {
      url: currentUrl,
      sharingMedia: "whatsapp"
    }
  )))), /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-2 max-lg:col-span-2 max-md:col-span-full space-y-6" }, /* @__PURE__ */ React.createElement(H2, null, post == null ? void 0 : post.title), /* @__PURE__ */ React.createElement("div", { className: "flex gap-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(CalendarIcon, { className: "w-5 h-5 text-iapm-dark-gray" }), /* @__PURE__ */ React.createElement(Caption, null, post == null ? void 0 : post.published_at)), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(EyeIcon, { className: "w-5 h-5 text-iapm-dark-gray" }), /* @__PURE__ */ React.createElement(Caption, null, ((_a = post == null ? void 0 : post.visits) == null ? void 0 : _a.score) || 0))), !!(post == null ? void 0 : post.thumbnail) && /* @__PURE__ */ React.createElement(
    "img",
    {
      src: `${BASE_URL_ASSET}/${post == null ? void 0 : post.thumbnail}`,
      alt: post == null ? void 0 : post.title,
      className: "rounded-xl aspect-video object-cover"
    }
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      dangerouslySetInnerHTML: { __html: post == null ? void 0 : post.content },
      className: "space-y-4 min-h-screen"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "col-span-1 max-lg:col-span-full " }, /* @__PURE__ */ React.createElement("div", { className: "lg:sticky lg:top-16" }, /* @__PURE__ */ React.createElement(BlogSuggestion, { posts: lastedPosts })))));
};
const __vite_glob_1_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ReadingView
}, Symbol.toStringTag, { value: "Module" }));
const BlogDetail = (props) => {
  const { post, lastedPosts, attributes } = props;
  const [currentUrl, setCurrentUrl] = useState("");
  const BASE_URL_ASSET = "http://iapm.domaintesting.site/asset";
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, post == null ? void 0 : post.title), /* @__PURE__ */ React.createElement("meta", { name: "robots", content: "index, follow" }), /* @__PURE__ */ React.createElement("meta", { name: "description", content: post == null ? void 0 : post.meta_description }), /* @__PURE__ */ React.createElement("meta", { property: "og:locale", content: "en_US" }), /* @__PURE__ */ React.createElement("meta", { property: "og:type", content: "article" }), /* @__PURE__ */ React.createElement("meta", { property: "og:title", content: post == null ? void 0 : post.meta_title }), /* @__PURE__ */ React.createElement(
    "meta",
    {
      property: "og:description",
      content: post == null ? void 0 : post.meta_description
    }
  ), /* @__PURE__ */ React.createElement("meta", { property: "og:url", content: currentUrl }), /* @__PURE__ */ React.createElement("meta", { property: "og:site_name", content: "PT IAPM Elinksolution" }), /* @__PURE__ */ React.createElement(
    "meta",
    {
      property: "article:published_time",
      content: post == null ? void 0 : post.published_at
    }
  ), /* @__PURE__ */ React.createElement(
    "meta",
    {
      property: "og:image",
      content: `${BASE_URL_ASSET}/${post == null ? void 0 : post.thumbnail}` || defaultImage
    }
  ), /* @__PURE__ */ React.createElement("meta", { property: "og:image:width", content: "1280" }), /* @__PURE__ */ React.createElement("meta", { property: "og:image:height", content: "853" }), /* @__PURE__ */ React.createElement("meta", { property: "og:image:type", content: "image/jpeg" }), /* @__PURE__ */ React.createElement("meta", { name: "twitter:card", content: "summary_large_image" }), /* @__PURE__ */ React.createElement("meta", { name: "twitter:site", content: "@iapmelinksolution" })), /* @__PURE__ */ React.createElement(ClientLayout, { attributes }, /* @__PURE__ */ React.createElement(ReadingView, { post, lastedPosts })));
};
const __vite_glob_1_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BlogDetail
}, Symbol.toStringTag, { value: "Module" }));
const Badge = (props) => {
  const { children } = props;
  return /* @__PURE__ */ React.createElement("span", { className: "block py-1 px-2 bg-iapm-light-gray rounded-full border border-gray-200" }, /* @__PURE__ */ React.createElement(Caption, null, children));
};
const BlogCollection = (props) => {
  const { posts, keyword } = props;
  const BASE_URL_ASSET = "http://iapm.domaintesting.site/asset";
  return /* @__PURE__ */ React.createElement("section", { className: "w-full my-16" }, /* @__PURE__ */ React.createElement("div", { className: " max-w-screen-xl px-6 md:px-8 mx-auto grid gap-6 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-3" }, posts == null ? void 0 : posts.filter((result) => {
    if (result === "")
      return result;
    if (result == null ? void 0 : result.title.toLowerCase().includes(keyword.toLowerCase()))
      return result;
  }).map((post, i) => {
    return i === 0 ? /* @__PURE__ */ React.createElement(
      Link,
      {
        className: "grid grid-cols-2 gap-6 max-sm:col-span-1 max-md:col-span-2 md:col-span-3 max-md:grid-cols-1 mb-16",
        href: `/blogs/${post == null ? void 0 : post.slug}`,
        key: i
      },
      /* @__PURE__ */ React.createElement(
        "img",
        {
          src: (post == null ? void 0 : post.thumbnail) ? `${BASE_URL_ASSET}/${post == null ? void 0 : post.thumbnail}` : defaultImage,
          alt: post == null ? void 0 : post.title,
          className: "rounded-lg aspect-video object-cover"
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "w-full space-y-6" }, /* @__PURE__ */ React.createElement(H3, null, post == null ? void 0 : post.title), /* @__PURE__ */ React.createElement(Paragraph, null, post == null ? void 0 : post.excerpt), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, post == null ? void 0 : post.post_categories.map(
        (category, i2) => {
          return /* @__PURE__ */ React.createElement(Badge, { key: i2 }, category.category_name);
        }
      )), /* @__PURE__ */ React.createElement(Caption, null, post == null ? void 0 : post.published_at))
    ) : /* @__PURE__ */ React.createElement(
      Link,
      {
        href: `/blogs/${post == null ? void 0 : post.slug}`,
        className: "space-y-4 block",
        key: i
      },
      /* @__PURE__ */ React.createElement(
        "img",
        {
          src: (post == null ? void 0 : post.thumbnail) ? `${BASE_URL_ASSET}/${post == null ? void 0 : post.thumbnail}` : defaultImage,
          alt: post == null ? void 0 : post.title,
          className: "rounded-lg aspect-video object-cover"
        }
      ),
      /* @__PURE__ */ React.createElement(H4, null, post == null ? void 0 : post.title),
      /* @__PURE__ */ React.createElement(Paragraph, null, post == null ? void 0 : post.excerpt),
      /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, post == null ? void 0 : post.post_categories.map(
        (category, i2) => {
          return /* @__PURE__ */ React.createElement(Badge, { key: i2 }, category.category_name);
        }
      )),
      /* @__PURE__ */ React.createElement(Caption, null, "Posted on : ", post == null ? void 0 : post.published_at)
    );
  })), Object.keys(posts).length === 0 && /* @__PURE__ */ React.createElement("div", { className: "text-center max-w-screen-xl mx-auto p-6" }, /* @__PURE__ */ React.createElement("span", { className: "w-max px-8 py-4 bg-gray-100 rounded-2xl" }, " ", "No blog posts at this time")));
};
const __vite_glob_1_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BlogCollection
}, Symbol.toStringTag, { value: "Module" }));
const Blog = (props) => {
  const { posts, attributes } = props;
  const [keyword, setKeyword] = useState("");
  const handleChangeKeyword = (value) => {
    setTimeout(() => {
      setKeyword(value.value);
    }, 50);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Blog")), /* @__PURE__ */ React.createElement(ClientLayout, { attributes }, /* @__PURE__ */ React.createElement("header", { className: "pt-16 pb-6 " }, /* @__PURE__ */ React.createElement("div", { className: " max-w-screen-xl mx-auto px-6 md:px-8 space-y-6 " }, /* @__PURE__ */ React.createElement(H2, null, "Our Blogs"), /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement(
    SearchInput,
    {
      inputName: "blog-search",
      inputId: "blogSearch",
      onChange: handleChangeKeyword
    }
  )))), /* @__PURE__ */ React.createElement(BlogCollection, { posts, keyword })));
};
const __vite_glob_1_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Blog
}, Symbol.toStringTag, { value: "Module" }));
const Contact = (props) => {
  var _a, _b, _c;
  const SITE_KEY = "6LexojAoAAAAAKoF9aMLbJSwnPp87pmQMsgOYGsa";
  const { attributes, flash, errors } = props;
  const [messageInfo, setMessageInfo] = useState("");
  const [isToast, setToast] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const reCaptchaRef = useRef(null);
  const contactFormRef = useRef(null);
  const contactLink = {
    Mail: {
      link: "mailto:"
    },
    WhatsApp: {
      link: "https://wa.me/"
    },
    Telegram: {
      link: "https://t.me/"
    },
    Telephone: {
      link: "tel:+"
    }
  };
  const handleSubmit = () => {
    router$1.post("/contacts/send-email", formik.values);
    setLoading(true);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      token: ""
    },
    validationSchema: sendMailValidationSchema,
    onSubmit: handleSubmit
  });
  const handleForm = (target2) => {
    if (typeof target2 === "string") {
      formik.setFieldValue("token", target2);
    } else {
      const { name, value } = target2;
      formik.setFieldValue(name, value);
    }
  };
  useEffect(() => {
    if (flash == null ? void 0 : flash.success) {
      setMessageInfo(flash.success);
      setToast(true);
      formik.resetForm();
      reCaptchaRef.current.reset();
      flash.success = null;
    } else if (Object.keys(errors).length > 0) {
      setMessageInfo(getErrorMessage$1(errors));
      setToast(true);
    }
    setLoading(false);
  }, [errors, flash]);
  useEffect(() => {
    const hideToast = () => {
      isToast && setTimeout(() => {
        setToast(false);
      }, 4e3);
    };
    hideToast();
  }, [isToast]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Contact")), /* @__PURE__ */ React.createElement(ClientLayout, { attributes }, /* @__PURE__ */ React.createElement("section", { className: "max-w-screen-xl mx-auto md:px-8 px-6" }, isToast && /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "fixed p-4 bg-white shadow-md bottom-6 right-6 rounded-lg max-w-[40ch] \r\n                            items-center max-sm:left-6 flex gap-4"
    },
    /* @__PURE__ */ React.createElement("span", { className: "p-2 bg-iapm-yellow rounded-full h-max" }, /* @__PURE__ */ React.createElement(BellAlertIcon, { className: "w-6 h-6 text-iapm-black" })),
    /* @__PURE__ */ React.createElement("span", { className: "text-sm text-iapm-black " }, messageInfo)
  ), /* @__PURE__ */ React.createElement("div", { className: "my-14" }, /* @__PURE__ */ React.createElement(H2, null, "Contact Us"), /* @__PURE__ */ React.createElement(Paragraph, null, "Have a question related to our company? Ask a question through the contact below")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-6 max-sm:grid-cols-1 bg-white p-6 border border-gray-100 rounded-3xl mb-16 " }, /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement(H5, null, "Contact information"), attributes == null ? void 0 : attributes.contacts.map((values, i) => {
    return /* @__PURE__ */ React.createElement(
      "a",
      {
        key: i,
        className: "flex gap-4 items-center",
        target: "_blank",
        href: `${contactLink[values.contact_type].link}${values == null ? void 0 : values.contact}`
      },
      /* @__PURE__ */ React.createElement("span", { className: "p-2 bg-iapm-yellow rounded-full h-max" }, values.contact_type === "Mail" ? /* @__PURE__ */ React.createElement(EnvelopeIcon, { className: "w-6 h-6 text-iapm-black" }) : /* @__PURE__ */ React.createElement(PhoneIcon, { className: "w-6 h-6 text-iapm-black" })),
      /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "text-sm block text-iapm-dark-gray" }, (values == null ? void 0 : values.contact_type) || "-"), /* @__PURE__ */ React.createElement("span", { className: "text-iapm-black" }, (values == null ? void 0 : values.contact) || "-"))
    );
  }), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(H5, null, "Address information"), attributes == null ? void 0 : attributes.addresses.map((values, i) => {
    return /* @__PURE__ */ React.createElement(
      "a",
      {
        href: `https://www.google.com/maps/search/${values == null ? void 0 : values.address}`,
        target: "_blank",
        className: "flex gap-4 items-center",
        key: i
      },
      /* @__PURE__ */ React.createElement("span", { className: "p-2 bg-iapm-yellow rounded-full h-max" }, /* @__PURE__ */ React.createElement(MapPinIcon, { className: "text-iapm-black w-6 h-6" })),
      /* @__PURE__ */ React.createElement("address", { className: "text-iapm-black not-italic max-w-[40ch]" }, (values == null ? void 0 : values.address) || "-")
    );
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(H5, null, "Send us a message"), /* @__PURE__ */ React.createElement(
    "form",
    {
      onSubmit: formik.handleSubmit,
      ref: contactFormRef
    },
    /* @__PURE__ */ React.createElement(
      IInput,
      {
        inputLabel: "Name",
        inputType: "text",
        inputName: "name",
        inputId: "name",
        onChange: handleForm,
        defaultValue: formik.values.name || "",
        errorMessage: (_a = formik.errors) == null ? void 0 : _a.name
      }
    ),
    /* @__PURE__ */ React.createElement(
      IInput,
      {
        inputLabel: "Email",
        inputType: "email",
        inputName: "email",
        inputId: "email",
        onChange: handleForm,
        defaultValue: formik.values.email || "",
        errorMessage: (_b = formik.errors) == null ? void 0 : _b.email
      }
    ),
    /* @__PURE__ */ React.createElement(
      ITextarea,
      {
        textareaName: "message",
        textareaLabel: "Message",
        textareaId: "message",
        onChange: handleForm,
        defaultValue: formik.values.message || "",
        errorMessage: (_c = formik.errors) == null ? void 0 : _c.message
      }
    ),
    /* @__PURE__ */ React.createElement("div", { className: "flex justify-end items-end gap-8 flex-col" }, /* @__PURE__ */ React.createElement(
      ReCAPTCHA,
      {
        sitekey: SITE_KEY,
        onChange: handleForm,
        ref: reCaptchaRef
      }
    ), /* @__PURE__ */ React.createElement(
      IButton,
      {
        variant: "primary",
        type: "submit",
        isLoading
      },
      "Send"
    ))
  ))))));
};
const __vite_glob_1_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact
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
      className: "aspect-square object-cover w-full mx-auto rounded-t-[64px] rounded-bl-[64px] sticky top-20 max-md:static"
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "space-y-8" }, /* @__PURE__ */ React.createElement(H2, null, "Business Analyst & Portfolio Management"), /* @__PURE__ */ React.createElement(
    "div",
    {
      dangerouslySetInnerHTML: { __html: content },
      className: "space-y-2"
    }
  ))));
};
const __vite_glob_1_38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ServiceDisplay
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
const __vite_glob_1_41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ServiceSuggestion
}, Symbol.toStringTag, { value: "Module" }));
const ServiceDetail = (props) => {
  const { attributes } = props;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Head, null, /* @__PURE__ */ React.createElement("title", null, "Services")), /* @__PURE__ */ React.createElement(ClientLayout, { attributes }, /* @__PURE__ */ React.createElement(ServiceDisplay, null), /* @__PURE__ */ React.createElement(ServiceSuggestion, null), /* @__PURE__ */ React.createElement(CTA, null)));
};
const __vite_glob_1_42 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ServiceDetail
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    progress: {
      color: "#FDC40C"
    },
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Admin/Asset/index.jsx": __vite_glob_1_0, "./Pages/Admin/Auth/SignIn.jsx": __vite_glob_1_1, "./Pages/Admin/Blog/BlogCategory.jsx": __vite_glob_1_2, "./Pages/Admin/Blog/BlogForm.jsx": __vite_glob_1_3, "./Pages/Admin/Blog/BlogList.jsx": __vite_glob_1_4, "./Pages/Admin/Blog/index.jsx": __vite_glob_1_5, "./Pages/Admin/Company/CompanyHistory.jsx": __vite_glob_1_6, "./Pages/Admin/Company/CompanyProfile.jsx": __vite_glob_1_7, "./Pages/Admin/Company/index.jsx": __vite_glob_1_8, "./Pages/Admin/Dashboard/index.jsx": __vite_glob_1_9, "./Pages/Admin/Dashboard/section/MessageList.jsx": __vite_glob_1_10, "./Pages/Admin/MediaPreview/index.jsx": __vite_glob_1_11, "./Pages/Admin/PageEditor/AboutEditor.jsx": __vite_glob_1_12, "./Pages/Admin/PageEditor/HomeEditor.jsx": __vite_glob_1_13, "./Pages/Admin/PageEditor/ServiceEditor.jsx": __vite_glob_1_14, "./Pages/Admin/PageEditor/index.jsx": __vite_glob_1_15, "./Pages/Admin/Service/Form.jsx": __vite_glob_1_16, "./Pages/Admin/Service/index.jsx": __vite_glob_1_17, "./Pages/Admin/Testimonial/index.jsx": __vite_glob_1_18, "./Pages/Admin/WebAttribute/AddressForm.jsx": __vite_glob_1_19, "./Pages/Admin/WebAttribute/ContactForm.jsx": __vite_glob_1_20, "./Pages/Admin/WebAttribute/SocialForm.jsx": __vite_glob_1_21, "./Pages/Admin/WebAttribute/index.jsx": __vite_glob_1_22, "./Pages/Client/About/Section/CompanyDesc.jsx": __vite_glob_1_23, "./Pages/Client/About/Section/HistoryDevelopment.jsx": __vite_glob_1_24, "./Pages/Client/About/index.jsx": __vite_glob_1_25, "./Pages/Client/Blog/BlogDetail.jsx": __vite_glob_1_26, "./Pages/Client/Blog/Section/BlogCollection.jsx": __vite_glob_1_27, "./Pages/Client/Blog/Section/BlogSuggestion.jsx": __vite_glob_1_28, "./Pages/Client/Blog/Section/ReadingView.jsx": __vite_glob_1_29, "./Pages/Client/Blog/index.jsx": __vite_glob_1_30, "./Pages/Client/Contact/index.jsx": __vite_glob_1_31, "./Pages/Client/Home/Section/Capability.jsx": __vite_glob_1_32, "./Pages/Client/Home/Section/ClientGalery.jsx": __vite_glob_1_33, "./Pages/Client/Home/Section/Hero.jsx": __vite_glob_1_34, "./Pages/Client/Home/Section/ServiceOverview.jsx": __vite_glob_1_35, "./Pages/Client/Home/Section/Testimonial.jsx": __vite_glob_1_36, "./Pages/Client/Home/index.jsx": __vite_glob_1_37, "./Pages/Client/Service/Section/ServiceDisplay.jsx": __vite_glob_1_38, "./Pages/Client/Service/Section/ServiceHeader.jsx": __vite_glob_1_39, "./Pages/Client/Service/Section/ServiceListing.jsx": __vite_glob_1_40, "./Pages/Client/Service/Section/ServiceSuggestion.jsx": __vite_glob_1_41, "./Pages/Client/Service/ServiceDetail.jsx": __vite_glob_1_42, "./Pages/Client/Service/index.jsx": __vite_glob_1_43 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ App, props }) => /* @__PURE__ */ React.createElement(App, { ...props })
  })
);
