"use client";
import React, { useState } from "react";
import Item from "../../BlogPage/Blogs/Item";

export interface BlogType {
  id: string;
  title: string;
  postSlug: string;
  bannerAltText: string;
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

  const relatedItems: BlogType[] = posts.filter(
    (blog) =>
      blog.BlogCategory.name === currentCategory && blog.postSlug !== currentId
  );

  const [showAll, setShowAll] = useState(false);

 
  const displayedItems = showAll ? relatedItems : relatedItems.slice(0, 6);

  return (
    <div className="related-blogs">
      <h4 className="mb-3">Related Blogs</h4>

      {relatedItems.length === 0 ? (
        <p>No related blogs found.</p>
      ) : (
        <>
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 blog-card-main">
            {displayedItems.map((blog: BlogType) => (
              <div key={blog.id} className="col">
                <Item
                  item={{
                    id: blog.id,
                    postSlug: blog.postSlug,
                    bannerAltText: blog.bannerAltText,
                    title: blog.title,
                    category: blog.BlogCategory.name,
                    image: blog.bannerImage,
                  }}
                />
              </div>
            ))}
          </div>

         
          {!showAll && relatedItems.length > 6 && (
            <div className="text-center mt-5">
              <button
                className="theme_btn-3 d-inline-flex align-items-center justify-content-center px-4 py-2 "
                onClick={() => setShowAll(true)}
              >
                View All
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RelatedBlog;
