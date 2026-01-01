import React from 'react';
import Marquee from 'react-fast-marquee';

const brandIcons = [
    '/assets/images/web/icon-01.png',
    '/assets/images/web/icon-02.png',
    '/assets/images/web/icon-3.png',
    '/assets/images/web/icon-04.png',
    '/assets/images/web/icon-05.png',
    '/assets/images/web/icon-06.png',
    '/assets/images/web/icon-07.png',
    '/assets/images/web/icon-08.png',
    '/assets/images/web/icon-09.png',
    '/assets/images/web/icon-10.png',
    '/assets/images/web/icon-11.png',
    '/assets/images/web/icon-12.png',
];

const BrandImages = () => {
    return (
        <div className="loc-lisbon-web-brand">
            <div className="">
                <Marquee
                    gradient={true}
                    direction='left'
                    gradientColor="3, 2, 7"
                    speed={40}
                    pauseOnHover={true}
                >
                    {brandIcons.map((icon, index) => (
                        <div key={index} className="mx-3 md:mx-4">
                            <div className="brand-icon">
                                <img
                                    src={icon}
                                    alt={`Brand ${index + 1}`}
                                    className=""
                                />
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
            <div className="mt-2">
                <Marquee
                    gradient={true}
                    direction='right'
                    gradientColor="3, 2, 7"
                    speed={40}
                    pauseOnHover={true}
                >
                    {brandIcons.map((icon, index) => (
                        <div key={index} className="mx-3 md:mx-4">
                            <div className="brand-icon">
                                <img
                                    src={icon}
                                    alt={`Brand ${index + 1}`}
                                    className=""
                                />
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default BrandImages;
