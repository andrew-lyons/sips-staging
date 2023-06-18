import React from 'react';
import './index.scss';

export interface HeroBlockProps {
    image: string,
    text: string
}

const HeroBlock: React.FC<HeroBlockProps> = ({ image, text }) => {
    return (
        <section className='heroblock' style={{ backgroundImage: `url(${image})` }}>
            <h1>{ text }</h1>
        </section>
    )
}

export default HeroBlock;