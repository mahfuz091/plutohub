"use client";

import React from "react";
import Image from "next/image";
import {
  Bookmark,
  MoreHorizontal,
  Star,
  Eye,
  MessageCircle,
  Calendar,
} from "lucide-react";
import Link from "next/link";

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
    thumbnail:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500",
  },
  {
    authorName: "Saurav Mandal",
    authorAvatar: "https://i.pravatar.cc/32?img=1",
    title: "Do Hard Things if You Want an Easy Life",
    subtitle: "The one skill that changes everything",
    date: "Jun 14",
    views: 22000,
    comments: 861,
    thumbnail:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500",
  },

  {
    authorName: "Aisha Rahman",
    authorAvatar: "https://i.pravatar.cc/32?img=3",
    title: "5 Habits That Will Change Your Life Forever",
    subtitle: "Tiny changes, big results.",
    date: "Jul 8",
    views: 15300,
    comments: 674,
    thumbnail:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500",
  },
  {
    authorName: "David Chen",
    authorAvatar: "https://i.pravatar.cc/32?img=4",
    title: "Why Developers Should Write More, Not Less",
    subtitle: "Writing helps you think clearly — here’s why.",
    date: "Aug 3",
    views: 9100,
    comments: 432,
    thumbnail:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500",
  },
  {
    authorName: "David Chen",
    authorAvatar: "https://i.pravatar.cc/32?img=4",
    title: "Why Developers Should Write More, Not Less",
    subtitle: "Writing helps you think clearly — here’s why.",
    date: "Aug 3",
    views: 9100,
    comments: 432,
    thumbnail:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500",
  },
  {
    authorName: "David Chen",
    authorAvatar: "https://i.pravatar.cc/32?img=4",
    title: "Why Developers Should Write More, Not Less",
    subtitle: "Writing helps you think clearly — here’s why.",
    date: "Aug 3",
    views: 9100,
    comments: 432,
    thumbnail:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500",
  },
];

const NewBlogItem: React.FC = () => {
  return (
    <div className=" ">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center blog-card-new gap-3 mb-4"
        >
          
          <Link
            href="/blog/11-modern-responsive-web-page-design-tips-for-2025#_hySmvQ39c"
            key={index}
            className="order-1 order-md-2 "
          >
            <div className="  blog-thumbnail">
              <img
                src={blog.thumbnail}
                alt={blog.title}             
                className="img-fluid rounded mb-2 thumbnail-img "
              />
            </div>
          </Link>

         
          <div className="flex-grow-1 me-3 order-2 order-md-1">
            <div className="d-flex align-items-center mb-2">
              <Image
                src={blog.authorAvatar}
                alt={blog.authorName}
                width={30}
                height={30}
                className="rounded-circle me-3"
              />
              <span className="author_name">{blog.authorName}</span>
            </div>

            <Link
              href="/blog/11-modern-responsive-web-page-design-tips-for-2025#_hySmvQ39c"
              key={index}
            >
              <h5 className="mb-1 mt-3 title-blog">{blog.title}</h5>
            </Link>

            <p className="mb-2 title-description">{blog.subtitle}</p>

            <div className="d-flex align-items-center gap-3 small">
              <span className="d-flex align-items-center gap-1 blog-date">
                <Calendar size={14} className="me-1" /> {blog.date}
              </span>

              <span className="d-flex align-items-center gap-1">
                <MessageCircle size={14} /> {blog.comments}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewBlogItem;
