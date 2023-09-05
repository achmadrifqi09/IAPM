import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Modal = (props) => {
    const { title, handleModal, children } = props;

    const handleOpenModal = () => {
        handleModal();
    };

    return (
        <section className="fixed w-screen h-screen bg-iapm-black bg-opacity-60 top-0 left-0 right-0 z-40">
            <div className=" max-w-screen-xxl px-4 md:px-8 mx-auto mt-20 ">
                <div className="p-6 rounded-3xl bg-white md:w-1/2 w-full mx-auto">
                    <div className="flex justify-between items-center mb-6 border-b pb-2 border-gray-100">
                        <h5 className="text-lg text-iapm-black">{title}</h5>

                        <button onClick={handleOpenModal} className="py-2 px-4">
                            <XMarkIcon className="w-6 h-6 text-iapm-dark-gray" />
                        </button>
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        </section>
    );
};

export default Modal;
