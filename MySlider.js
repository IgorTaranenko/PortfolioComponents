import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="nextArrow"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="prevArrow"
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      
    };
    return (
      
        <Slider {...settings}>
          <div className="Project">
          	<h4>Гипсолит</h4>
          	<h5>Описание:</h5>          	
          	<p>
          			Первый лендинг, созданный мной на HTML и CSS (LESS). 
          			Шаблон взят из учебного материала курса <strong>"Веб-разработчик 10.0"</strong>. В данном проекте применяется 
          			адаптивная вертска при помощи <strong>Bootstrap</strong> сетки, подключённые шрифты, подключённые элементы 
          			(<strong>slick слайдеры</strong>), модальные окна, семантическая вертска. Проект полностью взаимодействует с <strong>Git.</strong>
          	</p>
          	<h5>Проблемы</h5>
          	<p>
          	 Основной проблемой данного проекта является корректное отображение модального окна, вызываемого кликом 
          	 на кнопки
          	</p>
          	<div className="btn-link">
          		<button className="Project-btn btn btn-primary">GitHub</button>
          		<button className="Project-btn btn btn-primary">Перейти к проекту!</button>
          	</div>
          </div>
          <div className="Project">
          	<h4>To do list app</h4>
          	<h5>Описание</h5>          	
          	<p>
          			Первое приложение, которое создано мной с помощью библиотеки <strong>React.JS</strong>. Приложение представляет 
          			собой список с задачами, элементы которого можно добавлять, редактировать и удалять. Задачи могут быть выполненными
          			и невыполненными. 
          	</p>
          	<p>
          		Благодаря этому приложению я на практике изучил основы <strong>React.JS</strong>, синтаксис <strong>JSX</strong>.
          		Также в этом проекте начал активно пользоваться стандартами <strong>ES6</strong>, а именно 
          		<strong> стрелочными функциями</strong> и операторами <strong>"let"</strong> и <strong>"const"</strong>.
          		Научился пользоваться методами массивов, такими как <strong>map()</strong>, <strong>filter()</strong>, 
          		<strong> indexOf()</strong>.
          	</p>
          	<h5>Проблемы</h5>
          	<ul className="ml-3">
          		<li>Использование <strong>event.target</strong> для отлавливания события клика по <strong>конкретному </strong>
          		 элементу</li>
          		<li>Использование <strong>тернарных операторов</strong> для условного рендеринга. (Благодаря этому
          			стало возможно редактирование элемента по двойному клику)</li>
          	</ul>
          	<div className="btn-link">
          		<button className="Project-btn btn btn-primary">GitHub</button>
          		<button onClick={() => window.location.assign('/todolist')} className="Project-btn btn btn-primary">Перейти к проекту!</button>
          	</div>
          </div>
          <div className="Project">
          	<h4>Air Tickets app</h4>
            <h5>Описание</h5>
          	<p>
              Приложение, имитирующее сайт продажи авиабилетов. Состоит из десятка авиабилетов, которые фильтруются по определенным параметрам. 
              В проекте используется <strong>bootstrap сетка</strong> и препроцессор <strong>LESS</strong>.
            </p>
            <h5>Проблемы</h5>
            <p>
              Неправильная работа приложения при одновременно двух активных фильрах одного параметра (при выборе "без 
              пересадок и 1 пересадка" билеты не отображаются)
            </p>            
          	<div className="btn-link">
          		<button className="Project-btn btn btn-primary">GitHub</button>
          		<button onClick={() => window.location.assign('/airtickets')} className="Project-btn btn btn-primary">Перейти к проекту!</button>
          	</div>
          </div>
          <div className="Project">
            <h4>Курсы валют</h4>
            <h5>Описание:</h5>            
            <p>
              В этом проекте я научился работать с <strong>API</strong> сторонних сайтов, работать с полученным <strong>JSON</strong>, 
              операторами <strong>fetch asinc await</strong>. 
              Также изучил и на практике применил <strong>замыкания</strong>. Поработал с математическими операциями в <strong>JS</strong>,
              преобразованием типов, а также с определенным количеством знаков после запятой.
            </p>
            <h5>Проблемы</h5>
            <p>
              Некорректная работа конвертора, из-за того что чисельное значение курса, полученное в JSON являет собой строку.
              Для решения проблемы нужно было сначала преобразовать значение в число, а потом работать с ним.
            </p>
            <div className="btn-link">
              <button className="Project-btn btn btn-primary">GitHub</button>
              <button onClick={() => window.location.assign('/rates')} className="Project-btn btn btn-primary">Перейти к проекту!</button>
            </div>
          </div>
        </Slider>
      
    );
  }}