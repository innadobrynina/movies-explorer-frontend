import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
 <section className="search-form">
      <form className="search-form__container">
        <fieldset className="search-form__placeholder-group">
          <div className="search-form__icon" />
          <input
            className="search-form__field"
            placeholder='Фильм'
            type="text"
            required
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