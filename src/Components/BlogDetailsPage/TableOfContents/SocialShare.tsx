"use client";

import { useState, useEffect } from "react";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

interface ShareButtonsProps {
  postSlug: string;
}

const ShareButtons = ({ postSlug }: ShareButtonsProps) => {
  const [shareUrl, setShareUrl] = useState("");

  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/blog/${postSlug}`;
      setShareUrl(url);
    }
  }, [postSlug]);

  if (!shareUrl) return null;

  return (
    <div className="flex gap-2 items-center  social-links">
      
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="hover:text-blue-500 transition"
      >
        <Facebook size={22} />
      </a>

     
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          shareUrl
        )}&text=${encodeURIComponent("Check out this article!")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="hover:text-sky-400 transition"
      >
        <FaXTwitter size={22} />
      </a>

     
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          shareUrl
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="hover:text-blue-400 transition"
      >
        <Linkedin size={22} />
      </a>

      
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-pink-500 transition"
      >
        <Instagram size={22} />
      </a>
    </div>
  );
};

export default ShareButtons;
