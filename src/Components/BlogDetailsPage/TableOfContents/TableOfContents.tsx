"use client";
import { CircleMinus } from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
interface TOCProps {
  blocks: any[];
  postSlug: string;
}

const TableOfContents = ({ blocks, postSlug }: TOCProps) => {
  console.log(blocks, "block");

  const headers = blocks
    .map((block, index) => ({ ...block, index }))
    .filter((block) => block.type === "header" && block.data.level === 2);

  return (
<div className="table-of-content-main">
  <div className="table-of-content">
    <h5>
      Table of Contents{" "}
      <span>
        <CircleMinus />
      </span>
    </h5>
    <ul className="toc-list mt-2">
      {headers.map((header) => (
        <li key={header.index} className={`toc-level-${header.data.level} mb-1`}>
          <a href={`#${header.id}`} className="text-blue-400 hover:underline nav-pills-custom">
            {header.data.text}
          </a>
        </li>
      ))}
    </ul>
  </div>

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
