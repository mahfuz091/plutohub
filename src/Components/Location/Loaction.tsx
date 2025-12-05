import React from 'react';
import Banner from './Banner/Banner';
import Range from './Range/Range';
import RecentWork from './RecentWork/RecentWork';
import Process from './Process/Process';
import ClientSay from './ClientSay/ClientSay';

const Location = () => {
    return (
        <div className='main-bg-loc'>
           <Banner/>
           <Range/>
           <RecentWork/>
           <Process/>
           <ClientSay/>

        </div>
    );
};

export default Location;