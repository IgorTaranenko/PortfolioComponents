import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header () {
	return(
	 <header className="Portfolio-header">
	 	<div className="line"></div>
	 	<div className="header-block">
   	 <div className="container">
   	 	<div className="row">

   	 	  <div className="col-lg-3 col-md-12">
   	 	    <div className="wrapper flex-center">
                <span className="logo"></span>
             </div>
   	 	  </div>	
   	 	  
   	 	  <div className="col-lg-4 col-md-12">
   	 	    <h1>Игорь Тараненко</h1>
   	 	    <h2>Junior Frontend Developer</h2>
   	 	  </div>

   	 	</div>
   	 </div>
	 	</div>
	 </header>
	);
	
}	

export default Header