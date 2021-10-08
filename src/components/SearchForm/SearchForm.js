import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {

  const [searchValue, setSearchValue] = React.useState('');

  function handleSearchValueChange(e) {
    setSearchValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit(searchValue);
  }

  return (
 <section className="search-form">
      <form className="search-form__container" onSubmit={handleSubmit}>
        <fieldset className="search-form__placeholder-group">
          <div className="search-form__icon" />
          <input
            className="search-form__field"
            placeholder="Фильм"
            name="searchValue" 
            id="searchValue" 
            value={searchValue}
            type="text"
            required
            onChange={handleSearchValueChange}
          />
        </fieldset>
        <button
          className="search-form__search-button"
          type="submit"
        />
      </form>
      <FilterCheckbox
      />
    </section>
  );
}

export default SearchForm;