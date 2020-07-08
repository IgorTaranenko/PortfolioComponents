import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css'
import AboutMe from './AboutMe.js'
import Contacts from './Contacts.js'
import Skills from './Skills.js'
import Projects from './Projects.js'

function PortfolioBody () {
	return(
   <div className="container">
   	 	<div className="row">
        <div className="col-md-8">
         <AboutMe />
         <Projects />

        </div>
        <div className="col-md-4">
          <Contacts />
          <Skills />
        </div>
   	 	</div>
   </div>
	);
	
}	

export default PortfolioBody