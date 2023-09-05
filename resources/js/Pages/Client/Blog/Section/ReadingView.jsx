import React from "react";
import { H2, H5, Caption } from "../../../../Components/Text";
import DummyImage from "../../../../../../public/assets/images/dummy/bg-service.jpg";
import { CalendarIcon, EyeIcon } from "@heroicons/react/24/outline";
import BlogSuggestion from "./BlogSuggestion";
import SocialSharing from "../../../../Components/SocialSharing";

const ReadingView = (porps) => {
    const dummyData = {
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        exceprt: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.`,
        published: "14/08/2023",
        content: `<h3>What is Lorem Ipsum?</h3> <p>
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
"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>`,
    };
    return (
        <section className="max-w-screen-xl mx-auto mb-32 mt-16 px-6 md:px-8">
            <div className="grid grid-cols-4 max-lg:grid-cols-3 gap-6 md:gap-8">
                <div className="md:col-span-1 max-sm:col-span-full">
                    <div className="space-y-4 lg:sticky lg:top-16">
                        <H5>Share this post </H5>
                        <div className="flex space-x-4 ">
                            <SocialSharing
                                url="test.com"
                                sharingMedia="facebook"
                                qoute="test"
                                hashtag="123"
                            />
                            <SocialSharing
                                url="test.com"
                                sharingMedia="twitter"
                            />
                            <SocialSharing
                                url="test.com"
                                sharingMedia="whatsapp"
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 max-lg:col-span-2 max-md:col-span-full space-y-6">
                    <H2>{dummyData.title}</H2>
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <CalendarIcon className="w-5 h-5 text-iapm-dark-gray" />
                            <Caption>{dummyData.published}</Caption>
                        </div>
                        <div className="flex items-center gap-2">
                            <EyeIcon className="w-5 h-5 text-iapm-dark-gray" />
                            <Caption>124</Caption>
                        </div>
                    </div>
                    <img src={DummyImage} alt="" className="rounded-xl" />
                    <div
                        dangerouslySetInnerHTML={{ __html: dummyData.content }}
                        className="space-y-4"
                    />
                </div>
                <div className="col-span-1 max-lg:col-span-full ">
                    <div className="lg:sticky lg:top-16">
                        <BlogSuggestion />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReadingView;
