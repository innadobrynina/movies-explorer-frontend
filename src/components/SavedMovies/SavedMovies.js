import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesApi from '../../utils/MoviesApi';

function SavedMovies() {

  const [cardList, setCardList] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);

  function search(e) {
    e.preventDefault();
    setIsSearching(true);
    MoviesApi.getMovies()
      .then(movies => setCardList(movies))
      .catch(console.log)
      .finally(() => setIsSearching(false))
  }

  function handleCardListChange(movies) {
    setCardList(movies);
  }

  return (
    <div>
      <Header />
      <SearchForm  onSubmit={search}/>
      <MoviesCardList isSearching={isSearching} cardList={cardList} handleCardListChange={handleCardListChange}/>
      <Footer />
    </div>
  );
}

export default SavedMovies;