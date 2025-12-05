import React from 'react';
import Banner from './Banner/Banner';
import Range from './Range/Range';
import RecentWork from './RecentWork/RecentWork';
import Process from './Process/Process';
import ClientSay from './ClientSay/ClientSay';
import IndustriesExpertise from './IndustriesExpertise/IndustriesExpertise';
import NumberLoc from './NumberLoc/NumberLoc';
import Boost from './Boost/Boost';
import Faq from './Faq/Faq';
import Contact from './Contact/Contact';

const Location = () => {
    return (
        <div className='main-bg-loc'>
           <Banner/>
           <Range/>
           <RecentWork/>
           <Process/>
           <ClientSay/>
           <IndustriesExpertise/>
           <NumberLoc/>
           <Boost/>
           <Faq/>
           <Contact/>
        </div>
    );
};

export default Location;