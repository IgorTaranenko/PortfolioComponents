import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header () {
	return(
	 <header>
	 	<div className="line"></div>
	 	<div className="header-block">
   	 <div className="container">
   	 	<div className="row">

   	 	  <div className="col-md-2">
   	 	    <span className="logo"></span>
   	 	  </div>	
   	 	  
   	 	  <div className="col-md-4">
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