"use client";

import BlogContent from "./BlogContent/BlogContent";
import TableOfContents from "./TableOfContents/TableOfContents";
import RightSidebar from "./RightSidebar/RightSidebar";
import RelatedBlog from "./RelatedBlog/RelatedBlog";

interface BlogDetailsPageProps {
  post: {
    id: string;
    title: string;
    postSlug: string;
    shortDesc: string;
    bannerImage: string;
    content: any;
    createdAt: Date;
    author: { id: string; name: string; email: string; profileImage: string };
    BlogCategory: { id: string; name: string };
    Comment: { id: string }[];
  };
  blogCategories: {
    id: string;
    name: string;
  }[];
  allBlogs: {
    id: string;
    title: string;
    shortDesc: string;
    bannerImage: string;
    content: any;
    BlogCategory: { id: string; name: string };
  }[];
}

const BlogDetailsPage = ({
  post,
  blogCategories,
  allBlogs,
}: BlogDetailsPageProps) => {
  return (
    <div className='container py-4 blog-details'>
      <div className='row'>
        <div className='col-xl-3 mb-4'>
          <div className='sticky-sidebar'>
            <TableOfContents
              blocks={post.content?.blocks || []}
              postSlug={post.postSlug}
            />
          </div>
        </div>

        <div className='col-xl-6 mb-4'>
          <BlogContent post={post} />
        </div>

        <div className='col-xl-3'>
          <div className='sticky-sidebar'>
            <RightSidebar categories={blogCategories} />
          </div>
        </div>
      </div>

      <RelatedBlog
        currentCategory={post.BlogCategory?.name}
        currentId={post.postSlug}
        allBlogs={allBlogs}
      />
    </div>
  );
};

export default BlogDetailsPage;
