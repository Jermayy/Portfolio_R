import React, { Component } from 'react';

import { Footer } from '../components/Footer/Footer';
import { AltHeader } from '../components/Header/AltHeader';
import { PortfolioCard } from '../components/PortfolioCard/PortfolioCard';
import { Wrapper } from '../components/Wrapper/Wrapper';
import portfolioList from '../portfolioList'
import './Portfolio.css';

export class Portfolio extends Component{


state = {
    portfolioList
}
render(){
    return(
       <div>
        <AltHeader></AltHeader>
    <Wrapper>
        {this.state.portfolioList.map (portfolio =>(
            <PortfolioCard 
            id = {portfolio.id}
            image = {portfolio.image}
            name = {portfolio.name}
            appLink = {portfolio.appLink}
            githubLink = {portfolio.githubLink}
            description = {portfolio.description}
            />  
        ))}
    </Wrapper>



        <Footer></Footer>
    </div>
        )
    }
}