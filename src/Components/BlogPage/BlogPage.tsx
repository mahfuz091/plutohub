"use client";

import React from "react";
import Banner from "../AboutUs/Banner/Banner";
import BlogBanner from "./BlogBanner/BlogBanner";
import Blogs from "./Blogs/Blogs";
import JoinTeam from "./Blogs/JoinTeam";

// category type
type BlogCategory = {
  _id: string;
  name: string;
};

type Blog = {
  id: string;
  title: string;
  postSlug: string;
  shortDesc: string;
  bannerImage: string;
  content: any;
  authorId: string;
  author: { id: string; name: string; email: string; profileImage: string };
  createdAt: Date;
  updatedAt: Date;
  blogCategoryId: string;
};

type BlogPageProps = {
  blogs: Blog[];
  blogCategories: BlogCategory[];
};

const BlogPage: React.FC<BlogPageProps> = ({ blogs, blogCategories }) => {
  return (
    <div>
      <Banner
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
        title="Plutohub's Blog"
      />
      <BlogBanner blogs={blogs} categories={blogCategories} />
      <div id='blog-section' className='blog-h'>
        <Blogs blogs={blogs} categories={blogCategories} />
      </div>

      <JoinTeam />
    </div>
  );
};

export default BlogPage;
