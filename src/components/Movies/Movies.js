import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ShowMore from '../ShowMore/ShowMore';

function Movies() {
  return (
    <div>
        <Header />
        <SearchForm />
        <MoviesCardList />
        <ShowMore />
        <Footer />
    </div>
  );
}

export default Movies;