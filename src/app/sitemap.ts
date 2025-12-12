export const dynamic = "force-dynamic";
import { MetadataRoute } from "next";
import { postList } from "./actions/blog/blog.actions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogsResponse = await postList();
  const post = blogsResponse?.post?.postsWithContentObj || [];
  const blogUrls = Array.isArray(post)
    ? post.map((blog: any) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blog.postSlug}`,
        lastModified: new Date(blog.updatedAt || blog.createdAt),
      }))
    : [];
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/web-development`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/ui-ux`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/logo-and-branding`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/locations/ui-ux-design-lisbon`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}
