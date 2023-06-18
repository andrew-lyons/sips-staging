import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import './index.scss';
import ArrowCTA from '../ArrowCTA';
import { Link } from 'gatsby';

export interface MenuOverlayProps {
  isOpen: boolean
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen }) => {
  return (
    <section className={`menuoverlay ${isOpen ? 'menuoverlay-opened' : ''}`}>
      <div className="menuoverlay-content">
        <div className='routerlinks'>
          <ArrowCTA href='menu' text='Our Schedule' arrow />
          <ArrowCTA slash={false} href='https://orders-sipscoffeetruck.square.site' text='Order Online' arrow />
          <ArrowCTA href='about' text='About Us' arrow />
          <ArrowCTA href='contact' text='Contact' arrow />
        </div>

        <div className="menuoverlay-content-socials">
          <h2>Share on Instagram and Facebook</h2>

          <div className="menuoverlay-content-socials-icons">
            <Link to="https://www.facebook.com/sipscoffeetruck">
              <FaFacebookSquare />
            </Link>
            <Link to="https://www.instagram.com/sipscoffeetruck/">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuOverlay;