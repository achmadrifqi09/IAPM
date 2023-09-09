import React from "react";
import DummyImage from "../../../../../../public/assets/images/dummy/bg-service.jpg";
import { H3, H4, Paragraph, Caption } from "../../../../Components/Text";
import { Link } from "@inertiajs/inertia-react";
import Badge from "../../../../Components/Badge";

const BlogCollection = (props) => {
    return (
        <section className="w-full my-16">
            <div className=" max-w-screen-xl px-6 md:px-8 mx-auto grid gap-6 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                <Link
                    className="grid grid-cols-2 gap-6 max-sm:col-span-1 max-md:col-span-2 md:col-span-3 max-md:grid-cols-1 mb-16"
                    href=""
                >
                    <img src={DummyImage} alt="" className="rounded-lg" />
                    <div className="w-full space-y-6">
                        <H3>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti, tempore?
                        </H3>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Repudiandae sequi sit placeat suscipit
                            laudantium ipsam saepe ad odio, quis soluta.
                        </Paragraph>
                        <div className="flex flex-wrap gap-2">
                            <Badge>Technology</Badge>
                            <Badge>Latest</Badge>
                        </div>
                        <Caption>Posted on : 32/08/2023</Caption>
                    </div>
                </Link>
                <div className="sm:hidden">
                    <H3>Other posts</H3>
                </div>
                {[...new Array(6)].map((_, i) => {
                    return (
                        <Link href="" className="space-y-4 block" key={i}>
                            <img
                                src={DummyImage}
                                alt=""
                                className="rounded-lg"
                            />
                            <H4>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Corrupti, tempore?
                            </H4>
                            <div className="flex flex-wrap">
                                <Badge>Project Magement</Badge>
                            </div>
                            <Caption>Posted on : 32/08/2023</Caption>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default BlogCollection;
