"use client";
import { useState, useRef, useEffect } from "react";
import { CircleMinus, CirclePlus, Facebook, Linkedin, Instagram, CircleCheckBig } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

interface TOCProps {
  blocks: any[];
  postSlug: string;
}

const TableOfContents = ({ blocks, postSlug }: TOCProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef<HTMLUListElement>(null);
  const [height, setHeight] = useState("0px");

  const headers = blocks
    .map((block, index) => ({ ...block, index }))
    .filter((block) => block.type === "header" && block.data.level === 2);

  // Measure height of content for smooth animation
  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen, headers.length]);

  return (
    <div className="table-of-content-main">
      {/* TOC Box */}
      <div className="table-of-content">
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
            height: height,
            overflow: "hidden",
            transition: "height 0.4s ease",
          }}
        >
          {headers.map((header) => (
            <li key={header.index} className={`toc-level-${header.data.level} mb-1`}>
              <a
                href={`#${header.id}`}
                className="text-blue-400 hover:underline nav-pills-custom d-flex gap-2 "
              >
               <span><CircleCheckBig height={16} /></span> {header.data.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://www.facebook.com/p/PlutoHub-61569889000814/" target="_blank">
          <Facebook color="white" />
        </a>
        <a href="https://www.instagram.com/plutohub.agency/" target="_blank">
          <Instagram color="white" />
        </a>
        <a href="https://www.linkedin.com/company/105067253" target="_blank">
          <Linkedin color="white" />
        </a>
        <a href="https://x.com/PlutohubAgency" target="_blank">
          <FaXTwitter color="white" size={22} />
        </a>
      </div>
    </div>
  );
};

export default TableOfContents;
