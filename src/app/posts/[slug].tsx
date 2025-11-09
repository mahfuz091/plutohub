import BlogMeta from "@/Components/BlogMeta";


const BlogPostPage = ({ post }) => {
  return (
    <>
      <BlogMeta
        title={post.title}
        description={post.description}
        image={post.thumbnail} // বা post.featuredImage
        postSlug={post.slug}
      />
      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </>
  );
};

export default BlogPostPage;
