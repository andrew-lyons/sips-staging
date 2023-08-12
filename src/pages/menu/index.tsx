import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Sips7 from '../../assets/images/figmasips7.png';
import Layout from "../../components/Layout"
import HeroBlock from "../../components/HeroBlock";

import "./menu.scss"

import Menu from "../../components/Menu";
import ArrowCTA from "../../components/ArrowCTA";

const MenuPage: React.FC<PageProps> = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <main className="menupage">
        <HeroBlock image={Sips7} text='Schedule & Menu' specialStyles={{ backgroundPosition: '27%' }} />

        <h3 className="top-cta-menu">READY TO ORDER?</h3>
        <ArrowCTA slash={false} href='https://orders-sipscoffeetruck.square.site' text='Order Online' arrow />

        {/* <p className="top-cta-hours">All hours are 9 AM to 5 PM Eastern</p>

        <div className="hours-row">
          <p>Mon - Fri</p>
          <p className="divider-tablet" />
          <p>Marietta, OH</p>
        </div>

        <div className="hours-row">
          <p>Saturday</p>
          <p className="divider-tablet" />
          <p>Parkersburg, WV</p>
        </div>

        <div className="hours-row hours-row-last">
          <p>Sunday</p>
          <p className="divider-tablet" />
          <p>Belpre, OH</p>
        </div> */}

        <Menu />
      </main>
    </Layout>
  )
}

export default MenuPage
export const Head: HeadFC = () => <title>Sips Coffee Truck</title>