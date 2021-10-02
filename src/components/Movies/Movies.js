import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import ShowMore from "../ShowMore/ShowMore";
import Navigation from '../Navigation/Navigation';

function Movies() {
  return (
    <main className="content">
      <Navigation />
      <SearchForm />
       <MoviesCardList>
         <MoviesCard />
         <MoviesCard />
       </MoviesCardList>
       <ShowMore />
    </main>
  );
}

export default Movies;