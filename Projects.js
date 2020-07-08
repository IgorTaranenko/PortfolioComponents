import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom'
import './Portfolio.css';

function Projects () {
	return (
		<section>
			<h3>Мои проекты</h3>
			<ul>
				<li><NavLink exact to="/todolist">ToDoListApp</NavLink></li>
				<li></li>
				<li></li>
			</ul>
		</section>
		)
}	

export default Projects