import React from 'react';
import "../App.css";
import kinds from "../img/main-photo/index";

function Home() {
    const items = ["Футболки", "Штаны", "Шорты", "Куртки", "Остальное"];
    const valKinds = [kinds.shirts, kinds.pants, kinds.shorts, kinds.jackets, kinds.caps];

    function linkToPage({ link }) {
        if (link === undefined) {
            link = "";
        }
        window.location.href = "/" + link;
    }

    return (
        <div>
            <header>
                <h1>Гардероб</h1>
                <button onClick={() => linkToPage({})}>ВЫЙТИ</button>
            </header>
            <div>
                <ul>
                    {items.map((item, index) => (
                        <li onClick={() => { const link = "item/" + item; linkToPage({ link }) }} key={index}>
                            <img alt={item} src={valKinds[index]} />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Home