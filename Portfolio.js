import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css'
import Header from './Header.js'
import PortfolioBody from './PortfolioBody.js'
import Footer from './Footer.js'

class Portfolio extends React.Component {
	componentDidMount() {
		document.title = "Портфолио"
	}

	render() {
		return(
	      <React.Fragment>
	         <Header></Header>
	         <PortfolioBody></PortfolioBody>
	         <Footer />
	      </React.Fragment>			 
		);
	}
}

export default Portfolio