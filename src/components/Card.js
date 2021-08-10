import React from 'react';
import { CardContext } from "../contexts/CardContext.js";
import { CurrentUserContext } from '../contexts/CurrentUserContexts.js';
function Card (props){
  const card = React.useContext(CardContext);
  const currentUser = React.useContext(CurrentUserContext);
  const handleClick = () => {
    props.onCardClick(card)
  }
  const isOwn = card._id === currentUser._id;
  return (
        <li className="element">
          <div className={`element__delete ${isOwn ? 'element__delete_active' : ''}`}>
            <button className="element__delete-button"></button> 
          </div>
          <img className="element__image" src={card.link} alt={card.name}
            onClick={handleClick}
          />
          <div className="element__group">
            <h2 className="element__name">{card.name}</h2>
            <div className="element__like-group">
              <button className="element__like"></button>
              <span className="element__like-counter">{card.likes.length}</span>
            </div>
          </div>
        </li>
  )
}

export default Card;