function Card (props){
  
  const handleClick = () => {
    props.onCardClick(props.card)
  }

  return (
        <li className="element">
          <div className="element__delete">
            <button className="element__delete-button"></button> 
          </div>
          <img className="element__image" src={props.card.link} alt={props.card.name}
            onClick={handleClick}
          />
          <div className="element__group">
            <h2 className="element__name">{props.card.name}</h2>
            <div className="element__like-group">
              <button className="element__like"></button>
              <span className="element__like-counter">{props.card.likes.length}</span>
            </div>
          </div>
        </li>
  )
}

export default Card;