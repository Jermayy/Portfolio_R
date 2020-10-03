import React from 'react';
import { CardContainer } from '../components/Cards/CardContainer/CardContainer';

import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import './Main.css';

export const Main = () =>{
    return(
     <container className='page'>
<div id='Body'>
  <Header></Header>
  <CardContainer></CardContainer>
  </div>
 <Footer></Footer>
    </container>
    )
}