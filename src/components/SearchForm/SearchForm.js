import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {

  const [searchValue, setSearchValue] = React.useState('');
  const [isShort, setIsShort] = React.useState(false);

  function changeMoviesType(e) {
    setIsShort(!isShort);
  }

  function handleSearchValueChange(e) {
    e.preventDefault();
    console.log("зашел", e.target.value);

    setSearchValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit(searchValue, isShort);
  }

  React.useEffect(() => {
    if (searchValue) {
      props.onSubmit(searchValue, isShort);
    }
    // eslint-disable-next-line
  }, [isShort])

  return (
    <form className="search-form" onSubmit={handleSubmit}>
    <input className="search-form__input" placeholder="Фильм" name="searchValue" id="searchValue" value={searchValue} onChange={handleSearchValueChange} />
    <button className="search-form__submit-button" type="submit">Найти</button>
    <FilterCheckbox isShort={isShort} changeMoviesType={changeMoviesType} />
    <hr className="search-form__line" />
  </form>
  )
}

export default SearchForm;