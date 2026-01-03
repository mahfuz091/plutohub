import React from "react";
import Skeleton from "@/Components/shared/Skeleton";
import { Col, Container, Row } from "react-bootstrap";

export const BlogCardSkeleton = () => {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center blog-card-new gap-3 mb-4">
            {/* Thumbnail Skeleton */}
            <div className="order-1 order-md-2">
                <div className="blog-thumbnail">
                    <Skeleton height={200} className="rounded mb-2" />
                </div>
            </div>

            {/* Content Skeleton */}
            <div className="flex-grow-1 me-3 order-2 order-md-1" style={{ width: "100%" }}>
                <div className="d-flex align-items-center mb-2">
                    <Skeleton circle width={30} height={30} className="me-3" />
                    <Skeleton width={100} height={20} />
                </div>

                <Skeleton width="80%" height={28} className="mb-1 mt-3" />

                <div className="mb-2 mt-2">
                    <Skeleton width="100%" height={16} className="mb-1" />
                    <Skeleton width="90%" height={16} />
                </div>

                <div className="d-flex align-items-center gap-3 small flex-wrap mt-3">
                    <Skeleton width={80} height={16} />
                    <Skeleton width={60} height={24} className="rounded-pill" />
                    <Skeleton width={40} height={16} />
                </div>
            </div>
        </div>
    );
};

export const SidebarSkeleton = () => {
    return (
        <div className="sidebar-sticky">
            <h5 className="mb-4 mb-md-4 white mt-4 mt-md-0">
                <Skeleton width={150} height={24} />
            </h5>

            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="recent-blog-card-new mb-3">
                    <div className="flex-grow-1 me-3 mt-4">
                        <div className="d-flex align-items-center mb-1 mb-md-2">
                            <Skeleton circle width={30} height={30} className="me-2" />
                            <Skeleton width={80} height={16} />
                        </div>
                        <Skeleton width="100%" height={20} className="my-1" />
                        <div className="mt-2">
                            <Skeleton width={60} height={14} />
                        </div>
                    </div>
                </div>
            ))}

            <div className="mt-5">
                <p className="fw-semibold mb-3 blog-category">
                    <Skeleton width={180} height={20} />
                </p>
                <div className="d-flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <Skeleton key={i} width={80} height={32} className="rounded-pill" />
                    ))}
                </div>
            </div>
        </div>
    );
};

const BlogSkeleton = () => {
    return (
        <div className="blog-new">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={8} className="pe-md-5 border-end-md">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <BlogCardSkeleton key={i} />
                        ))}
                    </Col>

                    <Col xs={12} md={4} className="ps-md-5 mt-4 mt-md-0">
                        <SidebarSkeleton />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BlogSkeleton;
