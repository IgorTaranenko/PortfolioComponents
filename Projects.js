import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css';
import MySlider from './MySlider.js';

function Projects () {
	return (
		<section className="Portfolio-section Projects">
			 <h3 id="Projets">Мои проекты</h3>
				<MySlider></MySlider>
		</section>
		)
}	

export default Projects