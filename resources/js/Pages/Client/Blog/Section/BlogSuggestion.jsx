import React from "react";
import DummyImage from "../../../../../../public/assets/images/dummy/bg-service.jpg";
import { Caption, H4, Paragraph } from "../../../../Components/Text";
import { Link } from "@inertiajs/react";
import { CalendarIcon } from "@heroicons/react/24/outline";
const BlogSuggestion = (props) => {
    return (
        <section className="w-full">
            <div className="space-y-6 ">
                <H4>Recent Posts</H4>
                <div className="grid gap-4 lg:grid-cols-1 max-lg:grid-cols-4  md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                    {[...new Array(4)].map((_, i) => {
                        return (
                            <Link className="flex gap-2 items-center " key={i}>
                                <img
                                    src={DummyImage}
                                    alt=""
                                    className="rounded-lg max-w-[100px] object-cover aspect-square"
                                />
                                <div className="space-y-2">
                                    <Paragraph>
                                        Lorem ipsum dolor sit amet consectetur..
                                    </Paragraph>
                                    <div className="flex items-center gap-2">
                                        <CalendarIcon className="w-5 h-5 text-iapm-dark-gray" />
                                        <Caption>14/02/2023</Caption>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BlogSuggestion;
