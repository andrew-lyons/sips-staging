import React, { PropsWithChildren, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { FaBars, FaFacebookSquare, FaInstagram, FaTimes } from 'react-icons/fa';
import MenuOverlay from "../MenuOverlay";

import Horizontal from '../../assets/images/branding/horizontal/Horizontallogo_dk.png';
import Sticker from '../../assets/images/branding/sticker/sticker.png';

import './index.scss';

const Layout: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {

  const [navState, setNavState] = useState(false);
  const { width } = useWindowSize();

  return (
    <div>
      { width && width < 1024
        ? (
          <nav>
            <div className="mainnavsection">
              <a href="/">
                <h3>Sips Coffee</h3>
              </a>

              <div className="menuicon">
                <a onClick={() => setNavState(oldState => !oldState)}>
                  { navState ? <FaTimes /> : <FaBars /> }
                </a>
              </div>
            </div>

            <MenuOverlay isOpen={navState} />
          </nav>
        )
        : (
          <nav>            
            <div className="navlinks">
              <a href="/">Home</a>
              <a href="/menu">Menu</a>
              <a href="/about">About us</a>
              <a href="/contact">Contact</a>
            </div>
          </nav>
        )
      }
      

      <div className="page-content">
        <div className="sticky-socials">
          <a href="https://www.facebook.com/sipscoffeetruck"><FaFacebookSquare /></a>
          <a href="https://www.instagram.com/sipscoffeetruck/"><FaInstagram /></a>
        </div>

        { props.children }
      </div>

      <footer>
        <img src={Horizontal} />

        <div className="footer-linkwrapper">
          <a href="/menu">Schedule Us</a>
        </div>

        <div className="footer-linkwrapper footer-linkwrapper-lastlink">
          <a href="https://orders-sipscoffeetruck.square.site">Order Online</a>
        </div>

        <img className="sticker" src={Sticker} />

        <div className="footer-socials">
          <div className="footer-socials-icons">
            <a>
              <FaFacebookSquare />
            </a>
            <a>
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout;
