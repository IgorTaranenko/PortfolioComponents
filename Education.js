import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css'

function Education () {
	 return(
	 	<section className="">
	 		 <h3>Образование</h3>
	 		 <div className="ed">
	 		 	<span className="ed-date">2015-2019:</span>
	 		 	<span className="ed-text">Национальная Металлургическая Академия Украины. 
	 		 	Диплом бакалавра по специальности <strong>"Компьютерные науки"</strong></span>
	 		 </div>
	 		 <div className="ed-last">
	 		 	<span className="ed-date">2020:</span>
	 		 	<span className="ed-text">Курс <strong>Веб-разработчик 10.0</strong></span>
	 		 </div>
	 	</section>
	 )
}

export default Education