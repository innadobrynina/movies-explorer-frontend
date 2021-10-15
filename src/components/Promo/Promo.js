import './Promo.css';
import promo from '../../images/landing-logo.svg';

function Promo(props) {
    return (
      <section className="promo">
          <div className="promo__block">
          <div className="promo__left">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки</h1>
            <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          </div>
          <img src={promo} className="promo__image" alt="Текстовый логотип" />
          </div>
          <button className="promo__btn">Узнать больше</button>
      </section>
    );
  }
  
  export default Promo;