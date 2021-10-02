/* eslint-disable jsx-a11y/anchor-is-valid */
import './MoviesCard.css';
import image from "../../images/pic1.png"



function MoviesCard() {

return (
    <figure className="movies-card">
      <figcaption className="movies-card__figcaption">
        <h3 className="movies-card__card-title">Название</h3>
        <p className="movies-card__duration">Продолжительность</p>
 
        <button className="movies-card__like-button" type="button" />
        </figcaption>
      <a className="movies-card__link" href="" target="_blank" rel="noopener noreferrer">
        <img className="movies-card__card" src={image} alt="фильм"/>
      </a>
    </figure>
    
  );
}

export default MoviesCard;