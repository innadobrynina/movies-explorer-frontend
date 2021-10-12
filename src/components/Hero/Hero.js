import './Hero.css';
import Header from "../Header/Header";
import Promo from "../Promo/Promo";

function Hero(props) {
  return (
    <div className="hero">
      <Header loggedIn={props.loggedIn} />
      <Promo />
    </div>
  )
}

export default Hero;