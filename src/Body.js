import './main.css'
import React from 'react'
import Mainbanner from './Mainbanner';
import Bestitems from './Bestitems';
import Submenu from './Submenu.js';

function Body() {
  
  return (
    <>
        <div className='body'>
            <Mainbanner/>
            <Submenu/>
            <Bestitems/>
            
        </div>
    </>
  );
}

export default Body;
