"use client";

import { useState, useRef, useEffect } from "react";
import {
  CircleMinus,
  CirclePlus,
  CircleCheckBig,
} from "lucide-react";
import ShareButtons from "./SocialShare";

interface TOCProps {
  blocks: any[];
  postSlug: string;
}

const TableOfContents = ({ blocks, postSlug }: TOCProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef<HTMLUListElement>(null);
  const [height, setHeight] = useState("0px");

  // extract all headers (level 2)
  const headers = blocks
    .map((block, index) => ({ ...block, index }))
    .filter((block) => block.type === "header" && block.data.level === 2);

  // smooth collapse animation
  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen, headers.length]);

  return (
    <div className="table-of-content-main text-white">
      {/* Table of Contents */}
      <div className="table-of-content mb-6">
        <h5
          className="d-flex justify-content-between align-items-center toc-header"
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: "pointer" }}
        >
          Table of Contents
          <span className="toc-icon">
            {isOpen ? <CircleMinus /> : <CirclePlus />}
          </span>
        </h5>

        {/* Collapsible List */}
        <ul
          ref={contentRef}
          className="toc-list mt-2"
          style={{
            height,
            overflow: "hidden",
            transition: "height 0.4s ease",
          }}
        >
          {headers.map((header) => (
            <li key={header.index} className="mb-1">
              <a
                href={`#${header.id}`}
                className="text-blue-400 hover:underline nav-pills-custom d-flex gap-2"
              >
                <CircleCheckBig height={16} /> {header.data.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ Social Share Buttons */}
      <ShareButtons postSlug={postSlug} />
    </div>
  );
};

export default TableOfContents;
