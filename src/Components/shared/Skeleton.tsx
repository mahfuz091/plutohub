import React from "react";

interface SkeletonProps {
    width?: string | number;
    height?: string | number;
    className?: string;
    circle?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({
    width,
    height,
    className = "",
    circle = false,
}) => {
    const style: React.CSSProperties = {
        width: width,
        height: height,
    };

    return (
        <span
            className={`skeleton ${circle ? "skeleton-circle" : ""} ${className}`}
            style={style}
        />
    );
};

export default Skeleton;
