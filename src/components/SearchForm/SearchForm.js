import { useState } from 'react';
import './SearchForm.css';
import find from '../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ handleCheckbox, checkbox, onSubmit, error }) {
 
  const [request, setRequest] = useState({});

  function handleChange(e) {
    const { target } = e;
    const { name, value } = target;
    setRequest({...request, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(request);
  }

  return (
    <div className="search">
      <form className="search__form"
        id='search'
        name='search'
        onSubmit={handleSubmit} 
        noValidate
      >
       <div className="search__form-block"> 
        <input className='search__input'
          placeholder="Фильм"
          required 
          onChange={handleChange} 
          name="movie" 
          type="text"
          value={request.value} 
        />
        
        <button type="submit" className="search__button">
          <img className="search__button-img" src={find} alt='найти' />
        </button>
      </div>
      <span className="search__error">{error.text}</span>
      <FilterCheckbox handleCheckbox={handleCheckbox} checkbox={checkbox} />
      </form>
    </div>

  );
};

export default SearchForm;
