import React from "react";
import Banner from "@/Components/BlogPage/Blogs/Banner";
import BlogSkeleton from "@/Components/BlogPage/Blogs/BlogSkeleton";

export default function Loading() {
    return (
        <div>
            <Banner
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Blog", href: "/blog" },
                ]}
                title="PlutoHub's Blog - Get Latest Insights"
            />
            <div id="blog-section" className="blog-h blog-bg">
                <BlogSkeleton />
            </div>
        </div>
    );
}
