import React from "react";

import ICWhatsapp from "../../../../public/assets/images/ic-whatsapp.svg";
import ICTwitter from "../../../../public/assets/images/ic-twitter.svg";
import ICFacebook from "../../../../public/assets/images/ic-facebook.svg";

const SocialSharing = (props) => {
    const { url, sharingMedia } = props;
    const socialUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&amp;src=sdkpreparse `,
        whatsapp: `https://wa.me/?text=${url}`,
        twitter: `https://twitter.com/intent/tweet?url=${url}`,
    };

    const socialIcons = {
        facebook: ICFacebook,
        twitter: ICTwitter,
        whatsapp: ICWhatsapp,
    };

    return (
        <>
            <a href={socialUrls[sharingMedia]} target="_blank">
                <img
                    src={socialIcons[sharingMedia]}
                    alt="icon"
                    className="h-8 w-8"
                    loading="lazy"
                />
            </a>
        </>
    );
};

export default SocialSharing;
