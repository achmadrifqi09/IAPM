import React, { useEffect, useState } from "react";
import IcInstagtam from "../../../../public/assets/icons/ic-instagram.svg";
import IcFacebook from "../../../../public/assets/icons/ic-facebook.svg";
import IcWhatsapp from "../../../../public/assets/icons/ic-whatsapp.svg";
import IcLinkedIn from "../../../../public/assets/icons/ic-linkedin.svg";
import IcYoutube from "../../../../public/assets/icons/ic-youtube.svg";
import IcTwitter from "../../../../public/assets/icons/ic-twitter.svg";

const SocialIcon = (props) => {
    const [iconProps, setIconProps] = useState({});
    const { url } = props;
    const socials = [
        {
            socialName: "instagram",
            icon: IcInstagtam,
        },
        {
            socialName: "facebook",
            icon: IcFacebook,
        },
        {
            socialName: "twitter",
            icon: IcTwitter,
        },
        {
            socialName: "wa.me",
            icon: IcWhatsapp,
        },
        {
            socialName: "youtube",
            icon: IcYoutube,
        },
        {
            socialName: "linkedin",
            icon: IcLinkedIn,
        },
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

    return (
        <img src={iconProps?.icon} alt={`icon of ${iconProps.socialName}`}  className="w-max"/>
    );
};

export default SocialIcon;
