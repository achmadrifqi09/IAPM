import React from "react";
import { Link } from "@inertiajs/react";
import ICWhatsapp from "../../../../public/assets/images/ic-whatsapp.svg";
import ICTwitter from "../../../../public/assets/images/ic-twitter.svg";
import ICFacebook from "../../../../public/assets/images/ic-facebook.svg";

const SocialSharing = (props) => {
    const { url, sharingMedia, qoute, hashtag } = props;
    const socialUrls = {
        facebook: `https://web.facebook.com/sharer/sharer.php?u=${url}&quote=${qoute}&hashtag=%23${hashtag}&_rdc=1&_rdr`,
        whatsapp: `https://web.whatsapp.com/send?text=${url}`,
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
                />
            </a>
        </>
    );
};

export default SocialSharing;
