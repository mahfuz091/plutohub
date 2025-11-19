"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Star } from "lucide-react";
import Link from "next/link";

interface BlogItem {
  authorName: string;
  authorAvatar: string;
  title: string;
  date: string;
  thumbnail: string;
}

interface Author {
  name: string;
  profileImage: string;
}

interface Blog {
  id: string;
  title: string;
  postSlug: string;
  bannerImage: string;
  bannerAltText: string;
  createdAt: string | Date;
  author?: Author;
}

interface RecentBlogProps {
  recentBlogs: Blog[];
}

const RecentBlog: React.FC<RecentBlogProps> = ({ recentBlogs }) => {
  const latestBlogs = [...recentBlogs]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 4);
  return (
    <div className=" ">
      <h5 className="mb-4 mb-md-4 white mt-4 mt-md-0 ">Recent Blogs</h5>
      <div className=" ">
        {latestBlogs.map((blog) => (
          <div key={blog.id} className="   recent-blog-card-new  mb-3">
            <div className="flex-grow-1 me-3 mt-4">
              <div className="d-flex align-items-center mb-1 mb-md-2">
                <Image
                  src={blog.author.profileImage || "/images/user-circle.png"}
                  alt={blog.author.name}
                  width={30}
                  height={30}
                  className="rounded-circle me-2 bg-white"
                />
                <span className="author_name ">
                  {" "}
                  {blog.author?.name || "Unknown Author"}
                </span>
              </div>

              <Link href={`/blog/${blog.postSlug}`}>
                <h5 className="my-1   title-blog">{blog.title}</h5>
              </Link>

              <div className="d-flex align-items-center gap-3  small mt-2 mt-md-0">
                <span className="d-flex align-items-center gap-1 blog-date">
                  <Calendar size={14} className="me-1" />
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
