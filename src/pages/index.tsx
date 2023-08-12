import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Layout from "../components/Layout"
import DynamicImages from "../components/DynamicImages";
import CTAWithTextAndImage from "../components/CTAWithTextAndImage";
import GeneralContactForm from "../components/GeneralContactForm";

import Sips5 from '../assets/images/figmasips5.png';
import Sips6 from '../assets/images/figmasips6.png';
import MainLogo from '../assets/images/branding/main-logo/Mainlogo_dk.png';

import './index.scss';
import ArrowCTA from "../components/ArrowCTA";

const IndexPage: React.FC<PageProps> = () => {
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
      <main className="homepage">
        <div className="main-section">
          <img className="main-logo" src={MainLogo} />

          <ArrowCTA href="menu" text="Our Menu" arrow />
          {/* <ArrowCTA href="https://orders-sipscoffeetruck.square.site" text="Order Online" arrow /> */}
        </div>

        <DynamicImages />
      
        <div className="homepage-extrapadding">
          <CTAWithTextAndImage linkText="Our Menu" linkHref="menu" includeArrow image={Sips5} text="Coffee, espresso, cinnamon rolls and more !" />

          <CTAWithTextAndImage linkText="Schedule Us" linkHref="menu" includeArrow image={Sips6} noTopPadding={true} text="For your next event, craft show, wedding..." />
        </div>

        <GeneralContactForm headBlock={headBlock} includeName={false} includePhone={false} />
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Sips Coffee Truck</title>
