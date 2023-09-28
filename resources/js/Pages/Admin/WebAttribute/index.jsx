import React, { useEffect, useState } from "react";
import AdminLayout from "../../../Layouts/admin-layout";
import { Head } from "@inertiajs/react";
import { H3, H5, Paragraph } from "../../../Components/Text";
import IButtonDropdown from "../../../Components/Button/ButtonDropdown";
import ListContainer from "../../../Components/List/ListContainer";
import ListItem from "../../../Components/List/ListItem";
import {
    TrashIcon,
    PencilIcon,
    PhoneIcon,
    MapPinIcon,
    GlobeAmericasIcon,
    KeyIcon,
} from "@heroicons/react/24/outline";
import Modal from "../../../Components/Modal";
import ContactForm from "./ContactForm";
import Swal from "sweetalert2";
import { confirmSetttings } from "../../../Helpers/sweetalert-config";
import AddressForm from "./AddressForm";
import SocialForm from "./SocialForm";
import { router } from "@inertiajs/react";

const WebAttribute = (props) => {
    const { flash, errors, contacts, addresses, socials } = props;
    const [value, setValue] = useState({});
    const [modalProps, setModalProps] = useState({
        isOpen: false,
        field: "",
        title: "",
        isUpdate: false,
    });

    const buttonPrimaryContactStyle = {
        active: "w-6 h-6 text-iapm-black",
        non_active: "w-6 h-6 text-gray-400",
    };

    const dropdownMenus = [
        {
            label: "Contact",
            ariaLabel: "contact",
        },
        {
            label: "Address",
            ariaLabel: "address",
        },
        {
            label: "Social Media",
            ariaLabel: "social-media",
        },
    ];

    const handleModal = () => {
        !!modalProps.isOpen === true && setValue({});
        setModalProps({
            ...modalProps,
            isUpdate: false,
            field: "",
            title: "",
            isOpen: !modalProps.isOpen,
        });
    };

    const handleClickButtonAdd = (e) => {
        const { ariaLabel } = e;
        setModalProps({
            ...modalProps,
            title: `Add ${getTitleByField(ariaLabel)}`,
            field: ariaLabel,
            isOpen: !modalProps.isOpen,
        });
    };

    const handleClickButtonUpdate = (value, field) => {
        setValue(value);
        setModalProps({
            ...modalProps,
            title: `Update ${getTitleByField(field)}`,
            field: field,
            isOpen: !modalProps.isOpen,
            isUpdate: true,
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
            text: `Delete this web attribute`,
        }).then((result) => {
            if (result.isConfirmed) {
                switch (field) {
                    case "contact":
                        router.delete(`/contacts/${id}`);
                        break;
                    case "address":
                        router.delete(`/addresses/${id}`);
                        break;
                    case "social-media":
                        router.delete(`/socials/${id}`);
                        break;
                }
            }
        });
    };

    const handleMainContact = (id) => {
        Swal.fire({
            ...confirmSetttings,
            text: `Make this email your primary contact`,
        }).then((result) => {
            if (result.isConfirmed) {
                router.put(`/contacts/${id}/primary`);
            }
        });
    };

    useEffect(() => {
        Object.keys(flash).forEach((key) => {
            delete flash[key];
        });
        Object.keys(errors).forEach((key) => {
            delete errors[key];
        });
    }, []);

    useEffect(() => {
        if (flash?.success || Object.keys(errors).length > 0) {
            !!modalProps.isOpen && handleModal();
        }
        setModalProps({
            ...modalProps,
            title: "",
            field: "",
            isUpdate: false,
        });
        setValue({});
    }, [errors, flash]);

    return (
        <>
            <Head>
                <title>Web Attribute</title>
            </Head>
            <AdminLayout>
                {!!modalProps.isOpen && (
                    <Modal title={modalProps.title} handleModal={handleModal}>
                        {modalProps.field === "contact" && (
                            <ContactForm
                                closeModal={handleModal}
                                value={value}
                                isUpdate={modalProps.isUpdate}
                            />
                        )}
                        {modalProps.field === "address" && (
                            <AddressForm
                                closeModal={handleModal}
                                value={value}
                                isUpdate={modalProps.isUpdate}
                            />
                        )}
                        {modalProps.field === "social-media" && (
                            <SocialForm
                                closeModal={handleModal}
                                value={value}
                                isUpdate={modalProps.isUpdate}
                            />
                        )}
                    </Modal>
                )}
                <section className="space-y-6 bg-white shadow rounded-3xl p-6 my-6 ">
                    <H3>Web Attribute</H3>
                    <IButtonDropdown
                        menus={dropdownMenus}
                        buttonLabel="Add Attribute"
                        action={handleClickButtonAdd}
                    />
                </section>
                <section className="grid grid-cols-2 gap-6 max-lg:grid-cols-1 mb-6">
                    <div className="bg-white space-y-6  shadow rounded-3xl p-6 ">
                        <div className="flex gap-4 items-center">
                            <span className="p-2 rounded-full bg-iapm-yellow">
                                <PhoneIcon className="w-6 h-6 " />
                            </span>
                            <H5>Contact</H5>
                        </div>
                        <ListContainer>
                            {Object.keys(contacts).length > 0 ? (
                                contacts.map((contact, i) => {
                                    return (
                                        <ListItem key={i}>
                                            <div>
                                                <span className="font-medium block">
                                                    {contact.contact_type}
                                                </span>
                                                <span className="block text-iapm-dark-gray">
                                                    {contact.contact}
                                                </span>
                                            </div>
                                            <div className="flex">
                                                <button
                                                    className="p-2"
                                                    onClick={() =>
                                                        handleClickButtonUpdate(
                                                            contact,
                                                            "contact"
                                                        )
                                                    }
                                                >
                                                    <PencilIcon className="w-6 h-6 text-iapm-black" />
                                                </button>
                                                <button
                                                    className="p-2"
                                                    onClick={() =>
                                                        handleDelete(
                                                            contact.id,
                                                            "contact"
                                                        )
                                                    }
                                                >
                                                    <TrashIcon className="w-6 h-6 text-iapm-black" />
                                                </button>
                                                {contact.contact_type ===
                                                    "Email" && (
                                                    <button
                                                        className="p-2"
                                                        onClick={() =>
                                                            handleMainContact(
                                                                contact.id
                                                            )
                                                        }
                                                    >
                                                        <KeyIcon
                                                            className={
                                                                contact?.primary_contact ===
                                                                "Yes"
                                                                    ? buttonPrimaryContactStyle.active
                                                                    : buttonPrimaryContactStyle.non_active
                                                            }
                                                        />
                                                    </button>
                                                )}
                                            </div>
                                        </ListItem>
                                    );
                                })
                            ) : (
                                <ListItem isEmpty={true}>
                                    <span>No data displayed</span>
                                </ListItem>
                            )}
                        </ListContainer>
                    </div>
                    <div className="bg-white space-y-6  shadow rounded-3xl p-6 ">
                        <div className="flex gap-4 items-center">
                            <span className="p-2 rounded-full bg-iapm-yellow">
                                <MapPinIcon className="w-6 h-6 " />
                            </span>
                            <H5>Address</H5>
                        </div>
                        <ListContainer>
                            {Object.keys(addresses).length > 0 ? (
                                addresses.map((address, i) => {
                                    return (
                                        <ListItem key={i}>
                                            <Paragraph>
                                                {address.address}
                                            </Paragraph>
                                            <div className="flex gap-4">
                                                <button
                                                    className="p-2"
                                                    onClick={() =>
                                                        handleClickButtonUpdate(
                                                            address,
                                                            "address"
                                                        )
                                                    }
                                                >
                                                    <PencilIcon className="w-6 h-6 text-iapm-black" />
                                                </button>
                                                <button
                                                    className="p-2"
                                                    onClick={() =>
                                                        handleDelete(
                                                            address.id,
                                                            "address"
                                                        )
                                                    }
                                                >
                                                    <TrashIcon className="w-6 h-6 text-iapm-black" />
                                                </button>
                                            </div>
                                        </ListItem>
                                    );
                                })
                            ) : (
                                <ListItem isEmpty={true}>
                                    <span>No data displayed</span>
                                </ListItem>
                            )}
                        </ListContainer>
                    </div>
                    <div className="bg-white space-y-6  shadow rounded-3xl p-6 ">
                        <div className="flex gap-4 items-center">
                            <span className="p-2 rounded-full bg-iapm-yellow">
                                <GlobeAmericasIcon className="w-6 h-6 " />
                            </span>
                            <H5>Social Media</H5>
                        </div>
                        <ListContainer>
                            {Object.keys(socials).length > 0 ? (
                                socials.map((social, i) => {
                                    return (
                                        <ListItem key={i}>
                                            <div>
                                                <span className="font-medium block">
                                                    {social.social_type}
                                                </span>

                                                <a
                                                    href={social.link}
                                                    target="_blank"
                                                    className="block text-iapm-dark-gray"
                                                >
                                                    {social.username}
                                                </a>
                                            </div>
                                            <div className="flex gap-4">
                                                <button
                                                    className="p-2"
                                                    onClick={() =>
                                                        handleClickButtonUpdate(
                                                            social,
                                                            "social-media"
                                                        )
                                                    }
                                                >
                                                    <PencilIcon className="w-6 h-6 text-iapm-black" />
                                                </button>
                                                <button
                                                    className="p-2"
                                                    onClick={() =>
                                                        handleDelete(
                                                            social.id,
                                                            "social-media"
                                                        )
                                                    }
                                                >
                                                    <TrashIcon className="w-6 h-6 text-iapm-black" />
                                                </button>
                                            </div>
                                        </ListItem>
                                    );
                                })
                            ) : (
                                <ListItem isEmpty={true}>
                                    <span>No data displayed</span>
                                </ListItem>
                            )}
                        </ListContainer>
                    </div>
                </section>
            </AdminLayout>
        </>
    );
};
export default WebAttribute;
