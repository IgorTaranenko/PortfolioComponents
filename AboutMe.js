import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css'

function AboutMe () {
	return(
  <section className="AboutMe">
  	<h3>Обо мне</h3>
  	<p>Привет! Меня зовут Игорь, мне 22 года. Я начинающий <strong>Frontend разработчик</strong>.</p>
  	<p>
  	 Свой путь программиста я начал ещё в 15 лет, когда в школе мы изучали Borland Paskal.
  	 Именно тогда я узнал об основах программирования в целом и тогда же я узнал о более совершенных
  	 языках программирования, таких как C, C#.
  	</p>
  	<p>
  		Более серьёзно програмимрованием я занялся в институте, тогда я начал читать книгу о C++ Страуструпа.
  		Однако я вовремя понял, что C++ как первый язык программирования будет слишком сложным и я переключился на <strong>C#</strong>, 
  		в котором изучил принципы <strong>объектно-ориентированного программирования</strong>. На <strong>C#</strong> выполнял большую
  		часть практических работ в институте.
  	</p>
  	<p>
  		Изучая вакансии, я пришел к выводу, что начинающему C# разработчику очень трудно найти первую работу. Именно поэтому я
  		повернул в сторону <strong>Web программирования</strong>, а именно в сторону <strong>Frontend-а и JavaScript</strong>.
  		Изучение <strong>JavaScript</strong> я начал с основ языка, а так же с <strong>jQuery</strong>. После этого я прошел 
  		курс <strong>"Веб-разработчик 10.0"</strong> от <strong>Академии Верстки</strong>, где я научился правильно и адаптивно 
  		верстать сайты, стилизировать элементы, работать <strong>GitHub</strong>, а также подключать к сайту 
  		сторонние элементы (слайдеры, аккордеоны и т.п). 
  	</p>
  	<p>
  		После прохождения курса, я начал самостоятельное изучение библиотеки <strong className="React">React.JS</strong>, при
  		помощи которой создал несколько собственных учебных проектов, с которыми можно ознакомиться <a href="/">ниже</a>.
  	</p>
  	<p>
  		В данный момент ищу <span className="work">удалённую работу</span> на позицию <strong>Junior Frontend (React) Developer</strong> в 
  		компании, где планируюю построить долгую и успешную карьеру!
  	</p>
  </section>
		)
}	

export default AboutMe