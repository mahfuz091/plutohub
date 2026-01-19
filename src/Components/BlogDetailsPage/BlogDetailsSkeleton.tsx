import React from "react";
import Skeleton from "@/Components/shared/Skeleton";
import { Col, Container, Row } from "react-bootstrap";

export const BlogDetailsSkeleton = () => {
    return (
        <div className="container blog-details">
            <div className="row">

                <div className="col-xl-3 mb-4">
                    <div className="sticky-sidebar p-4 border rounded" style={{ background: "#1c1c22" }}>
                        <Skeleton width={120} height={24} className="mb-4" />
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Skeleton key={i} width="90%" height={16} className="mb-3" />
                        ))}
                    </div>
                </div>

                <div className="col-xl-9 mb-4">
                    <div className="blogContentWrapper">
                        <div className="blogContent">
                            <Skeleton width={80} height={20} className="mb-3 rounded-pill" />
                            <Skeleton width="90%" height={40} className="mb-4" />

                            <div className="blog-author-meta mt-3 d-flex align-items-center gap-3">
                                <Skeleton circle width={36} height={36} />
                                <Skeleton width={100} height={16} />
                                <Skeleton width={150} height={16} />
                            </div>

                            <div className="blog-explain blog-image-thumbail mt-4" style={{ height: "400px" }}>
                                <Skeleton width="100%" height="100%" />
                            </div>

                            <div className="blog-body mt-5">
                                <Skeleton width="100%" height={20} className="mb-3" />
                                <Skeleton width="95%" height={20} className="mb-3" />
                                <Skeleton width="40%" height={32} className="mb-3 mt-4" />
                                <Skeleton width="100%" height={20} className="mb-3" />
                                <Skeleton width="98%" height={20} className="mb-3" />
                                <Skeleton width="100%" height={20} className="mb-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="related-blog mt-5">
                <Skeleton width={200} height={32} className="mb-4" />
                <Row>
                    {[1, 2, 3].map((i) => (
                        <Col key={i} md={4} className="mb-4">
                            <Skeleton height={200} className="rounded mb-3" />
                            <Skeleton width="80%" height={20} className="mb-2" />
                            <Skeleton width="60%" height={16} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default BlogDetailsSkeleton;
