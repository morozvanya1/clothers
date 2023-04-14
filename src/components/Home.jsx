import React from 'react';
import "./Home.css";
import kinds from "../img/main-photo/index";
import icons from "../img/icons/index"

function Home() {
    const items = ["Футболки", "Штаны", "Шорты", "Куртки", "Остальное"];
    const valKinds = [kinds.shirts, kinds.pants, kinds.shorts, kinds.jackets, kinds.caps];
    const fm = ["Главная", "Каталог", "Выход"];
    const valFm = [icons.home, icons.search, icons.exit];

    function linkToPage({ link }) {
        if (link === 0) {
            link = "item";
          } else if (link === 1) {
            link = "item";
          } else if (link === undefined || link === 2) {
            link = "";
          }
          window.location.href = "/" + link;
    }

    const h = window.innerHeight - 59.67;

    const style = { height: h };
    const content = { marginTop: '55px' }

    return (
        <div className='Home' style={style}>
            <header>
                <img src={icons.wardrobe} alt="Лого" />
                <div className='search'>
                    <img src={icons.loupe} alt="Поиск" />
                    <input type="text" id="search" placeholder="Поиск" />
                </div>
            </header>
            <ul className='content' style={content}>
                {items.map((item, index) => (
                    <li onClick={() => { const link = "item/" + item; linkToPage({ link }) }} key={index}>
                        <img alt={item} src={valKinds[index]} />
                        <p>{item}</p>
                    </li>
                ))}
            </ul>
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

export default Home