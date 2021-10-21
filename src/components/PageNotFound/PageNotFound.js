import './PageNotFound.css';
import { useHistory } from 'react-router-dom';

const PageNotFound = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  }
  return (
    <div className='page-not-found'>
      <h2 className='page-not-found__title'>404</h2>
      <p className='page-not-found__text'>Страница не найдена</p>
      <button className='page-not-found__link' onClick={handleGoBack}>Назад</button>
    </div>
  )
}

export default PageNotFound;