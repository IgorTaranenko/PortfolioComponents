import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css'
import AboutMe from './AboutMe.js'
import Contacts from './Contacts.js'
import Skills from './Skills.js'
import Projects from './Projects.js'
import Education from './Education.js'

function PortfolioBody () {
	return(
   <div className="container">
   	 	<div className="row">
        <div className="col-lg-8 col-md-12">
         <AboutMe />
         <Projects />

        </div>
        <div className="col-lg-4 col-md-12">
          <Contacts />
          <Skills />
          <Education />
        </div>
   	 	</div>
   </div>
	);
	
}	

export default PortfolioBody