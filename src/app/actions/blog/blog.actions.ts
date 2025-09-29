"use server";

import { Comment, Post } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

/** ---------- Helpers ---------- */
function getString(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : "";
}

/**
 * Accepts `content` as:
 * 1) multiple inputs with the same name: formData.getAll("content")
 * 2) a single JSON string: '["para1","para2"]'
 * 3) a single newline-separated string
 */

/** ---------- Types ---------- */
type PostWithRelations = Post & {
  author: { id: string; name: string; email: string };
  BlogCategory: { id: string; name: string };
  content?: any; // Add content property to match returned object
};

type ActionResult<T> = { success: boolean; msg: string; post?: T; data?: T };

/** ---------- List Posts ---------- */
export const postList = async (): Promise<
  ActionResult<{
    postsWithContentObj: (PostWithRelations & { content: any })[];
  }>
> => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        author: {
          select: { id: true, name: true, email: true, profileImage: true },
        },
        BlogCategory: { select: { id: true, name: true } },
        Comment: {
          orderBy: { createdAt: "asc" },
          select: {
            id: true,
            name: true,
            email: true,
            content: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });

    // Convert content string to object
    const postsWithContentObj = posts.map((post) => ({
      ...post,
      content:
        typeof post.content === "string"
          ? JSON.parse(post.content)
          : post.content ?? null,
    }));

    return {
      success: true,
      msg: "Posts fetched successfully",
      post: { postsWithContentObj },
    };
  } catch (err) {
    console.error("postList error:", err);
    return { success: false, msg: "Failed to fetch posts" };
  }
};

export const getPostById = async (
  postSlug: string
): Promise<ActionResult<PostWithRelations & { content: any }>> => {
  try {
    const post = await prisma.post.findUnique({
      where: { postSlug },
      include: {
        author: {
          select: { id: true, name: true, email: true, profileImage: true },
        },
        BlogCategory: { select: { id: true, name: true } },
        Comment: {
          orderBy: { createdAt: "asc" },
          select: {
            id: true,
            name: true,
            email: true,
            content: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });

    if (!post) return { success: false, msg: "Post not found" };

    // Parse content safely
    let parsedContent: any = {};
    if (post.content) {
      parsedContent =
        typeof post.content === "string"
          ? JSON.parse(post.content)
          : post.content;
    }

    return {
      success: true,
      msg: "Post fetched successfully",
      post: {
        ...(post as PostWithRelations), // cast to satisfy TS
        content: parsedContent,
      },
    };
  } catch (err) {
    console.error("getPostById error:", err);
    return { success: false, msg: "Failed to fetch post" };
  }
};

type CommentWithRelations = Comment & {
  post?: { id: string; title: string };
};

/** ---------- Create Comment ---------- */

export const createComment = async (
  _prevState,
  formData: FormData
): Promise<ActionResult<CommentWithRelations>> => {
  try {
    // Extract values from FormData
    const postId = formData.get("postId")?.toString() || "";
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const content = formData.get("content")?.toString() || "";

    if (!postId || !name || !email || !content) {
      return { success: false, msg: "All fields are required" };
    }

    const postExists = await prisma.post.findUnique({ where: { id: postId } });
    if (!postExists) return { success: false, msg: "Post does not exist" };

    const comment = await prisma.comment.create({
      data: { postId, name, email, content },
      include: { post: { select: { id: true, title: true } } },
    });

    revalidatePath("/blog");

    return {
      success: true,
      msg: "Comment created successfully",
      data: comment,
    };
  } catch (err) {
    console.error("createComment error:", err);
    return { success: false, msg: "Failed to create comment" };
  }
};
