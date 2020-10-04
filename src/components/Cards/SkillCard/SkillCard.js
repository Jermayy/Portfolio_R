import React from 'react';
import './SkillCard.css'


export const SkillCard = ({text}) =>{

    return(


<div className="card col-sm-3" id='skillCard'>
  <div className="card-body">
  <h1>Skills</h1>
  <br/>
    <ul id='list'>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript (Nodejs, Express, jQuery) </li>
    <li>React</li>
    <li>MySQL</li>
    <li>MongoDB</li>
      </ul>
  </div>
</div>

    )


   
    
}