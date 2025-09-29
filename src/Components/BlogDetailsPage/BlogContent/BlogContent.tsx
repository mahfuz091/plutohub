"use client";

import { CalendarDays, MessageCircleMore, CircleCheckBig } from "lucide-react";
import Image from "next/image";
import { Tab } from "react-bootstrap";
import Buttons from "../../Banner/Buttons";

import { useActionState, useEffect } from "react";
import { createComment } from "../../../app/actions/blog/blog.actions";
import { toast } from "sonner";

interface BlogContentProps {
  post: {
    id: string;
    title: string;
    shortDesc: string;
    bannerImage: string;
    content: { blocks: any[] };
    createdAt: Date;
    author: { id: string; name: string; email: string; profileImage: string };
    BlogCategory: { id: string; name: string };
    Comment: { id: string }[];
  };
}

const BlogContent = ({ post }: BlogContentProps) => {
  const initialState = { success: false, msg: "" };

  const [state, fromAction, isLoading] = useActionState(
    createComment,
    initialState
  );

  useEffect(() => {
    if (state.msg) {
      if (state.success) {
        toast.success(state?.msg);
      } else {
        toast.error(state?.msg);
      }
    }
  }, [state]);
  console.log(state);

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
          <HeaderTag key={index} id={block?.id} className='blog-header '>
            {block.data.text}
          </HeaderTag>
        );
      }

      case "paragraph":
        return (
          <p
            key={index}
            className='blog-paragraph'
            dangerouslySetInnerHTML={{ __html: block.data.text }}
          />
        );

      case "list": {
        const items = block.data?.items || [];

        if (block.data.style === "ordered") {
          return (
            <ol key={index} className='blog-ol'>
              {items.map((item: any, i: number) => (
                <li key={i}>{renderItem(item)}</li>
              ))}
            </ol>
          );
        } else if (block.data.style === "checklist") {
          return (
            <ul key={index} className='blog-checklist'>
              {items.map((item: any, i: number) => (
                <li key={i} className='checklist-item'>
                  <input
                    type='checkbox'
                    defaultChecked={item?.meta?.checked ?? false}
                    className='check-black'
                  />
                  <span>{renderItem(item)}</span>
                </li>
              ))}
            </ul>
          );
        } else {
          return (
            <ul key={index} className='blog-ul'>
              {items.map((item: any, i: number) => (
                <li key={i} className='blog-ul-item'>
                  <CircleCheckBig size={16} /> {renderItem(item)}
                </li>
              ))}
            </ul>
          );
        }
      }

      case "image":
        return block.data?.file?.url ? (
          <div key={index} className='blog-image'>
            <img
              src={block.data.file.url}
              alt={block.data.caption || "Blog Image"}
            />
            {block.data.caption && (
              <p className='blog-caption'>{block.data.caption}</p>
            )}
          </div>
        ) : null;

      case "quote":
        return (
          <blockquote key={index} className='blog-quote'>
            <div dangerouslySetInnerHTML={{ __html: block.data.text }} />
            {block.data.caption && (
              <cite className='blog-cite'>— {block.data.caption}</cite>
            )}
          </blockquote>
        );

      case "code":
        return (
          <pre key={index} className='blog-code'>
            {block.data.code}
          </pre>
        );

      case "table":
        return (
          <div key={index} className='blog-table-container'>
            <table className='blog-table'>
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
  // console.log(post.Comment);

  return (
    <div className='blogContentWrapper'>
      <div className='blogContent'>
        <span className='blog-Category'>{post.BlogCategory?.name}</span>

        <h2 className='blog-title'>{post.title}</h2>

        <div className='blog-author-meta'>
          <div className='blog-author-meta-gap'>
            <Image
              src={post?.author?.profileImage}
              width={36}
              height={36}
              alt='Author'
              className=' rounded-circle'
              style={{ objectFit: "cover" }}
            />
            <span>{post.author?.name}</span>
          </div>
          <span className='blog-author-meta-gap'>
            <CalendarDays />
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
          <span className='blog-author-meta-gap'>
            <MessageCircleMore />

            {post.Comment && post.Comment.length
              ? post.Comment.length
              : "No Comments"}
          </span>
        </div>

        <div className='blog-explain blog-image'>
          <img src={post.bannerImage} alt={post.title} />
          <p className='blog-explain-text'>{post.shortDesc}</p>
        </div>

        <div className='blog-body'>
          {post.content?.blocks?.map((block, i) => renderBlock(block, i))}
        </div>

        <div className='app-design'>
          <h6>Mobile App Design</h6>
          <p>
            We Create Unique Digital Experiences For Global Brands By
            Integrating AI, Innovative Design, And advanced Technology.
          </p>
          <ul>
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
          <Buttons btnText='Get a Service' />
        </div>

        <hr />

        <div className='blog-comment-main'>
          <div className='row gx-4 gy-3 align-items-center'>
            <div className='col-12 col-md-auto text-center text-md-start'>
              <Image
                src={post?.author?.profileImage}
                height={150}
                width={150}
                alt='Author'
                className=' rounded-circle'
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className='col-12 col-md comment-author-info text-center text-md-start'>
              <span className='written-by'>Written by</span>
              <h5>{post.author?.name}</h5>
              <p className='writer-post'>{post.author?.email}</p>
            </div>

            <div className='blog-comment'>
              <h4 className='reply-title'>Leave a Reply</h4>
              <form action={fromAction}>
                <input
                  type='text'
                  defaultValue={post.id}
                  name='postId'
                  hidden
                />
                <div className='form-group'>
                  <label>
                    Full Name<span>*</span>
                  </label>
                  <input
                    type='text'
                    id='fullName'
                    name='name'
                    placeholder='e.g. Adam Smith'
                  />
                </div>
                <div className='form-group'>
                  <label>
                    Email Address<span>*</span>
                  </label>
                  <input
                    type='email'
                    id='emailAddress'
                    name='email'
                    placeholder='you@example.com'
                  />
                </div>
                <div className='form-group'>
                  <label>Write a comment</label>
                  <textarea
                    id='comment'
                    name='content'
                    placeholder='Tell us more about your thought'
                    rows={3}
                  ></textarea>
                </div>

                <div className='submit-btn'>
                  <button type='submit' className='theme_btn'>
                    Submit your Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className='promo-row'>
        <span>Kickstart Your Project With Plutohub 🚀 </span>
        <Buttons className='theme_btn2' btnText='Get Quote' />
      </div>
    </div>
  );
};

export default BlogContent;
