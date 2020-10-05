import React from 'react';
import img from '../../utils/img/jeremy_headshot.jpg'
import './PortfolioCard.css'



export const PortfolioCard = () =>{

    return (
     
          <div className="card col-sm-10 mx-auto" id='portfolioCard'>
          
        <span className='align'>
          <img alt='app thumbnail' src= {img} id='thumbnail'/>
            <div className="card-body" id='cardBody'>
                <ul id='portLink'>
                    <li> <a href='https://github.com/Jermayy'>Application</a></li>
                    <li><a href='https://github.com/Jermayy'>Github Repo</a></li>
  
                </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

            </div>
            </span>  
          
          </div>

        
    )
}