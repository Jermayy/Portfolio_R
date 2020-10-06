import React from 'react';
import { AboutCard } from '../AboutCard/AboutCard';
import { SkillCard } from '../SkillCard/SkillCard';
import {ContactCard} from '../ContactCard/ContactCard'
import './CardContainer.css';

export const CardContainer =()=> {
    return(
        <div className='body'>   
        <span className='info row'>
       <AboutCard></AboutCard>
        <SkillCard></SkillCard>
        </span>
       <ContactCard></ContactCard>
        </div>
    )
}