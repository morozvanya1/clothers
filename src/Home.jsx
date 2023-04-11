import React from 'react';
import "./App.css";

function Home() {
    const items = ["Футболки", "Штаны", "Шорты", "Куртки", "Остальное"];
    function linkToPage({ index }) {
        window.location.href = "/item";
    }

    return (
        <div>
            <header>
                <h1>Гардероб</h1>
            </header>
            <div>
                <ul>
                    {items.map((item, index) => (
                        <li onClick={() => linkToPage({ index })} key={index}>
                            <img alt={item}/>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Home