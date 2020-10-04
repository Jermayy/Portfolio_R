import React from 'react';

import { Footer } from '../components/Footer/Footer';
import { AltHeader } from '../components/Header/AltHeader';
import { PortfolioCard } from '../components/PortfolioCard/PortfolioCard';

export const Portfolio = () =>{

    return(
        <div>
        <AltHeader></AltHeader>
        <PortfolioCard></PortfolioCard>



        <Footer></Footer>
        </div>
    )
}