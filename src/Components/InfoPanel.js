import React from 'react';
import GlobalStats from './GlobalStats';
import Countries from './Countries';

export default function InfoPanel({currentScreen}){
    
    if(currentScreen == 0)
    return  <GlobalStats className="banner"/>
    else return  <Countries/>
}
