"use client";
import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Item from "./Item";
import NewBlogItem from "./NewBlogItem";
import { Col, Container, Row } from "react-bootstrap";
import RecentBlog from "./RecentBlog";

type Blog = {
  id: string;
  title: string;
  postSlug: string;
  shortDesc: string;
  bannerImage: string;
  bannerAltText: string;
  canonicalUrl: string;
  metaDescription: string;
  metaTitle: string;
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
    <div className={` ${filteredBlogs.length > 0 ? "" : ""}`}>
      <div className="blog-new">
        <Container>
          <Row className="justify-content-center ">
            <Col xs={12} md={8} className="pe-md-5 border-end-md ">
              <NewBlogItem filterData={filteredBlogs} />

            </Col>

            <Col xs={12} md={4} className="ps-md-5 mt-4 mt-md-0 ">
              <div className="sidebar-sticky ">
                <RecentBlog recentBlogs={blogs} />

                <div className="">
                  <p className="fw-semibold mb-3 blog-category mt-3 mt-md-5 ">
                    Recommended topics
                  </p>
                  <Filter
                    categories={categories.map((c: any) => c.name)}
                    onSelectCategory={(name: string) => {
                      const selectedCat = categories.find(
                        (c: any) => c.name === name
                      );
                      handleSelectCategory(selectedCat ? selectedCat.id : "");
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div className='row justify-content-center'>
          {filteredBlogs.length === 0 ? (
            <div className='no-data text-center py-5'>
              <h3>No blogs found</h3>
            </div>
          ) : (
            <div className='row row-cols-1 row-cols-md-2 row-cols-xl-3  blog-card-main  g-4 '>
              {filteredBlogs.map((blog) => (
                <div key={blog.id} className='col'>
                  <Item
                    item={{
                      id: blog.id,
                      title: blog.title,
                      postSlug: blog.postSlug,
                      bannerAltText: blog.bannerAltText,
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
        </div> */}
    </div>
  );
};

export default Blogs;
