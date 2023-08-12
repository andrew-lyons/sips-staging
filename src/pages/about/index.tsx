import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Sips9 from '../../assets/images/figmasips9.png';
import Coffee from '../../assets/images/coffeecup.png';
import Sunrise from '../../assets/images/branding/tagline-sun/Tagline_sun_dk.png';
import Sticker from '../../assets/images/branding/sticker/sticker.png';
import Seal from '../../assets/images/branding/seal/Seal_dk.png';

import Layout from "../../components/Layout"
import HeroBlock from "../../components/HeroBlock";


import './about.scss';

const AboutPage: React.FC<PageProps> = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <main className="aboutpage">
        <HeroBlock image={Sips9} text='About Us' specialStyles={{ backgroundPosition: '45%' }} />

        <p>Sips Coffee Truck is a coffee experience for all.</p>

        <img className="sunrise" src={Sunrise} />

        <p className="extra-bottom">Our mission is to provide our customers with high-quality beverages and local baked goods that make each day a bit brighter.</p>

        <img className="coffee" src={Coffee} />

        <p>We offer fun, handcrafted espresso-based drinks, teas and other caffeinated options to help you kickstart your day or beat afternoon blues - as well as non-caffeinated refreshments.</p>

        <p>We want to support small businesses by serving delicious treats from talented local bakers.</p>

        <img className="sticker" src={Sticker} />

        <p>Whether you need an expertly crafted latte for your morning commute or just a friendly conversation over herbal tea – this truck’s got it covered!</p>

        <img className="seal" src={Seal} />

        <p>Our vision is to become the go-to destination for those wishing to relax, socialize, get energized and unwind during their daily ongoings.</p>

        <p>Join us soon at Sips Coffee Truck –</p>

        <p className="max-bottom">where great coffee meets community spirit!</p>
      </main>
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About Us</title>
