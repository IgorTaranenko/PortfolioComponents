import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css';

function Skills () {
	return (
  <section className="Portfolio-section Skills">
  	<h3>Навыки</h3>
  	<p>Свои навыки я оцениваю самостоятельно по пятибальной шкале, опираясь на среднестатистические требования к
  	<strong> Junior Developer-ам:</strong></p>
  	<div className="wrapper wrapper-col ">
      <div className="Skill">
        <h4>React.JS</h4>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
      </div>
      <div className="Skill">
        <h4>JavaScript ES6</h4>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark"></span>
      </div>
      <div className="Skill">
        <h4>HTML5 и CSS3</h4>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
      </div>
      <div className="Skill">
        <h4>Bootstrap</h4>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark"></span>
      </div>
      <div className="Skill">
        <h4>LESS</h4>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
      </div>
      <div className="Skill">
        <h4>Адаптивная <br/>вёрстка</h4>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark"></span>
      </div>
      <div className="Skill">
        <h4>jQuery</h4>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark"></span>
      </div>
      <div className="Skill">
        <h4>Git</h4>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
        <span className="mark mark-ok"></span>
      </div>
    </div>
  </section>
		)
}	

export default Skills