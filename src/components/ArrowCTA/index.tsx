import React from 'react';
import RightArrow from '../../assets/images/arrow-right.svg';
import './index.scss';

export interface ArrowCTAProps {
    href: string;
    text: string;
    arrow: boolean;
    slash?: boolean;
}

const ArrowCTA: React.FC<ArrowCTAProps> = ({ href, text, arrow, slash=true }) => {
    return (
        <a className='arrow-cta' href={ `${slash ? '/' : ''}${href}` }>{ text }{ arrow ? <img src={RightArrow} /> : ''}</a>
    )
}

export default ArrowCTA;
