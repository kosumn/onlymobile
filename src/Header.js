import './main.css'
import React from 'react'

function Headers() {

  const eshoplogo = 'https://www.venus-eshop.co.kr/m/assets/v3/images/logo.png';
  const menulogo = 'https://www.venus-eshop.co.kr/m/assets/v3/images/btn_menu.png';
  const cartlogo = 'https://www.venus-eshop.co.kr/m/assets/v3/images/btn_basket.png';
  const glasseslogo = 'https://www.venus-eshop.co.kr/m/assets/v3/images/btn_search.png';
  
  return (
    <header className="header">
        <div className='header-top'>
          <div type="button" className="btn-menu">
            <img src={menulogo}/>
          </div>
          <h1 className="logo">
            <img src={eshoplogo}/>
          </h1>
          <div className="right">
            <img src={cartlogo}/>
          </div>

        </div>
    </header>
  );
}

export default Headers;
