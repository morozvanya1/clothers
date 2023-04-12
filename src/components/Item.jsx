import React from 'react'
import shirts from '../img/shirts/index';
import pants from '../img/pants/index';
import shorts from '../img/shorts/index';
import jackets from '../img/jackets/index';
import caps from '../img/caps/index';
import arrow from '../img/icons/index';


function Item({ category }) {
  const valShirts = Object.values(shirts);
  const valPants = Object.values(pants);
  const valShorts = Object.values(shorts);
  const valJackets = Object.values(jackets);
  const valCaps = Object.values(caps);

  const items = ["Футболки", "Штаны", "Шорты", "Куртки", "Остальное"];
  const valItems = [valShirts, valPants, valShorts, valJackets, valCaps];

  return (
    <div className='Item'>
      <div className='header'>
        <img src={arrow.arrow} alt="Назад" onClick={() => { window.location.href = "/" }} />
        <h2>{category}</h2>
      </div>
      <div className='content'>
        {items.map((v, k) => (
          (category === v) && valItems[k] && valItems[k].map((v, k) => (
            <img alt={category} key={k} src={v} />
          ))))}
      </div>
    </div>
  )
}

export default Item