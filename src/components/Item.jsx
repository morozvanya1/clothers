import React from 'react'
import shirts from '../img/shirts/index';
import pants from '../img/pants/index';
import shorts from '../img/shorts/index';
import jackets from '../img/jackets/index';
import caps from '../img/caps/index';
import icons from '../img/icons/index';
import "./Item.css"


function Item({ category }) {
  const valShirts = Object.values(shirts);
  const valPants = Object.values(pants);
  const valShorts = Object.values(shorts);
  const valJackets = Object.values(jackets);
  const valCaps = Object.values(caps);
  const fm = ["Главная", "Каталог", "Выход"];
  const valFm = [icons.home, icons.search, icons.exit];

  function linkToPage({ link }) {
    if (link === 0) {
      link = "item";
    } else if (link === 1) {
      link = "shop";
    } else {
      link = "";
    }
    window.location.href = "/" + link;
  }

  const h = window.innerHeight - 59.67;
  const style = { height: h };

  const items = ["Футболки", "Штаны", "Шорты", "Куртки", "Остальное"];
  const valItems = [valShirts, valPants, valShorts, valJackets, valCaps];

  return (
    <div className='Item' style={style}>
      <header>
        <h3>{category}</h3>
      </header>
      <div className='content'>
        {items.map((v, k) => (
          (category === v) && valItems[k] && valItems[k].map((v, k) => (
            <img alt={category} key={k} src={v} />
          ))))}
      </div>
      <footer>
        {fm.map((v, i) => (
          <div key={i} onClick={() => { const link = i; linkToPage({ link }) }}>
            <img alt={v} src={valFm[i]} />
            <p>{v}</p>
          </div>
        ))}
      </footer>
    </div>
  )
}

export default Item