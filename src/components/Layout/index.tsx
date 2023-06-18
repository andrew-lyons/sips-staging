import React, { PropsWithChildren, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { FaBars, FaFacebookSquare, FaInstagram, FaTimes } from 'react-icons/fa';
import MenuOverlay from "../MenuOverlay";

import Horizontal from '../../assets/images/branding/horizontal/Horizontallogo_dk.png';
import Sticker from '../../assets/images/branding/sticker/sticker.png';

import './index.scss';
import { Link } from "gatsby";

const Layout: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {

  const [navState, setNavState] = useState(false);
  const { width } = useWindowSize();

  return (
    <div>
      { width && width < 1024
        ? (
          <nav>
            <div className="mainnavsection">
              <Link to="/">
                <h3>Sips Coffee</h3>
              </Link>

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
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/about">About us</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </nav>
        )
      }
      

      <div className="page-content">
        <div className="sticky-socials">
          <Link to="https://www.facebook.com/sipscoffeetruck"><FaFacebookSquare /></Link>
          <Link to="https://www.instagram.com/sipscoffeetruck/"><FaInstagram /></Link>
        </div>

        { props.children }
      </div>

      <footer>
        <img src={Horizontal} />

        <div className="footer-linkwrapper">
          <Link to="/menu">Schedule Us</Link>
        </div>

        <div className="footer-linkwrapper footer-linkwrapper-lastlink">
          <Link to="https://orders-sipscoffeetruck.square.site">Order Online</Link>
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
