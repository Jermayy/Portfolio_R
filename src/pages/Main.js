import React from 'react';
import { CardContainer } from '../components/Cards/CardContainer/CardContainer';

import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';


export const Main = () =>{
    return(
     <>
  <Header></Header>
  <CardContainer></CardContainer>
 <Footer></Footer>
    </>
    )
}