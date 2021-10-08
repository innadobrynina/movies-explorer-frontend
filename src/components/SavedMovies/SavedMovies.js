import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesApi from '../../utils/MoviesApi';

function SavedMovies(props) {

  const [cardList, setCardList] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);

  function search(searchValue) {
    
    setIsSearching(true);
    MoviesApi.getMovies()
      .then(movies => {
        const regExp = new RegExp(searchValue.toLowerCase());
        const filteredMovies = movies.filter((m) => regExp.test(m.nameRU.toLowerCase()))
        setCardList(filteredMovies);
      })
      .catch(console.log)
      .finally(() => setIsSearching(false))
  }

  function handleCardListChange(movies) {
    setCardList(movies);
  }

  return (
    <>
      <Header />
      <SearchForm  onSubmit={search}/>
      <MoviesCardList isSearching={isSearching} cardList={cardList} handleCardListChange={handleCardListChange}/>
      <Footer />
    </>
  );
}

export default SavedMovies;