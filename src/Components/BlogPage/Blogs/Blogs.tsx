"use client";
import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Item from "./Item";

type Blog = {
  id: string;
  title: string;
  postSlug: string;
  shortDesc: string;
  bannerImage: string;
  content: any;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  blogCategoryId: string;
};

type BlogCategory = {
  id: string;
  name: string;
};

type BlogsProps = {
  blogs: Blog[];
  categories: any;
};

const Blogs: React.FC<BlogsProps> = ({ blogs, categories }) => {
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>(blogs);

  const handleSelectCategory = (categoryId: string) => {
    if (!categoryId) {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter(
        (blog) => blog.blogCategoryId === categoryId
      );
      setFilteredBlogs(filtered);
    }
  };

  return (
    <div className={`app ${filteredBlogs.length > 0 ? "blog-main" : ""}`}>
      <div className='container'>
        <Filter
          categories={categories.map((c) => c.name)}
          onSelectCategory={(name) => {
            const selectedCat = categories.find((c) => c.name === name);
            handleSelectCategory(selectedCat ? selectedCat.id : "");
          }}
        />

        <div className='row justify-content-center'>
          {filteredBlogs.length === 0 ? (
            <div className='no-data text-center py-5'>
              <h3>No blogs found</h3>
            </div>
          ) : (
            <div className='row row-cols-1 row-cols-md-2 row-cols-xl-3  blog-card-main '>
              {filteredBlogs.map((blog) => (
                <div key={blog.id} className='col'>
                  <Item
                    item={{
                      id: blog.id,
                      title: blog.title,
                      postSlug: blog.postSlug,
                      category:
                        categories.find((c) => c.id === blog.blogCategoryId)
                          ?.name || "Uncategorized",
                      image: blog.bannerImage,
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
