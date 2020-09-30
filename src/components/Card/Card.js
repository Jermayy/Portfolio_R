import React from 'react';

import "../Card/style.css";

export const Card = ({text}) =>{

    return(


<div className="card">
  <div className="card-body">
  {text}
  </div>
</div>

    )


   
    
}