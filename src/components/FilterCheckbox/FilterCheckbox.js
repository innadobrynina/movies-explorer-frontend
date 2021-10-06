   
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
     <form className="filter-checkbox">
      <label className="filter-checkbox__container" htmlFor="checkbox">
        <input className="filter-checkbox__invisible-field" type="checkbox" id="checkbox" />
        <span
          className="filter-checkbox__field"
        />
        <p className="filter-checkbox__field-name">Короткометражки</p>
      </label>
    </form>
  );
}

export default FilterCheckbox;