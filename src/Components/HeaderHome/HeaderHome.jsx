import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const HeaderHome = () => {
    const { userLogin } = useSelector(state => state.userReducer); 

    const renderLoginButton = () => {
        if (userLogin) {
            return <>
                <NavLink to="/profile" className={"nav-link mx-3 text-white"}>Hello {userLogin.email}</NavLink>
                <span style={{cursor: 'pointer', marginRight: '15px'}} onClick={() => {
                    window.localStorage.clear();
                    window.location.href = './login';
                }}>Logout</span>
            </>
        }
        return <NavLink to="/login" className="nav-link text-white mx-3">Login</NavLink>
    }

    return (
        <nav className="headerHome__nav navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand mx-2" to="/">Shoes Shop</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/" aria-current="page">Home</NavLink>
                    </li>
                </ul>
                <form className="d-flex my-2 my-lg-0">
                    <NavLink to="/carts" className="text-white"><i className='fa fa-cart-plus' style={{fontSize: '25px'}}></i></NavLink>
                    {renderLoginButton()}
                </form>
            </div>
        </nav>
    )
}

export default HeaderHome