"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

interface BlogItem {
  authorName: string;
  authorAvatar: string;
  title: string;
  date: string;
  thumbnail: string;
}

const blogs: BlogItem[] = [
  {
    authorName: "Saurav Mandal",
    authorAvatar: "https://i.pravatar.cc/32?img=1",
    title: "Do Hard Things if You Want an Easy Life",
    date: "Jun 14",
    thumbnail:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500",
  },
  {
    authorName: "Aisha Rahman",
    authorAvatar: "https://i.pravatar.cc/32?img=3",
    title: "5 Habits That Will Change Your Life Forever",
    date: "Jul 8",
    thumbnail:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500",
  },
  {
    authorName: "David Chen",
    authorAvatar: "https://i.pravatar.cc/32?img=4",
    title: "Why Developers Should Write More, Not Less",
    date: "Aug 3",
    thumbnail:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500",
  },
  {
    authorName: "Nadia Hasan",
    authorAvatar: "https://i.pravatar.cc/32?img=5",
    title:
      "Minimalism Isn’t About Having Less, It’s About Making Room for More",
    date: "Sep 1",
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500",
  },
];

const RecentBlog = () => {
  return (
    <div className=" ">
      <h5 className="mb-4 white">Staff Picks</h5>
      <div className=" ">
        {blogs.map((blog, index) => (
          <div key={index} className="   recent-blog-card-new  mb-3">
            <div className="flex-grow-1 me-3">
              <div className="d-flex align-items-center mb-2">
                <Image
                  src={blog.authorAvatar}
                  alt={blog.authorName}
                  width={30}
                  height={30}
                  className="rounded-circle me-2"
                />
                <span className="author_name ">{blog.authorName}</span>
              </div>

              <Link href="/blog/11-modern-responsive-web-page-design-tips-for-2025#_hySmvQ39c"><h5 className="mb-1 mt-3 title-blog">{blog.title}</h5></Link>

              <div className="d-flex align-items-center gap-3  small">
                <span className="d-flex align-items-center gap-1">
                  <Star size={14} /> {blog.date}
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
