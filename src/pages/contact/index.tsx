import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import MidBannerImage from '../../assets/images/midbanner.png';
import ContactHero from '../../assets/images/contacthero.png';
import Horizontal from '../../assets/images/branding/horizontal/Horizontallogo_dk.png';
import GraniteIcon from '../../assets/images/branding/icons/icons_granite_solo.png';

import Layout from "../../components/Layout"
import HeroBlock from "../../components/HeroBlock";
import MidBannerWithCTA from "../../components/MidBannerWithCTA";
import GeneralContactForm from "../../components/GeneralContactForm";

import './contact.scss';
import ArrowCTA from "../../components/ArrowCTA";

const ContactPage: React.FC<PageProps> = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus ipsum ut eros suscipit placerat. Ut facilisis, ipsum at vestibulum placerat, justo velit aliquet libero, vel euismod lorem est at neque. Duis accumsan viverra libero, ac aliquet nibh viverra nec.';

  const headBlock = (
    <div>
      <p>Send us a message and we’ll get back with you!</p>

      <p>All fields are required.</p>
    </div>
  )

  return (
    <Layout>
      <main className="contactpage">
        <HeroBlock image={ContactHero} text='Get in touch' />

        <img className="horizontal" src={Horizontal} />

        <MidBannerWithCTA title='Fundraisers' image={MidBannerImage} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus ipsum ut eros suscipit placerat. Ut facilisis, ipsum at vestibulum placerat, justo velit aliquet libero, vel euismod lorem est at neque.</p>
        <ArrowCTA arrow href="#" text="Schedule Us" />

        <MidBannerWithCTA title='Events' image={MidBannerImage} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus ipsum ut eros suscipit placerat. Ut facilisis, ipsum at vestibulum placerat, justo velit aliquet libero, vel euismod lorem est at neque.</p>
        <ArrowCTA arrow href="#" text="Get In Touch" />

        <MidBannerWithCTA title='Other Things...' image={MidBannerImage} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus ipsum ut eros suscipit placerat. Ut facilisis, ipsum at vestibulum placerat, justo velit aliquet libero, vel euismod lorem est at neque.</p>
        <ArrowCTA arrow href="#" text="Our Schedule" />

        <img className="sun-icon" src={GraniteIcon} /> 

        <GeneralContactForm headBlock={headBlock} />

      </main>
    </Layout>
  )
}

export default ContactPage

export const Head: HeadFC = () => <title>Contact Us</title>
