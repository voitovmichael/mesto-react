import React from 'react';
import {api} from '../utils/api.js'
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContexts.js';
import { CardContext } from '../contexts/CardContext.js';
export default class Main extends React.Component {
  static contextType = CurrentUserContext;
  constructor(props) {
    super (props);
    this.state = {
      cards: []
    }
    this.api = api;
    // const handleCardLike = this.handleCardLike.bind(this);
    // const handleCardLike = this.handleCardLike.bind(this);
  }

  reject = (err) => {
    console.log(err);
  }

  componentDidMount() {
     this.api.getCards()
    .then((data) => {
      this.setState({cards: data})
    })
    .catch(this.reject)
  }

  handleCardLike = (card) => {
    const isLike = card.likes.some(i => i._id === this.context._id);
    api.changeLike(card._id, !isLike)
    .then((newCard) => {
      const cards = this.state.cards.map((c) => c._id === newCard._id ? newCard : c);
      this.setState({cards: cards})
      // this.setState((state) => state.map((c) => c._id === card._id ? newCard : c))
    })
    .catch(this.reject);
  }

  handleCardDelete = (delCard) => {
    api.deleteCard(delCard._id)
    .catch(this.reject);
    const cards = this.state.cards.filter((card) => delCard._id !== card._id ? card : null);
    this.setState({cards: cards});
  }

  render() {
    const cards = this.state.cards;
    const cardsArr = cards.map((card) => {
     return (
      <CardContext.Provider key={card._id} value={card}>
        <Card onCardClick={this.props.onCardClick}
        onCardLike={this.handleCardLike}
        onCardDelete={this.handleCardDelete}
        currentUserId={this.context._id}
        /> 
      </CardContext.Provider>
     )
    });
    return (
      <main className="main">
        <section className="profile main__profile">
          <div className="profile__main-info">
            <div className="profile__avatar" onClick={this.props.onEditAvatar}
              style={{backgroundImage: `url(${this.context.avatar})`}}></div>
            <div className="profile__info">
              <h1 className="profile__name">{this.context.name}</h1>
              <button className="profile__edit" type="button" aria-label="Edit" onClick={this.props.onEditProfile}></button>
              <p className="profile__description">{this.about}</p>
            </div>
          </div>
          <button className="profile__add-button" type="button" aria-label="Add" onClick={this.props.onAddPlace}>
          </button>
        </section>
        <section className="elements main__elements">
          <ul className="elements__list">
          {cardsArr}
          </ul>
        </section>
      </main>
    )
  }
}