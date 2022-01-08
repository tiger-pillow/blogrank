import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation'

const About = () => {
  return (
    <div>
        <Navigation></Navigation>
        <div class="container-md py-600">
            <h3>About</h3>
            <p>This web app selects and aggregates recommended blogs and rank them based on popularity(upvotes) to better discover quality blogs. 
                <br/>Created by Yiyuan and Tianyi 2022.</p>
        </div>
        
    </div>
    
  )
}

export default About; 