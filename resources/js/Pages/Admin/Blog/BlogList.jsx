import React, { useState } from "react";
import ListContainer from "../../../Components/List/ListContainer";
import ListItem from "../../../Components/List/ListItem";
import defaultImage from "../../../../../public/assets/images/default-images/3dLogo.svg";
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
import { Link, router } from "@inertiajs/react";
import Swal from "sweetalert2";
import { confirmSetttings } from "../../../Helpers/sweetalert-config";

const BlogList = (props) => {
    const { posts } = props;
    const VITE_ASSET_URL = import.meta.env.VITE_BASE_URL_ASSET;
    const VITE_BLOG_URL = import.meta.env.VITE_BLOG_URL;
    const [keyword, setKeyword] = useState("");

    const handleDeleteAction = (id) => {
        Swal.fire({
            ...confirmSetttings,
            text: `Delete this blog post`,
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/manage-blogs/${id}`);
            }
        });
    };

    const hanldeChangeKeyword = (target) => {
        setKeyword(target.value);
    };

    return (
        <>
            <IButton variant="primary" isLink={true} url="/manage-blogs/form">
                <PlusIcon className="w-6 h-6" />
                Add Blog
            </IButton>

            <SearchInput
                inputName="keyword"
                inputType="text"
                inputId="keyword"
                onChange={hanldeChangeKeyword}
            />

            <ListContainer>
                {Object.keys(posts).length > 0 ? (
                    posts
                        .filter((result) => {
                            if (keyword === "") return result;

                            if (
                                result?.title
                                    .toLowerCase()
                                    .includes(keyword.toLowerCase())
                            )
                                return result;
                        })
                        .map((post, i) => {
                            return (
                                <ListItem key={i}>
                                    <div className="flex gap-4 max-sm:flex-col w-full box-border">
                                        <img
                                            src={
                                                post.thumbnail
                                                    ? `${VITE_ASSET_URL}/${post.thumbnail}`
                                                    : defaultImage
                                            }
                                            alt=""
                                            className="aspect-square object-cover sm:max-w-[80px] rounded-xl"
                                        />

                                        <div className="space-y-2">
                                            <H6>{post.title}</H6>
                                            <div className="flex gap-6 max-sm:flex-wrap">
                                                <span className="flex gap-2 text-iapm-dark-gray text-sm items-center">
                                                    <EyeIcon className="w-4 h-4" />
                                                    {post?.visits?.score || 0}
                                                </span>
                                                <span className="flex gap-2 text-iapm-dark-gray text-sm items-center">
                                                    <DocumentTextIcon className="w-4 h-4" />
                                                    {post.status}
                                                </span>
                                                <a
                                                    href={`${VITE_BLOG_URL}/${post.slug}`}
                                                    target="_blank"
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
                                            href={`/manage-blogs/${post.id}/form`}
                                            className="p-2 rounded-xl"
                                        >
                                            <PencilIcon className="w-6 h-6 text-center" />
                                        </Link>
                                        <button
                                            className="p-2 rounded-xl"
                                            onClick={() =>
                                                handleDeleteAction(post.id)
                                            }
                                        >
                                            <TrashIcon className="w-6 h-6 text-center" />
                                        </button>
                                    </div>
                                </ListItem>
                            );
                        })
                ) : (
                    <li className="p-6 bg-gray-100 rounded-xl flex justify-center items-center flex-wrap sm:col-span-2 text-center">
                        No Data to display
                    </li>
                )}
            </ListContainer>
        </>
    );
};

export default BlogList;
