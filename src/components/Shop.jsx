import React from 'react';
import icons from "../img/icons/index"
import "./Shop.css"

function Shop() {
    const fm = ["Главная", "Каталог", "Выход"];
    const valFm = [icons.home, icons.search, icons.exit];
    const pm = ["Основное", "Хозяйственное", "Дополнительно"];
    // const pr = ["Курица"];
    const hoz = ["Мыло"];
    const os = ["Курица", "Хлеб"];

    // const pr = ["Курица", "12"];
    const [pr, setPr] = React.useState([]);
    const s = [os, hoz, pr];

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

    function addValue() {
        const v = document.getElementById('text').value;
        if (v !== "") {
            setPr(prevState => [...prevState, v]);
        }
    }

    return (
        <div className='Shop' style={style}>
            <header>
                <h3>Список покупок</h3>
            </header>
            <div className='addContent'>
                <input type="text" name="text" id="text" placeholder='Введите товар'/>
                <button onClick={() => { addValue() }}>добавить</button>
            </div>
            <div className='content'>
                {pm.map((v, i) => {
                    return (
                        <div key={i}>
                            <h3 >{v}</h3>
                            {s[i].map((v, i) => {
                                return (
                                    <p key={i}><input type="checkbox" name="check" id={i} />{v}</p>
                                )
                            })}
                        </div>)
                })}
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

export default Shop