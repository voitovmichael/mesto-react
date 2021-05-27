import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.onCardClick(this.props.card)
  }

  render() {
    return (
          <li className="element" key={this.props.card._id}>
            <div className="element__delete">
              <button className="element__delete-button"></button> 
            </div>
            <img className="element__image" src={this.props.card.link} alt={this.props.card.name}
              onClick={this.handleClick}
            />
            <div className="element__group">
              <h2 className="element__name">{this.props.card.name}</h2>
              <div className="element__like-group">
                <button className="element__like"></button>
                <span className="element__like-counter">{this.props.card.link.length}</span>
              </div>
            </div>
          </li>
    )
  }
}