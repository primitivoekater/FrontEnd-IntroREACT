
import './App.css';
import prev from './assets/icon-prev.svg'; 
import next from './assets/icon-next.svg'; 
import gabs from './assets/gabriela.jpg'
function App() {
  return (
    <div className="App">

<head>
    <title>Slider</title>
</head>

<body>
  <div className='container'>
    <div className="content-wrapper">
        <div className="text-wrapper">
            <p className="review-text">“Estive interessada em código por um tempo mas não tomava uma atitude, até agora. Não
                consigo recomendar esse curso o suficiente. Estou no trabalho dos meu sonhos e vejo um futuro
                brilhante!”</p>
            <div className="author__content-wrapper">
                <div className="author__name">Gabriela da Silva</div>
                <div className="author__title">Desenvolvedora Fullstack</div>
            </div>
        </div>

        <div className="carousel">
            <div className="carousel__img-wrapper">
                <img src={gabs} alt="bootcamp graduate" className="carousel__img"/>
            </div>
            <div className="carousel__btn-wrapper">
                <button id="btn-prev" className="btn btn--previous"><img src={prev}
                        alt="previous button"/></button>
                <button id="btn-next" className="btn btn--next"><img src={next}
                        alt="next button"/></ button>
            </div>
        </div>
    </div>
    </div>
</body>


</div>
  );
}

export default App;
