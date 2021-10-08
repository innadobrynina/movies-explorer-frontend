import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ShowMore from '../ShowMore/ShowMore';
import MoviesApi from '../../utils/MoviesApi';

function Movies(props) {

  const [isSearching, setIsSearching] = React.useState(false);
  const [cardList, setCardList] = React.useState([]);

   function search(e) {
    e.preventDefault();
    setIsSearching(true);
    MoviesApi.getMovies()
      .then(movies => setCardList(movies))
      .catch(console.log)
      .finally(() => setIsSearching(false))
  }

  return (
    <div>
        <Header />
        <SearchForm onSubmit={search}/>
        <MoviesCardList isSearching={isSearching} cardList={cardList} />
        <ShowMore />
        <Footer />
    </div>
  );
}

export default Movies;