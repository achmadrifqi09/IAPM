import React, { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const RichEditor = (props) => {
    const { onChange, defaultValue, editorName, editorLabel, errorMessage } =
        props;
    const TINY_API_KEY = import.meta.env.VITE_TINY_API_KEY;
    const editorRef = useRef(null);

    const handleChange = (e) => {
        onChange({ name: editorName, value: e });
    };

    return (
        <div className="my-4 w-full space-y-1">
            <span className="text-iapm-dark-gray block text-base font-poppins">
                {editorLabel}
            </span>
            <Editor
                apiKey={TINY_API_KEY}
                onInit={(evt, editor) => (editorRef.current = editor)}
                value={defaultValue}
                onEditorChange={handleChange}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: ["lists "],
                    toolbar:
                        "undo redo | formatselect | " +
                        "blocks fontsize" +
                        "bold italic backcolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat ",
                    content_style:
                        "body { font-family:Poppins,Helvetica,Arial,sans-serif; font-size:14px }",
                }}
            />
            {!!errorMessage && (
                <span className="text-sm text-iapm-red block">
                    {errorMessage}
                </span>
            )}
        </div>
    );
};

export default RichEditor;
