import React, { useEffect } from "react";
import AdminLayout from "../../../Layouts/admin-layout";
import { Head } from "@inertiajs/react";
import IButton from "../../../Components/Button/Button";
import { H3 } from "../../../Components/Text";
import { PlusIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";
import getErrorMessage from "../../../Helpers/error-message";
import {
    toastSettings,
    confirmSetttings,
} from "../../../Helpers/sweetalert-config";
import ITable from "../../../Components/Table";
import { MenuItem } from "@mui/material";

const Service = (props) => {
    const { services, errors, flash } = props;
    const baseUrlAsset = import.meta.env.VITE_BASE_URL_ASSET;
    const serviceColumns = [
        {
            header: "Service Name",
            accessorKey: "service_name",
        },
        {
            header: "Short Description",
            accessorKey: "short_description",
        },
        {
            header: " Image",
            accessorKey: "image",
            Cell: ({ cell }) => {
                return (
                    <a
                        href={`${baseUrlAsset}/${cell.getValue()}`}
                        target="_blank"
                        className="text-amber-700"
                    >
                        View
                    </a>
                );
            },
        },
        {
            header: "Description",
            accessorKey: "description",
        },
    ];

    const handleDeleteService = (id) => {
        Swal.fire({
            ...confirmSetttings,
            text: `Delete this service`,
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
                title: `${flash.success}`,
            });
        } else if (Object.keys(errors).length > 0) {
            Swal.fire({
                ...toastSettings,
                icon: "error",
                title: getErrorMessage(errors),
            });
        }
    }, [errors, flash]);
    return (
        <>
            <Head>
                <title>Service</title>
            </Head>
            <AdminLayout>
                <section className="space-y-6 bg-white shadow rounded-3xl p-6 my-6 ">
                    <H3>Service</H3>
                    <div className="justify-between flex-wrap">
                        <IButton
                            variant="primary"
                            isLink={true}
                            url="/service-products/form"
                        >
                            <PlusIcon className="w-6 h-6 text-iapm-black" />
                            Add Service
                        </IButton>
                    </div>
                    <ITable
                        columns={serviceColumns}
                        datas={services}
                        action={({ row, closeMenu }) => [
                            <MenuItem
                                key="detail"
                                sx={{ fontSize: "10pt" }}
                                onClick={() => {
                                    router.visit(
                                        `/service-products/${row.original.id}/form`
                                    );
                                    closeMenu();
                                }}
                            >
                                Update
                            </MenuItem>,
                            <MenuItem
                                key="edit"
                                sx={{ fontSize: "10pt" }}
                                onClick={() => {
                                    handleDeleteService(row.original.id);
                                    closeMenu();
                                }}
                            >
                                Delete
                            </MenuItem>,
                        ]}
                    />
                </section>
            </AdminLayout>
        </>
    );
};

export default Service;
