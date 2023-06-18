import React from 'react';
import RightArrow from '../../assets/images/arrow-right.svg';
import './index.scss';
import { Link } from 'gatsby';

export interface ArrowCTAProps {
    href: string;
    text: string;
    arrow: boolean;
    slash?: boolean;
}

const ArrowCTA: React.FC<ArrowCTAProps> = ({ href, text, arrow, slash=true }) => {
    return (
        <Link className='arrow-cta' to={ `${slash ? '/' : ''}${href}` }>{ text }{ arrow ? <img src={RightArrow} /> : ''}</Link>
    )
}

export default ArrowCTA;
