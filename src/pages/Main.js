import React from 'react';
import { Card } from '../components/Card/Card';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

export const Main = () =>{
    return(
     <>
        <Header></Header>
   <Card  id='about'></Card>
   <Card id='skills'></Card>
   <Card id='tracker'></Card>
    <Footer></Footer>
    </>
    )
}