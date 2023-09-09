import React from "react";
import ListContainer from "../../../Components/List/ListContainer";
import ListItem from "../../../Components/List/ListItem";
import dummyImage from "../../../../../public/assets/images/dummy/bg-service.jpg";
import SearchInput from "../../../Components/Input/SearchInput";
import { H6 } from "../../../Components/Text";
import {
    EyeIcon,
    DocumentTextIcon,
    ArrowUpRightIcon,
    PencilIcon,
    TrashIcon,
    PlusIcon,
} from "@heroicons/react/24/outline";
import IButton from "../../../Components/Button/Button";
import { Link } from "@inertiajs/inertia-react";

const BlogList = (props) => {
    return (
        <>
            <IButton variant="primary" isLink={true} url="/manage-blogs/from">
                <PlusIcon className="w-6 h-6" />
                Add Blog
            </IButton>
            <SearchInput />
            <ListContainer>
                <ListItem>
                    <div className="flex gap-4 max-sm:flex-col box-border">
                        <img
                            src={dummyImage}
                            alt=""
                            className=" aspect-square object-cover sm:max-w-[80px] rounded-xl"
                        />

                        <div className="space-y-2">
                            <H6>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Esse, blanditiis!
                            </H6>
                            <div className="flex gap-6 flex-wrap">
                                <span className="flex gap-2 text-iapm-dark-gray text-sm items-center">
                                    <EyeIcon className="w-4 h-4" />
                                    149
                                </span>
                                <span className="flex gap-2 text-iapm-dark-gray text-sm items-center">
                                    <DocumentTextIcon className="w-4 h-4" />
                                    Published
                                </span>
                                <a
                                    href=""
                                    className="flex gap-2 text-iapm-dark-gray text-sm items-center"
                                >
                                    <ArrowUpRightIcon className="w-4 h-4" />
                                    Preview
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 max-sm:mt-4">
                        <Link
                            href=""
                            className="p-2 rounded-xl border border-iapm-black"
                        >
                            <PencilIcon className="w-6 h-6 text-center" />
                        </Link>
                        <button className="p-2 rounded-xl border border-iapm-black">
                            <TrashIcon className="w-6 h-6 text-center" />
                        </button>
                    </div>
                </ListItem>
            </ListContainer>
        </>
    );
};

export default BlogList;
