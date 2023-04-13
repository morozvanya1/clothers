import React from 'react';
import icons from "../img/icons/index";
import "./Auth.css";

function Auth() {
    function linkToPage() {
        window.location.href = "/item";
    }

    function changeType() {
        const t = document.getElementById("pass").type;
        if (t === "text") {
            document.getElementById("pass").type = "password";
            document.getElementById("lock").src = icons.eye;
        } else {
            document.getElementById("pass").type = "text";
            document.getElementById("lock").src = icons.lock;
        }
    }

    return (
        <div className='Auth'>
            <div className='header'>
                <h3>Авторизация</h3>
                <button>Регистрация</button>
            </div>
            <div className='input'>
                <div className='content'>
                    <img id="avatar" src={icons.avatar} alt="avatar" />
                    <input type="text" id="name" placeholder="Логин" />
                </div>
                <div className='content'>
                    <img id="lock" src={icons.eye} alt="lock" onClick={() => changeType()}/>
                    <input type="password" id="pass" placeholder="Пароль"/>
                </div>
                <button onClick={() => linkToPage()}>Войти</button>
            </div>
        </div>
    )
}

export default Auth