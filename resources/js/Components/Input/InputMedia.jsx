import React, { useRef, useEffect, useState } from "react";
import ICPhoto from "../../../../public/assets/icons/ic-photo.svg";

const InputMedia = (props) => {
    const previewRef = useRef(null);
    const [previwContent, setPreviewContent] = useState();
    const baseUrlAsset = import.meta.env.VITE_BASE_URL_ASSET;
    const {
        mediaLabel,
        mediaId,
        mediaName,
        errorMessage,
        onChange,
        defaultValue,
        mediaButtonLabel,
        mediaType,
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
                fileReader.addEventListener("load", function () {
                    setPreviewContent(`
                        <img src="${this.result}" alt="${targetName}"  class="h-44"/>
                    `);
                });
            } else if (mediaType === "video") {
                fileReader.addEventListener("load", function () {
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

    useEffect(() => {
        defaultValue && handlePreviw();
    }, [defaultValue]);

    return (
        <div className="my-4 w-full space-y-1">
            <span className=" text-iapm-dark-gray font-normal block text-base">
                {mediaLabel}
            </span>
            <div className=" h-auto border border-dashed border-gray-300 rounded-2xl p-4 flex flex-col justify-center items-center gap-2">
                <div
                    ref={previewRef}
                    className="lg:w-1/2 w-4/5 h-52 bg-gray-100 p-4 rounded-md flex justify-center items-center flex-col space-y-2"
                    dangerouslySetInnerHTML={{ __html: previwContent }}
                />
                <label
                    htmlFor={mediaId}
                    className="bg-iapm-yellow w-max py-2 px-4 rounded-2xl"
                >
                    {mediaButtonLabel}
                </label>
                <input
                    type="file"
                    id={mediaId}
                    name={mediaName}
                    className="hidden"
                    onChange={handleChange}
                    accept={`${mediaType}/*`}
                />
            </div>
            {errorMessage && (
                <span className="text-iapm-red text-sm">{errorMessage}</span>
            )}
        </div>
    );
};

export default InputMedia;
