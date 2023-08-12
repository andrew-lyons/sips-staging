import React from 'react';
import './index.scss';

export interface HeroBlockProps {
    image: string,
    text: string,
    specialStyles?: any
}

const HeroBlock: React.FC<HeroBlockProps> = ({ image, text, specialStyles }) => {
    return (
        <section className='heroblock' style={{ backgroundImage: `url(${image})`, ...specialStyles }}>
            <h1>{ text }</h1>
        </section>
    )
}

export default HeroBlock;