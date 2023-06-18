import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import RightArrow from '../../assets/images/arrow-right.svg';
import './index.scss';
import ArrowCTA from '../ArrowCTA';

export interface MenuOverlayProps {
    isOpen: boolean
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen }) => {
    return (
        <section className={`menuoverlay ${isOpen ? 'menuoverlay-opened' : ''}`}>
            <div className="menuoverlay-content">
                <div className='routerlinks'>
                    <ArrowCTA href='menu' text='Our Schedule' arrow />
                    <ArrowCTA href='https://orders-sipscoffeetruck.square.site' text='Order Online' arrow />
                    <ArrowCTA href='about' text='About Us' arrow />
                    <ArrowCTA href='contact' text='Contact' arrow />
                </div>

                <div className="menuoverlay-content-socials">
                    <h2>Share on Instagram and Facebook</h2>

                    <div className="menuoverlay-content-socials-icons">
                        <a href="https://www.facebook.com/sipscoffeetruck">
                            <FaFacebookSquare />
                        </a>
                        <a href="https://www.instagram.com/sipscoffeetruck/">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MenuOverlay;