import React from 'react';
import "../App.css";
import kinds from "../img/main-photo/index";

function Home() {
    const items = ["Футболки", "Штаны", "Шорты", "Куртки", "Остальное"];
    const valKinds = [kinds.shirts, kinds.pants, kinds.shorts, kinds.jackets, kinds.caps];

    function linkToPage({ item }) {
        window.location.href = "/item/" + item;
    }

    return (
        <div>
            <header>
                <h1>Гардероб</h1>
            </header>
            <div>
                <ul>
                    {items.map((item, index) => (
                        <li onClick={() => linkToPage({ item })} key={index}>
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