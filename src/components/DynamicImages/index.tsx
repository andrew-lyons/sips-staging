import React from 'react';
import Sips1 from '../../assets/images/figmasips1.png';
import Sips2 from '../../assets/images/figmasips2.png';
import Sips3 from '../../assets/images/figmasips3.png';
import Sips4 from '../../assets/images/figmasips4.png';
import './index.scss';

const DynamicImages: React.FC = () => {
  return (
    <section className='dynamicimages'>
      <img src={Sips1} />
      <img src={Sips2} />
      <img src={Sips3} />
      <img src={Sips4} />
    </section>
  )
}

export default DynamicImages;