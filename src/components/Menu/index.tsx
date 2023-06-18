import React from 'react'

import menu from "./menu.json"
import './index.scss';


const Menu: React.FC = () => {
  return (
    <section className='menu'>
      <h2>Menu</h2>

      <div className='menu-topnav'>
        <div>
          <a href="#drinks">Drinks</a>
          <a href="#eats">Eats</a>
          <a href="#gifts">Gifts</a>
        </div>
      </div>

      <div id='drinks' className='section-header'>
        <h3>Drinks</h3>
        <div />
      </div>

      <div className='menu-section-wrapper'>
        <div className='menu-section'>
          <h3>Coffee</h3>

          <p>Light, Medium, Dark Roasts</p>
          <p>Espresso</p>
          <p>Cappuccino</p>
          <p>Latte</p>
          <p>Iced Coffee</p>
          <p>Cold Brew</p>
          <p>Chai Lattes</p>
        </div>

        <div className='menu-section'>
          <h3>Other Beverages</h3>

          <p>Lemonade</p>
          <p>Hot Cocoa</p>
          <p>Hot, Iced, Sweet Teas</p>
        </div>

        <div className='menu-section'>
          <h3>Milk Options</h3>

          <p>Whole</p>
          <p>Skim</p>
          <p>Almond</p>
          <p>Soy</p>
          <p>Oat</p>
        </div>

        <div className='menu-section'>
          <h3>SYRUPS & EXTRAS</h3>

          <p>Vanilla</p>
          <p>Chocolate</p>
          <p>Caramel</p>
          <p>Peppermint</p>
          <p>Honey</p>
        </div>
      </div>

      <div id="eats" className='section-header'>
        <h3 id='drinks'>Eats</h3>
        <div />
      </div>

      <div className='menu-section-wrapper'>
        <div className='menu-section'>
          <h3>PASTRIES & SWEETS</h3>

          <p>Cinnamon Rolls</p>
          <p>Chocolate Chip Cookie</p>
          <p>Macadamia Cookie</p>
          <p>Brownie</p>
        </div>

        <div className='menu-section'>
          <h3>SOME OTHER FOOD?</h3>

          <p>Cinnamon Rolls</p>
          <p>Chocolate Chip Cookie</p>
          <p>Macadamia Cookie</p>
          <p>Brownie</p>
        </div>
      </div>

      <div id="gifts" className='section-header'>
        <h3 id='drinks'>Gifts</h3>
        <div />
      </div>

      <div className='menu-section'>
        <p>Gift Cards</p>
        <p>Pay It Forward</p>
        <p>Lorem Ipsum</p>
        <p>Dolor Amet</p>
      </div>
    </section>
  )
}

export default Menu;