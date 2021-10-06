import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import pic1 from '../../images/pic1.png';
import pic2 from '../../images/pic2.png';
import pic3 from '../../images/pic3.png';



function MoviesCardList(props) {
  return (
      
    <section className='cards movies__cards'>
      <ul className='cards-list'>
        <MoviesCard image={pic1}/>
        <MoviesCard image={pic2}/>
        <MoviesCard image={pic3}/>
        <MoviesCard image={pic1}/>
        <MoviesCard image={pic2}/>
        <MoviesCard image={pic3}/>
      </ul>
      
    </section>
    
    
  );
}

export default MoviesCardList;