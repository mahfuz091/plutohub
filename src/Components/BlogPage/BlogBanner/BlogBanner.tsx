import Image from "next/image";
import React from "react";
type Blog = {
  id: string;
  title: string;
  shortDesc: string;
  bannerImage: string;
  content: any;
  authorId: string;
  author: { id: string; email: string; profileImage: string; name: string };
  createdAt: Date;
  updatedAt: Date;
  blogCategoryId: string;
};
type BlogsProps = {
  blogs: Blog[];
  categories: any;
};
const BlogBanner: React.FC<BlogsProps> = ({ blogs, categories }) => {
  const firstBlog = blogs[0];
  return (
    <section className='blog-banner'>
      <div className='container'>
        <div className='blog-banner__img'>
          <Image
            src={firstBlog?.bannerImage}
            alt='Blog Banner'
            width={1216}
            height={597}
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
          <div className='blog-banner__content'>
            <span className='blog-banner__content--category'>
              {categories.find((c) => c.id === firstBlog?.blogCategoryId)
                ?.name || "Uncategorized"}
            </span>
            <h1 className='blog-banner__content--title'>{firstBlog.title}</h1>
            <div className='blog-banner__content--author'>
              <Image
                src={
                  firstBlog?.author?.profileImage
                    ? firstBlog?.author?.profileImage
                    : "/images/author-avatar.svg"
                }
                width={36}
                height={36}
                alt='Author'
                className='rounded-circle'
                style={{ objectFit: "cover" }}
              />
              <span className='blog-banner__content--author-name'>
                {firstBlog?.author?.name}
              </span>
              <span className='blog-banner__content--date'>
                {new Date(firstBlog?.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;
