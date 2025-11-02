import React from "react";
import BlogPage from "../../Components/BlogPage/BlogPage";
import { postList } from "../actions/blog/blog.actions";
import { blogCategoryList } from "../actions/blog/blogCategory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog: Web Development, UI Design & Logo Branding Guide",
  description: "Our blog shares success stories and strategies for web development and UI design. Learn branding lessons that worked. Get inspired and take action. Read now.",
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
