import React from 'react';
import './ShowMore.css';

function ShowMore(props) {
  return(
    <div className="more">
    {!props.isAllCardsRendered && <button className="more__button" onClick={() => props.renderCardList(props.countCardsOfWidth, props.cardList)}>Ещё</button>}
    </div>
  );
}

export default ShowMore;