import React from 'react';
import './index.scss';

export interface MidBannerWithCTAProps {
    title: string;
    image: string;
}

const MidBannerWithCTA: React.FC<MidBannerWithCTAProps> = ({ title, image }) => {
    return (
        <section className='midbannerwithcta'>
            <div className="banner" style={{ backgroundImage: `url(${image})` }}>
                <div className="banner-inlay">
                    <h3>{ title }</h3>
                </div>
            </div>
        </section>
    )
}

export default MidBannerWithCTA;