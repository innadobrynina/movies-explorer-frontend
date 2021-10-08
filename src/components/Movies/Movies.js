import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesApi from '../../utils/MoviesApi';

function Movies(props) {

  const [isSearching, setIsSearching] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [cardList, setCardList] = React.useState([]);

   function search(searchValue) {
   
    setIsSearching(true);
    MoviesApi.getMovies()
      .then(movies => {
        const regExp = new RegExp(searchValue.toLowerCase());
        const filteredMovies = movies.filter((m) => regExp.test(m.nameRU.toLowerCase()))
        if (filteredMovies.length === 0) return setIsNotFound(true);
        setIsNotFound(false);
        setCardList(filteredMovies);
      })
      .catch(console.log)
      .finally(() => setIsSearching(false))
  }

  return (
    <>
        <Header />
        <SearchForm onSubmit={search}/>
        <MoviesCardList isSearching={isSearching} isNotFound={isNotFound} cardList={cardList} />
        <Footer />
    </>
  );
}

export default Movies;