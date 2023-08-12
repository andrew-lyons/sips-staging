import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Sips8 from '../../assets/images/figmasips8.png';
import Horizontal from '../../assets/images/branding/horizontal/Horizontallogo_dk.png';
import GraniteIcon from '../../assets/images/branding/icons/icons_granite_solo.png';
import Logotype from '../../assets/images/branding/logotype/Logotype_dk.png';
import Symbol from '../../assets/images/branding/symbol/Symbol_dk.png';

import Layout from "../../components/Layout"
import HeroBlock from "../../components/HeroBlock";
import GeneralContactForm from "../../components/GeneralContactForm";

import './contact.scss';

const ContactPage: React.FC<PageProps> = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const headBlock = (
    <div>
      <p>All fields are required.</p>
    </div>
  );

  const headBlock2 = (
    <div>
      <h3>Contact Us</h3>
    </div>
  );

  return (
    <Layout>
      <main className="contactpage">
        <HeroBlock image={Sips8} text='Get in touch' specialStyles={{ backgroundPosition: '18%' }} />

        <img className="horizontal" src={Horizontal} />

        <p>Hey there coffee lovers! Are you looking for that perfect caffeine fix for your upcoming event?</p>
        
        <p>Look no further than Sips Coffee Truck! Our mobile coffee truck is the perfect addition to any corporate event, wedding, party, school event, or any other shindig.</p>

        <img className="sun-icon" src={GraniteIcon} />

        <p>We can whip up your favorite caffeinated beverages from classic lattes to frothy cappuccinos.</p>
        
        <p>And don't forget about our delectable snacks - fresh baked pastries, delicious cookies and savory bites to fuel your guests for the long haul.</p>

        <img className="symbol" src={Symbol} />

        <p>We don't just serve coffee - we serve up a whole experience.</p>
        
        <p>Our quirky and charming truck is the perfect backdrop for photos and our team is always up for a chat or a laugh. We're here to make your event extra special and memorable.</p>

        <img className="logotype" src={Logotype} />

        <p>So what are you waiting for? Book Sips Coffee Truck for your upcoming event and treat your guests to a unique and delicious experience.</p>

        <p>Contact us at info@sipscoffeetruck.com to secure your spot today!</p>

        <GeneralContactForm headBlock={headBlock} />

      </main>
    </Layout>
  )
}

export default ContactPage

export const Head: HeadFC = () => <title>Contact Us</title>
