import React, { useState } from "react";

import { H2, Paragraph } from "../../../../Components/Text";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SearchInput from "../../../../Components/Input/SearchInput";

const BlogHeader = (props) => {
    const [keyword, setKeyword] = useState("");
    const handleChangeSearch = (target) => {
        setKeyword(target.value);
    };

    return (
        <section className="my-16 ">
            <div className=" max-w-screen-xl mx-auto px-6 md:px-8 space-y-6 ">
                <H2>Our Blogs</H2>
                <form>
                    <SearchInput
                        inputName="blog-search"
                        inputId="blogSearch"
                        onChange={handleChangeSearch}
                    />
                </form>
            </div>
        </section>
    );
};

export default BlogHeader;
