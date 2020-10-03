import React from 'react';
import { AboutCard } from '../AboutCard/AboutCard';
import { SkillCard } from '../SkillCard/SkillCard';
import { TrackerCard } from '../TrackerCard/TrackerCard';


export const CardContainer =()=> {
    return(
        <div className='body'>   
        <span className='info row'>
       <AboutCard></AboutCard>
        <SkillCard></SkillCard>
        </span>
        <TrackerCard></TrackerCard>
        </div>
    )
}