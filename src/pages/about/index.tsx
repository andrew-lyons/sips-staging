import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Sips9 from '../../assets/images/figmasips9.png';
import Sunrise from '../../assets/images/branding/tagline-sun/Tagline_sun_dk.png';
import Sticker from '../../assets/images/branding/sticker/sticker.png';
import Seal from '../../assets/images/branding/seal/Seal_dk.png';

import GeneralContactForm from "../../components/GeneralContactForm";

import Layout from "../../components/Layout"
import HeroBlock from "../../components/HeroBlock";


import './about.scss';

const AboutPage: React.FC<PageProps> = () => {
  const headBlock = (
    <div>
      <h3>Contact Us</h3>
    </div>
  );

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <main className="aboutpage">
        <HeroBlock image={Sips9} text='About Us' specialStyles={{ backgroundPosition: '45%' }} />

        <p>At SIPS Coffee Truck, we live by the motto of "brewing community."</p>

        <img className="sunrise" src={Sunrise} />

        <p>We aim to provide more than just a cup of coffee.</p>

        <p>We are committed to creating a warm, welcoming environment that fosters meaningful connections and relationships within our community.</p>

        <img className="seal" src={Seal} />

        <p>Our passion lies not only in the quality and taste of our handcrafted drinks but in the experiences we provide to our community.</p>
        
        <p>We take pride in offering unique and fun drinks made with the utmost care and attention; from our signature lattes to our energy refreshers & iced teas, we promise to provide an unforgettable coffee truck experience.</p>

        <img className="sticker" src={Sticker} />

        <p>We believe that coffee connects people.</p>

        <GeneralContactForm headBlock={headBlock} includeName={false} includePhone={false} />
      </main>
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About Us</title>
