import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom'
import './Portfolio.css';
import MySlider from './MySlider.js';

function Projects () {
	return (
		<section className="Projects">
			 <h3>Мои проекты</h3>
				<MySlider></MySlider>
		</section>
		)
}	

export default Projects