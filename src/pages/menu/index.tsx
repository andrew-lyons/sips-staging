import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import AboutUsHero from "../../assets/images/aboutushero.png"

import Layout from "../../components/Layout"
import HeroBlock from "../../components/HeroBlock";

import "./menu.scss"

import Menu from "../../components/Menu";
import ArrowCTA from "../../components/ArrowCTA";

const MenuPage: React.FC<PageProps> = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    const text: string = 'Order Online'
    const opening: string = "9 AM";
    const closing: string = "5 PM";
    
    const area = ["Mon - Friday", "Marietta, OH", "Saturday", "Parkersburg, WV", "Sunday", "Belpre, OH"]

    return (
        <Layout>
            <main className="menupage">
                <HeroBlock image={AboutUsHero} text='Schedule & Menu' />

                <h3 className="top-cta-menu">READY TO ORDER?</h3>
                <ArrowCTA slash={false} href='https://orders-sipscoffeetruck.square.site' text='Order Online' arrow />

                <p className="top-cta-hours">All hours are 9 AM to 5 PM Eastern</p>

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
                </div>

                <Menu />
            </main>
        </Layout>
    )
}

export default MenuPage
export const Head: HeadFC = () => <title>Sips Coffee Truck</title>