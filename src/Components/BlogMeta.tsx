import Head from "next/head";

interface BlogMetaProps {
  title: string;
  description: string;
  image: string;
  postSlug: string;
}

const BlogMeta = ({ title, description, image, postSlug }: BlogMetaProps) => {
  const postUrl = typeof window !== "undefined"
    ? window.location.href
    : `https://example.com/posts/${postSlug}`;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={postUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default BlogMeta;
