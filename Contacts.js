import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css'

function Contacts () {
	return(
  <section className="Portfolio-section">
  	<h3>Контакты</h3>
  	<div className="contact">
  		<span className="myTitle">Город:</span>
  		<span className="ml-1 city">Желтые Воды (Днепр), Украина</span>
  	</div>
    <div className="contact">
      <span className="myTitle">Телефон:</span>
      <span className="ml-1">+380 99 61 969 61</span>
    </div>
  	<div className="contact">
  		<span className="myTitle">Эл. почта: </span>
  		<a className="ml-1 email" href="/">igorgronthebest@gmail.com</a>
  	</div>
  	<div className="contact">
  		<span className="myTitle">GitHub:</span>
  		<a className="ml-1" href="https://github.com/IgorTaranenko/">github.com/IgorTaranenko/</a>
  	</div>
  </section>
		)
}	

export default Contacts