"use client";

import { useState, useEffect } from "react";
import { CalendarDays, MessageCircleMore, CircleCheckBig } from "lucide-react";
import Image from "next/image";
import Buttons from "../../Banner/Buttons";
import { createComment } from "../../../app/actions/blog/blog.actions";
import { toast } from "sonner";
import { useActionState } from "react";

interface BlogContentProps {
  post: {
    id: string;
    title: string;
    shortDesc: string;
    bannerImage: string;
    content: { blocks: any[] };
    createdAt: Date;
    author: {
      id: string;
      name: string;
      email: string;
      profileImage?: string;
    };
    BlogCategory: {
      id: string;
      name: string;
    };
    Comment: {
      id: string;
      name: string;
      email: string;
      content: string;
      createdAt: string;
      profileImage?: string;
    }[];
    metaDescription?: string;
  };
}

const BlogContent = ({ post }: BlogContentProps) => {
  const initialState = { success: false, msg: "" };
  const [state, fromAction, isLoading] = useActionState(
    createComment,
    initialState
  );

  const [visibleComments, setVisibleComments] = useState(5);

  useEffect(() => {
    if (state.msg) {
      if (state.success) {
        toast.success(state.msg);
      } else {
        toast.error(state.msg);
      }
    }
  }, [state]);

  const loadMoreComments = () => {
    setVisibleComments((prev) => prev + 5);
  };

  const renderItem = (item: any) => {
    if (typeof item === "string") return item;
    if (typeof item === "object" && item?.text) return item.text;
    if (typeof item === "object" && item?.content) return item.content;
    return JSON.stringify(item);
  };

  const renderBlock = (block: any, index: number) => {
    if (!block?.type || !block?.data) return null;

    switch (block.type) {
      case "header": {
        const HeaderTag: any = `h${block.data.level || 2}`;
        return (
          <HeaderTag key={index} id={block?.id} className="blog-header">
            {block.data.text}
          </HeaderTag>
        );
      }

      case "paragraph": {
        const text = block.data.text;
        if (!text || text.replace(/<br\s*\/?>/gi, "").trim() === "") return null;

        return (
          <p
            key={index}
            className="blog-paragraph"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        );
      }

      case "list": {
        const items = block.data?.items || [];
        if (block.data.style === "ordered") {
          return (
            <ol key={index} className="blog-ol">
              {items.map((item: any, i: number) => (
                <li key={i}>{renderItem(item)}</li>
              ))}
            </ol>
          );
        } else if (block.data.style === "checklist") {
          return (
            <ul key={index} className="blog-checklist">
              {items.map((item: any, i: number) => (
                <li key={i} className="checklist-item">
                  <input
                    type="checkbox"
                    defaultChecked={item?.meta?.checked ?? false}
                    className="check-black"
                  />
                  <span>{renderItem(item)}</span>
                </li>
              ))}
            </ul>
          );
        } else {
          return (
            <ul key={index} className="blog-ul">
              {items.map((item: any, i: number) => (
                <li key={i} className="blog-ul-item">
                  <CircleCheckBig size={16} /> {renderItem(item)}
                </li>
              ))}
            </ul>
          );
        }
      }

      case "image":
        return block.data?.file?.url ? (
          <div key={index} className="blog-image">
            <img
              src={block.data.file.url}
              alt={block.data.caption || "Blog Image"}
            />
          </div>
        ) : null;

      case "quote":
        return (
          <blockquote key={index} className="blog-quote">
            <div dangerouslySetInnerHTML={{ __html: block.data.text }} />
            {block.data.caption && (
              <cite className="blog-cite">— {block.data.caption}</cite>
            )}
          </blockquote>
        );

      case "code":
        return (
          <pre key={index} className="blog-code">
            {block.data.code}
          </pre>
        );

      case "table":
        return (
          <div key={index} className="blog-table-container">
            <table className="blog-table">
              <tbody>
                {block.data?.content?.map((row: any[], rIdx: number) => (
                  <tr key={rIdx}>
                    {row.map((cell: any, cIdx: number) => (
                      <td
                        key={cIdx}
                        dangerouslySetInnerHTML={{ __html: cell }}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return null;
    }
  };

  const getDaysAgo = (date: string) => {
    const diffMs = new Date().getTime() - new Date(date).getTime();
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (days === 0) return "Today";
    if (days === 1) return "1 day ago";
    if (days < 7) return `${days} days ago`;
    const weeks = Math.floor(days / 7);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  };

  return (
    <div className="blogContentWrapper">
      <div className="blogContent">
        <span className="blog-Category">{post.BlogCategory?.name}</span>
        <h1 className="blog-title">{post.title}</h1>
        <p className="blog-explain-text-1 white">{post.metaDescription}</p>

        <div className="blog-author-meta">
          <div className="blog-author-meta-gap">
            <Image
              src={post?.author?.profileImage || "/images/shahin.png"}
              width={36}
              height={36}
              alt="Author"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <span className="text-white">{post.author?.name}</span>
          </div>
          <span className="blog-author-meta-gap text-light ms-1">
            <span className="text-white fw-semibold">Last updated:</span>{" "}
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        <div className="blog-explain blog-image-thumbail">
          <img src={post.bannerImage} alt={post.title} />
        </div>

        <div className="blog-body">
          {post.content?.blocks?.map((block, i) => renderBlock(block, i))}
        </div>

        <div className="app-design">
          <h6>Mobile App Design</h6>
          <p className="gray">
            We Create Unique Digital Experiences For Global Brands By
            Integrating AI, Innovative Design, And Advanced Technology.
          </p>
          <ul className="white">
            <li>
              <CircleCheckBig /> Travel App
            </li>
            <li>
              <CircleCheckBig /> Ecommerce App
            </li>
            <li>
              <CircleCheckBig /> Medical App and more.
            </li>
          </ul>
          <Buttons btnText="Get a Service" />
        </div>

        <hr />

      
        <div className="blog-comment-main">
          <div className="row gx-4 gy-3 align-items-center">
            <div className="col-12 col-md-auto text-center text-md-start">
              <Image
                src={post?.author?.profileImage || "/images/shahin.png"}
                height={150}
                width={150}
                alt="Author"
                className="rounded-circle"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="col-12 col-md comment-author-info text-center text-md-start">
              <span className="written-by">Written by</span>
              <h5 className="white">{post.author?.name}</h5>
              <p className="writer-post white">{post.author?.email}</p>
            </div>

            <div className="">
              <div className="blog-comment">
                <h4 className="reply-title">Leave a Reply</h4>
                <form action={fromAction}>
                  <input
                    type="text"
                    defaultValue={post.id}
                    name="postId"
                    hidden
                  />
                  <div className="row">
                    <div className="form-group col-12 col-md-6 mb-3">
                      <label>
                        Full Name<span>*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="name"
                        placeholder="e.g. Adam Smith"
                      />
                    </div>
                    <div className="form-group col-12 col-md-6 mb-3">
                      <label>
                        Email Address<span>*</span>
                      </label>
                      <input
                        type="email"
                        id="emailAddress"
                        name="email"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Write a comment</label>
                    <textarea
                      id="comment"
                      name="content"
                      placeholder="Tell us more about your thought"
                      rows={1}
                    ></textarea>
                  </div>

                  <div className="submit-btn">
                    <button
                      type="submit"
                      className="theme_btn-3 d-inline-flex align-items-center justify-content-center px-4 py-2"
                      disabled={isLoading}
                      style={{
                        opacity: isLoading ? 0.7 : 1,
                        cursor: isLoading ? "not-allowed" : "pointer",
                      }}
                    >
                      {isLoading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Submitting...
                        </>
                      ) : (
                        "Submit your Comment"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

           
            <div className="">
              {post?.Comment && post.Comment.length > 0 && (
                <div className="comments-list mt-2 mt-md-5">
                  <h4 className="reply-title mb-4">
                    {post.Comment.length}{" "}
                    {post.Comment.length > 1 ? "Comments" : "Comment"}
                  </h4>

                  {[...post.Comment]
                    .reverse()
                    .slice(0, visibleComments)
                    .map((comment) => (
                      <div
                        key={comment.id}
                        className="comment-item d-flex gap-3 align-items-start mb-4"
                      >
                        <div className="comment-avatar rounded-circle bg-secondary d-flex justify-content-center align-items-center text-white fw-bold">
                          {comment.profileImage ? (
                            <img
                              src={comment.profileImage}
                              alt={comment.name}
                              className="rounded-circle"
                            />
                          ) : (
                            comment.name.charAt(0).toUpperCase()
                          )}
                        </div>

                        <div className="comment-body">
                          <h6 className="mb-1 text-white">{comment.name}</h6>
                          <small className="d-block mb-1 text-white">
                            {getDaysAgo(comment.createdAt)}
                          </small>
                          <p className="gray mb-0">{comment.content}</p>
                        </div>
                      </div>
                    ))}

                  
                  {visibleComments < post.Comment.length && (
                    <div className="text-center mt-4">
                      <button
                        onClick={loadMoreComments}
                        className="theme_btn-3 d-inline-flex align-items-center justify-content-center px-4 py-2"
                      >
                        Load More Comments
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="promo-row">
        <span>Kickstart Your Project With Plutohub 🚀 </span>
        <Buttons className="theme_btn2" btnText="Get Quote" />
      </div>
    </div>
  );
};

export default BlogContent;
