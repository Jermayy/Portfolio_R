import React from 'react';
import img from '../../utils/img/jeremy_headshot.jpg'
import './PortfolioCard.css'



export const PortfolioCard = () =>{

    return (
        <div>
          <div className="card col-sm-8 " id='portfolioCard'>
          

          <img alt='app thumbnail' src= {img} id='thumbnail'/>
            <div className="card-body" id='cardBody'>
            <a href='#'>Application</a><br></br>
            <a href='#'>Github Repo</a>
            </div>
          
          
          </div>

        </div>
    )
}