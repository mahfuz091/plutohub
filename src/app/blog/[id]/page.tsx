import { blogCategoryList } from "@/app/actions/blog/blogCategory";
import { getPostById, postList } from "@/app/actions/blog/blog.actions";
import BlogDetailsPage from "@/Components/BlogDetailsPage/BlogDetailsPage";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const result = await getPostById(id);

  if (!result.success || !result.post) {
    return {
      title: "Blog not found",
      description: "The requested blog post could not be found.",
    };
  }

  const post = result.post;
  const ogImage = post.bannerImage || "";

  return {
    title: post.title || "Blog Post",
    description: post.shortDesc || "",
    openGraph: {
      title: post.title,
      description: post.shortDesc || "",
      images: post.bannerImage ? [{ url: ogImage, alt: post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.shortDesc || "",
      images: post.bannerImage ? [{ url: ogImage, alt: post.title }] : [],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const result = await getPostById(id);
  const blogCategoriesResponse: any = await blogCategoryList();
  const allBlogsResult: any = await postList();

  const categoriesArray = Array.isArray(blogCategoriesResponse.blogCategory)
    ? blogCategoriesResponse.blogCategory
    : [];

  if (!result.success || !result.post) {
    return (
      <div className='container py-5 text-center'>
        <h2>Blog not found</h2>
      </div>
    );
  }

  return (
    <BlogDetailsPage
      post={result.post as any}
      blogCategories={categoriesArray}
      allBlogs={allBlogsResult || []}
    />
  );
}
