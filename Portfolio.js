import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css'
import Header from './header.js'
import PortfolioBody from './PortfolioBody.js'

function Portfolio () {
	return(
      <React.Fragment>
         <Header></Header>
         <PortfolioBody></PortfolioBody>
      </React.Fragment>
	 
	);
	
}	

export default Portfolio