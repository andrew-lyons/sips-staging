import React, { useEffect, useState } from 'react'
import './index.scss';

export interface MenuCategory {
  name: string
  items: string[]
}

const Menu: React.FC = () => {
  const [menuResult, setMenuResult] = useState<MenuCategory[]>([]);
  const [smallMenuGroups, setSmallMenuGroups] = useState<MenuCategory[]>([]);

  useEffect(() => {
    fetch('https://sips-email-server.vercel.app/api/catalog')
    .then((response) => response.json())
    .then((data: { result: MenuCategory[] }) => {
      const { result } = data;
      result.sort((a, b) => b.items.length - a.items.length);
      const biggerResults = result.filter(f => f.items.length > 2);
      const smallerResults = result.filter(f => f.items.length <= 2);
      setMenuResult(biggerResults);
      setSmallMenuGroups(smallerResults);
    });
  }, [])

  return (
    <section className='menu'>
      <h2 className='menu-title'>Menu</h2>

      <div className='menu-section-wrapper'>
        { menuResult.map((r: { name: string, items: string[] }, idx) => {
          return (
            <div key={`${r.name}-menusection-${idx}`} className='menu-section'>
              <h3>{ r.name }</h3>

              { r.items.map((i, itemIdx)=> {
                return (
                  <p key={`${i}-item-${itemIdx}`}>{ i }</p>
                )
              })}
            </div>
          )
        })}
      </div>

      <h2 className='menu-title'>Also...</h2>

      <div className='menu-section-wrapper menu-section-wrapper-smallerwrapper'>
        { smallMenuGroups.map((r: { name: string, items: string[] }, idx) => 
          <h3 className='menu-section-wrapper-smaller' key={`${r.name}-alsosection-${idx}`}>{ r.name }</h3>
        )}
      </div>
    </section>
  )
}

export default Menu;