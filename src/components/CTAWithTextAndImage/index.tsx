import React from 'react';
import RightArrow from '../../assets/images/arrow-right.svg';

import ArrowCTA from '../ArrowCTA';

import './index.scss';

export interface CTAWithTextAndImageProps {
  linkText: string;
  linkHref: string;
  includeArrow: boolean;
  text: string;
  image: string;
  noTopPadding?: boolean;
}

const CTAWithTextAndImage: React.FC<CTAWithTextAndImageProps> = ({ linkText, linkHref, includeArrow, text, image, noTopPadding }) => {

  return (
    <section className='ctawithtextandimage' style={{ paddingTop: noTopPadding ? 0 : '' }}>
      <div className="ctatext">
        <ArrowCTA href={linkHref} text={linkText} arrow={includeArrow} />

        <p>{text}</p>
      </div>

      <img src={image} />
    </section>
  )
}

export default CTAWithTextAndImage;