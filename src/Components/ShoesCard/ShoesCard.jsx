import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

const ShoesCard = ({ prod }) => {
    return (
        <NavLink to={`/detail/${prod.id}`} className="shoesCard">
            <div className="card shoesCard__cover mb-4 mt-3">
                <img src={prod.image} />
                <div className='card-body'>
                    <h4 className='shoesCard__title'>{prod.name}</h4>
                    <p className="shoesCard__text">short description...</p>
                </div>
                <div className="shoesCard__footer">
                    <div className="shoesCard__btnBuy">Buy now</div>
                    <div className="shoesCard__btnPrice">{prod.price}$</div>
                </div>
            </div>
        </NavLink>
    )
}

export default memo(ShoesCard)