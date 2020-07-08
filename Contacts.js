import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css'

function Contacts () {
	return(
  <section>
  	<h3>Контакты</h3>
  	<div className="contact">
  		<span className="contact-title">Город:</span>
  		<span>Желтые Воды, Украина</span>
  	</div>
    <div className="contact">
      <span className="contact-title">Телефон:</span>
      <span>+380 99 61 969 61</span>
    </div>
  	<div className="contact">
  		<span className="contact-title">Эл. почта: </span>
  		<a href="/">igorgronthebest@gmail.com</a>
  	</div>
  	<div className="contact">
  		<span className="contact-title">GitHub:</span>
  		<a href="https://github.com/IgorTaranenko/">Git</a>
  	</div>
  </section>
		)
}	

export default Contacts