import './main.css'
import React from 'react'

function Bestitems() {

    let imgarray = [];

    imgarray.push('https://www.venus-eshop.co.kr/images/VBRQ86320210602170641473Product01.png');
    imgarray.push('https://www.venus-eshop.co.kr/images/SBRE23020240403161207911Product07.png');
    imgarray.push('https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product07.png');
    imgarray.push('https://www.venus-eshop.co.kr/images/VBRI63020241008101810162Product08.png');


  return (
    <>
        <div style={{textAlign:'left',padding:'20px',marginTop:'10px',backgroundColor:'white'}}>
            <div style={{paddingBottom:'30px'}}>
                <span>Best Item</span>
            </div>
            <div className='item-wrap'>

            { imgarray.map( (src,index) =>

                <div className='item' key={index}>
                    <div>
                        <img src={ src }/>
                    </div>
                    <div>
                        <div>비너스 풀컵 부유방 퇴근</div>
                        <div>45,000 원</div>
                    </div>
                </div>  

            ) }

            </div>
        </div>
    </>
  );
}

export default Bestitems;
