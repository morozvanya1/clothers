import React from 'react'

function Auth() {
    function linkToPage() {
        window.location.href = "/item";
    }

    return (
        <div className='Auth'>
            <h3>Авторизация</h3>
            <div className='input'>
                <input type="text" id="name" placeholder="Логин" />
                <input type="password" id="pass" placeholder="Пароль" />
                <button onClick={() => linkToPage()}>Войти</button>
            </div>
        </div>
    )
}

export default Auth