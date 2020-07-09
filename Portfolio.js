import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css'
import Header from './Header.js'
import PortfolioBody from './PortfolioBody.js'
import Footer from './Footer.js'

function Portfolio () {
	return(
      <React.Fragment>
         <Header></Header>
         <PortfolioBody></PortfolioBody>
         <Footer />
      </React.Fragment>
	 
	);
	
}	

export default Portfolio