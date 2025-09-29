import React from "react";
import BlogPage from "../../Components/BlogPage/BlogPage";
import { postList } from "../actions/blog/blog.actions";
import { blogCategoryList } from "../actions/blog/blogCategory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Plutohub's Blog",
};
export const dynamic = "force-dynamic";
const page = async () => {
  const blogsResponse = await postList();
  const blogCategoriesResponse: any = await blogCategoryList();
  console.log(blogsResponse, "post");

  if (!blogCategoriesResponse.success) {
    console.error(" Failed to fetch categories:", blogCategoriesResponse.msg);
    return <div>Failed to load categories</div>;
  }

  
  const blogsArray = Array.isArray(blogsResponse?.post?.postsWithContentObj)
    ? blogsResponse?.post?.postsWithContentObj.map((blog: any) => ({
        ...blog,
        author: {
          ...blog.author,
          profileImage: blog.author?.profileImage ?? "",
        },
      }))
    : [];

  const categoriesArray = Array.isArray(blogCategoriesResponse.blogCategory)
    ? blogCategoriesResponse.blogCategory
    : [];

  

  return <BlogPage blogs={blogsArray} blogCategories={categoriesArray} />;
};

export default page;
