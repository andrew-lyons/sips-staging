import React from 'react';
import Coffee from '../../assets/images/coffeecup.png';
import OrderUp from '../../assets/images/orderup.png';
import CinnamonRolls from '../../assets/images/cinnamonrolls.png';
import HappyCouple from '../../assets/images/happycouple.png';
import './index.scss';

const DynamicImages: React.FC = () => {
    return (
        <section className='dynamicimages'>
            <img src={Coffee} />
            <img src={OrderUp} />
            <img src={CinnamonRolls} />
            <img src={HappyCouple} />
        </section>
    )
}

export default DynamicImages;