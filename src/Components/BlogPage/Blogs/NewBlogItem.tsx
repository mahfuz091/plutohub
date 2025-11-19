"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MessageCircle } from "lucide-react";

interface Author {
  name: string;
  profileImage: string;
}

interface BlogCategory {
  id: string;
  name: string;
}

interface Blog {
  id: string;
  title: string;
  postSlug: string;
  shortDesc: string;
  bannerImage: string;
  bannerAltText: string;
  createdAt: string | Date;
  Comment?: any[];
  author?: Author;
  BlogCategory?: BlogCategory;
  metaDescription: string;
}

interface NewBlogItemProps {
  filterData: Blog[];
}

const NewBlogItem: React.FC<NewBlogItemProps> = ({ filterData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;


  const totalPages = Math.ceil(filterData.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filterData.slice(indexOfFirstBlog, indexOfLastBlog);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  if (!filterData || filterData.length === 0) {
    return (
      <div className="text-center py-5">
        <h5>No blogs found</h5>
      </div>
    );
  }

  return (
    <div>
      
      {currentBlogs.map((blog, index) => (
        <div
          key={blog.id || index}
          className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center blog-card-new gap-3 mb-4"
        >
          
          <Link href={`/blog/${blog.postSlug}`} className="order-1 order-md-2">
            <div className="blog-thumbnail">
              <img
                src={blog.bannerImage}
                alt={blog.bannerAltText || blog.title}
                className="img-fluid rounded mb-2 thumbnail-img"
              />
            </div>
          </Link>

          <div className="flex-grow-1 me-3 order-2 order-md-1">
            <div className="d-flex align-items-center mb-2">
              
                <Image
                  src={blog.author.profileImage || "/images/user-circle.png"}
                  alt={blog.author.name}
                  width={30}
                  height={30}
                  className="rounded-circle me-3 bg-white"
                />
              
              <span className="author_name">
                {blog.author?.name || "Unknown Author"}
              </span>
            </div>

            <Link href={`/blog/${blog.postSlug}`}>
              <h5 className="mb-1 mt-3 title-blog">{blog.title}</h5>
            </Link>

            <p className="mb-2 title-description">{blog.metaDescription}</p>

            <div className="d-flex align-items-center gap-3 small flex-wrap">
              <span className="d-flex align-items-center gap-1 blog-date">
                <Calendar size={14} className="me-1" />
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>

              {blog.BlogCategory && (
                <span className="badge bg-light text-dark border rounded-pill px-2">
                  {blog.BlogCategory.name}
                </span>
              )}

              <span className="d-flex align-items-center gap-1">
                <MessageCircle size={14} />
                {blog.Comment?.length || 0}
              </span>
            </div>
          </div>
        </div>
      ))}

      
      {totalPages > 1 && (
        <div className="pagination-container">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageClick(i + 1)}
              className={`pagination-btn ${
                currentPage === i + 1 ? "pagination-active-btn" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`pagination-btn ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default NewBlogItem;
