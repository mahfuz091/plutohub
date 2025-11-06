"use client";

import React from "react";
import Image from "next/image";
import {
  Bookmark,
  MoreHorizontal,
  Star,
  Eye,
  MessageCircle,
} from "lucide-react";

interface BlogItem {
  authorName: string;
  authorAvatar: string;
  title: string;
  subtitle: string;
  date: string;
  views: number;
  comments: number;
  thumbnail: string;
}

const blogs: BlogItem[] = [
  {
    authorName: "Saurav Mandal",
    authorAvatar: "https://i.pravatar.cc/32?img=1",
    title: "Do Hard Things if You Want an Easy Life",
    subtitle: "The one skill that changes everything",
    date: "Jun 14",
    views: 22000,
    comments: 861,
    thumbnail: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500",
  },
  
  {
    authorName: "Aisha Rahman",
    authorAvatar: "https://i.pravatar.cc/32?img=3",
    title: "5 Habits That Will Change Your Life Forever",
    subtitle: "Tiny changes, big results.",
    date: "Jul 8",
    views: 15300,
    comments: 674,
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500",
  },
  {
    authorName: "David Chen",
    authorAvatar: "https://i.pravatar.cc/32?img=4",
    title: "Why Developers Should Write More, Not Less",
    subtitle: "Writing helps you think clearly — here’s why.",
    date: "Aug 3",
    views: 9100,
    comments: 432,
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500",
  },
  {
    authorName: "Nadia Hasan",
    authorAvatar: "https://i.pravatar.cc/32?img=5",
    title: "Minimalism Isn’t About Having Less, It’s About Making Room for More",
    subtitle: "Learn how to live intentionally and create space for what matters.",
    date: "Sep 1",
    views: 12500,
    comments: 589,
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500",
  },
];

const NewBlogItem: React.FC = () => {
  return (
    <div className="container ">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="d-flex justify-content-between align-items-center p-3   blog-card-new mb-3"
        >
          {/* Left Content */}
          <div className="flex-grow-1 me-3">
            {/* Author Info */}
            <div className="d-flex align-items-center mb-2">
              <Image
                src={blog.authorAvatar}
                alt={blog.authorName}
                width={50}
                height={50}
                className="rounded-circle me-2"
              />
              <span className="author_name ">{blog.authorName}</span>
            </div>

            {/* Title + Subtitle */}
            <h5 className="mb-1 mt-3 title-blog">{blog.title}</h5>
            <p className=" mb-2 title-description">{blog.subtitle}</p>

            {/* Metadata */}
            <div className="d-flex align-items-center gap-3  small">
              <span className="d-flex align-items-center gap-1">
                <Star size={14} /> {blog.date}
              </span>
             
              <span className="d-flex align-items-center gap-1">
                <MessageCircle size={14} /> {blog.comments}
              </span>
            </div>
          </div>

          {/* Right Thumbnail + Icons */}
          <div className="d-flex flex-column align-items-end">
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              width={220}
              height={120}
              className="rounded mb-2"
            />
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewBlogItem;
