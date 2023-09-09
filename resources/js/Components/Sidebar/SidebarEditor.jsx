import React from "react";

const SidebarEditor = (props) => {
    const { children, isOpenEditor } = props;

    const editorContainerStyle = {
        open: "w-80 fixed top-16 min-h-screen bg-white z-10 shadow-xl right-0 translate-x-0 trasition duration-100 box-border",
        close: "w-80 fixed top-16 min-h-screen bg-white z-10 shadow-xl right-0 translate-x-80 trasition duration-100 box-border",
    };

    return (
        <aside
            className={
                isOpenEditor === true
                    ? editorContainerStyle.open
                    : editorContainerStyle.close
            }
        >
            <div className="pt-3">
                <div className="h-screen overflow-y-scroll custom-scrollbar px-4 pb-40">
                    {children}
                </div>
            </div>
        </aside>
    );
};

export default SidebarEditor;
