import './Hero.css';
import Header from "../Header/Header";
import Promo from "../Promo/Promo";

function Hero(props) {
  return (
    <div className="hero">
      <Header isLoggedIn={props.isLoggedIn} />
      <Promo />
    </div>
  )
}

export default Hero;