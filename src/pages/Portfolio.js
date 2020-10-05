import React from 'react';

import { Footer } from '../components/Footer/Footer';
import { AltHeader } from '../components/Header/AltHeader';
import { PortfolioCard } from '../components/PortfolioCard/PortfolioCard';

import './Portfolio.css';

export const Portfolio = () =>{

    return(
        <div>
        <AltHeader></AltHeader>
        <container classname='content'>
        <PortfolioCard></PortfolioCard>
        <PortfolioCard></PortfolioCard>
        <PortfolioCard></PortfolioCard>
        <PortfolioCard></PortfolioCard>
        <PortfolioCard></PortfolioCard>
        </container>
        <Footer></Footer>
        </div>
    )
}