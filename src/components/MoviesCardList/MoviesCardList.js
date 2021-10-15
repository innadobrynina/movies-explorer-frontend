import React from 'react';
import { useLocation } from 'react-router';
import CardsNotFound from '../CardsNotFound/CardsNotFound';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import ShowMore from '../ShowMore/ShowMore';


function MoviesCardList(props) {
  
  const location = useLocation();
  const [cardList, setCardList] = React.useState([]);
  const [isAllCardsRendered, setIsAllCardsRendered] = React.useState(false);
  const [countCardsOfWidth, setCountCardsOfWidth] = React.useState(0);
	
  const renderCards = (card) => (
    <MoviesCard key={card.id || card.movieId} card={card} cardId={card._id} onSaveMovie={props.onSaveMovie} onUnsaveMovie={props.onUnsaveMovie} cardList={cardList} savedMovies={props.savedMovies} />
  )

  function renderCardList(countCardsOfWidth, cardList) {
    setIsAllCardsRendered(false);

    const cardsForRender = [];

    const countCardsForRender = location.pathname === "/saved-movies" ? props.cardList?.length : countCardsOfWidth;

    for (let i = 0; i < countCardsForRender; i++) {
      const newCardIndex = i + cardList.length
      const newCard = props.cardList[newCardIndex] || 0;

      if (newCardIndex >= props.cardList.length - 1) {
        if (newCardIndex === props.cardList.length - 1) {
          cardsForRender.push(newCard);
        }
        setIsAllCardsRendered(true);
        break;
    }

    cardsForRender.push(newCard);
  }
  
  setCardList([...cardList, ...cardsForRender]);
  }

  React.useEffect(() => {
    renderCardList(countCardsOfWidth, []);
    // eslint-disable-next-line
  }, [props.cardList])

  function checkCountOfCards() {
    const width = window.innerWidth;
    if (width > 800) {
      setCountCardsOfWidth(3);
    }
    if (width > 650 && width <= 800) {
      setCountCardsOfWidth(2);
    }
    if (width <= 650) {
      setCountCardsOfWidth(1);
    }
  }

  const checkCountOfCardsCallback = () => {
    checkCountOfCards();
  }

  React.useEffect(() => {
    renderCardList(countCardsOfWidth, []);
    // eslint-disable-next-line
  }, [countCardsOfWidth]);

  React.useEffect(() => {
    if (cardList.length === 0) return setIsAllCardsRendered(true);
  }, [cardList])

  React.useEffect(() => {
    window.addEventListener('resize', checkCountOfCardsCallback)

    checkCountOfCards();

    renderCardList(countCardsOfWidth, []);
    setIsAllCardsRendered(false);

    return () => {
      window.removeEventListener('resize', checkCountOfCardsCallback)
    }

    // eslint-disable-next-line
  }, []);

  return (
      
    <section className='movies__cards'>
      {props.isSearching && <Preloader />}
      {!props.isSearching && props.isNotFound && <CardsNotFound />}
      {!props.isSearching && props.isNotFound && props.isResult &&
        <>
        <ul className='cards-list'>
            {
                cardList.map(renderCards)
            }
        </ul>
      <ShowMore renderCards={renderCardList} isAllCardsRendered={isAllCardsRendered} countCardsOfWidth={countCardsOfWidth} cardList={cardList} />
      </>
    }
    </section>
  )
}

export default MoviesCardList;
