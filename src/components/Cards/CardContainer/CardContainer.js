import React from 'react';
import { AboutCard } from '../AboutCard/AboutCard';
import { SkillCard } from '../SkillCard/SkillCard';
import { TrackerCard } from '../TrackerCard/TrackerCard';
import './CardContainer.css';

export const CardContainer =()=> {
    return(
        <div className='body'>   
        <span className='info row'>
       <AboutCard></AboutCard>
       <div className='col-md-1'></div>
       <SkillCard></SkillCard>
        </span>
        <span className='row'>
        <TrackerCard></TrackerCard>
        </span>
        </div>
    )
}