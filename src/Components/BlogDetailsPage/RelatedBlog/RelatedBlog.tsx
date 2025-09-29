"use client";
import React from "react";
import Item from "../../BlogPage/Blogs/Item";

export interface BlogType {
  id: string;
  title: string;
  postSlug: string;
  shortDesc: string;
  bannerImage: string;
  blogCategoryId: string;
  BlogCategory: { id: string; name: string };
}

export interface AllBlogsType {
  success: boolean;
  msg: string;
  postsWithContentObj: BlogType[];
}

interface RelatedBlogProps {
  currentCategory: string;
  currentId: string;
  allBlogs: any;
}

const RelatedBlog: React.FC<RelatedBlogProps> = ({
  currentCategory,
  currentId,
  allBlogs,
}) => {
  const posts: BlogType[] = allBlogs.post.postsWithContentObj || [];
  console.log(currentCategory, currentId, allBlogs, posts, "related");

  const relatedItems: BlogType[] = posts.filter(
    (blog) =>
      blog.BlogCategory.name === currentCategory && blog.postSlug !== currentId
  );

  return (
    <div className='related-blogs'>
      <h4 className='mb-3'>Related Blogs</h4>

      {relatedItems.length === 0 ? (
        <p>No related blogs found.</p>
      ) : (
        <div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 blog-card-main'>
          {relatedItems.map((blog: BlogType) => (
            <div key={blog.id} className='col'>
              <Item
                item={{
                  id: blog.id,
                  postSlug: blog.postSlug,
                  title: blog.title,
                  category: blog.BlogCategory.name,
                  image: blog.bannerImage,
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedBlog;
