import React from "react";
import BlogDetailsSkeleton from "@/Components/BlogDetailsPage/BlogDetailsSkeleton";

export default function Loading() {
    return (
        <div className="blog-bg py-5">
            <BlogDetailsSkeleton />
        </div>
    );
}
