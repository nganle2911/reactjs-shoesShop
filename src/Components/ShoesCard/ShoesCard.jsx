import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import style from './ShoesCard.module.css'

const ShoesCard = ({ prod }) => {
    return (
        <NavLink to={"/detail"}>
            <div className={`card mb-4 ${style['card-border']}`}>
                <img src={prod.image} />
                <div className='card-body'>
                    <h4>{prod.name}</h4>
                    <p>short description...</p>
                </div>
                <div className={`${style['btn-footer']}`}>
                    <div className={`${style['btn-buy']}`}>Buy now</div>
                    <div className={`${style['btn-price']}`}>{prod.price}$</div>
                </div>
            </div>
        </NavLink>
    )
}

export default memo(ShoesCard)