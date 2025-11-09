"use client";

import { Facebook, Linkedin, Twitter } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const SocialShare = () => {
  // Open popup window
  const socialWindow = (url: string) => {
    const left = (window.screen.width - 570) / 2;
    const top = (window.screen.height - 570) / 2;
    const params = `menubar=no,toolbar=no,status=no,width=570,height=570,top=${top},left=${left}`;
    window.open(url, "ShareWindow", params);
  };

  // Handle click
  const handleShare = (platform: string) => {
    const pageUrl = encodeURIComponent(window.location.href);

    // Try to get OG description, fallback to empty
    const text = encodeURIComponent(
      document.querySelector("meta[property='og:description']")?.getAttribute("content") || ""
    );

    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${text}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}`;
        break;
      case "x":
        shareUrl = `https://x.com/intent/tweet?url=${pageUrl}&text=${text}`;
        break;
      default:
        return;
    }

    socialWindow(shareUrl);
  };

  return (
    <div className="social-links flex gap-4">
      <button onClick={() => handleShare("facebook")}>
        <Facebook color="white" size={22} />
      </button>
      <button onClick={() => handleShare("twitter")}>
        <Twitter color="white" size={22} />
      </button>
      <button onClick={() => handleShare("linkedin")}>
        <Linkedin color="white" size={22} />
      </button>
      <button onClick={() => handleShare("x")}>
        <FaXTwitter color="white" size={22} />
      </button>
    </div>
  );
};

export default SocialShare;
