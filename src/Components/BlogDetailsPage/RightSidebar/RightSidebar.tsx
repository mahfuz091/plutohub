"use client";
import Image from "next/image";
import Buttons from "../../Banner/Buttons";
import { useRouter } from "next/navigation";

interface RightSidebarProps {
  categories: { id: string; name: string }[];
}

const RightSidebar = ({ categories }: RightSidebarProps) => {
  const tagColors = [
    "tag-red",
    "tag-blue",
    "tag-green",
    "tag-yellow",
    "tag-purple",
    "tag-pink",
    "tag-indigo",
    "tag-teal",
  ];

  const router = useRouter();

  const handleClick = (categoryId: string) => {
   
    router.push(`/blog?category=${categoryId}#blog-section`);
  };

  return (
    <>
      <div className="sidebar-main">
        <Image
          src="/images/blogDetails-sideBar.png"
          height={252}
          width={252}
          alt="Sidebar Banner"
          layout="responsive"
        />
        <h6>Let’s Design Your Success Story</h6>
        <p>
          No matter the project size, we provide premium design tailored to your
          goals.
        </p>
        <div>
          <Buttons btnText="Book Now" />
        </div>
      </div>

      <div className="sidebar-main-tag">
        <h6>More Tags</h6>
        <div className="tags-container">
          {categories?.map((c, index) => {
            const colorClass = tagColors[index % tagColors.length];
            return (
              <button
                key={c.id}
                className={`tag ${colorClass}`}
                onClick={() => handleClick(c.id)}
              >
                {c.name}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
