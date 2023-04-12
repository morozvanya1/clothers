import React from 'react'
import shirts from '../img/shirts/index';
import arrow from '../img/icons/index'

function Item({ category }) {
  const valShirts = [shirts.shirts0, shirts.shirts1, shirts.shirts2, shirts.shirts3, shirts.shirts4, shirts.shirts5, shirts.shirts6, shirts.shirts7, shirts.shirts8, shirts.shirts9, shirts.shirts10, shirts.shirts11, shirts.shirts12, shirts.shirts13, shirts.shirts14, shirts.shirts15, shirts.shirts16, shirts.shirts17, shirts.shirts18, shirts.shirts19, shirts.shirts20, shirts.shirts21, shirts.shirts22, shirts.shirts23, shirts.shirts24, shirts.shirts25, shirts.shirts26, shirts.shirts27,];

  return (
    <div className='Item'>
      <div className='header'>
        <img src={arrow.arrow} alt="Назад" onClick={()=>{window.location.href="/"}} />
        <h2>{category}</h2>
      </div>
      <div className='content'>
        {
          (category == "Футболки") && valShirts.map((v, k) => (
            <img alt={category} key={k} src={v} />
          ))
        }
      </div>
      {/* {( category  == "shirts") &&
        <div>Hello</div>}
      {(category == "pants") &&
      <div>Hello</div>} */}
    </div>
  )
}

export default Item