import React from 'react'

const FooterHome = () => {
  return (
    <>
      <div className='footerHome'>
        <div className='container footerHome__top row'>
          <div className='col-4 top__footerItem'>
            <ul>
              <li className='item__title'>get help</li>
              <li>home</li>
              <li>nike</li>
              <li>adidas</li>
              <li>contact</li>
            </ul>
          </div>
          <div className='col-4 top__footerItem'>
            <ul>
              <li className='item__title'>support</li>
              <li>about</li>
              <li>contact</li>
              <li>help</li>
              <li>phone</li>
            </ul>
          </div>
          <div className='col-4 top__footerItem'>
            <ul>
              <li className='item__title'>register</li>
              <li>register</li>
              <li>login</li>
            </ul>
          </div>
        </div>

        <div className='footerHome__bottom'>
          <p>&copy; 2023 Cybersoft | All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}

export default FooterHome