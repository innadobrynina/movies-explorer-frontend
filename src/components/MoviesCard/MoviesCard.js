/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './MoviesCard.css';
import image from "../../images/pic1.png";
import { Route } from "react-router-dom";


function MoviesCard() {

return (
    <figure className="movies-card">
        <div className="movies-card-column">
            <figcaption className="movies-card__figcaption">

                <h3 className="movies-card__card-title">Название</h3>
                <p className="movies-card__duration">Продолжительность</p>
                
            </figcaption>
            <Route path='/movies'>
            <div className="movies-card-block">
                <button className="movies-card__like-button" type="button" />
            </div>
            </Route>
            <Route path='/saved-movies'>
            <div className="movies-card-block">
                <button className="movies-card__delete-button" type="button" />
            </div>
            </Route>
        </div>
      <a className="movies-card__link" href="" target="_blank" rel="noopener noreferrer">
        <img className="movies-card__card" src={image} alt="фильм"/>
      </a>
    </figure>
    
  );
}

export default MoviesCard;