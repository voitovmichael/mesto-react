import React from 'react';
import {api} from '../utils/api.js'
import Card from './Card.js';
export default class Main extends React.Component {

  constructor(props) {
    super (props);
    this.state = {
      userName: 'Жак Кусто',
      userDescription: 'Исследователь океанов',
      userAvatar: '../images/profile/Avatar.jpg',
      cards: []
    }
    this.api = api;
  }

  reject = (err) => {
    console.log(err);
  }

  componentDidMount() {
    this.api.getUserInfo()
    .then((data) => {
      this.setState({
        'userName': data.name,
        'userDecription': data.about,
        'userAvatar': data.avatar
      });
    })
    .catch(this.reject);

    this.api.getCards()
    .then((data) => {
      this.setState({cards: data})
    })
    .catch(this.reject)
  }

  render() {
    const cards = this.state.cards;
    const cardsArr = cards.map((card) => <Card card={card} onCardClick={this.props.onCardClick}/>);
    if (cards.length > 0) {
    return (
      <main className="main">
        <section className="profile main__profile">
          <div className="profile__main-info">
            <div className="profile__avatar" onClick={this.props.onEditAvatar}
              style={{backgroundImage: `url(${this.state.userAvatar})`}}></div>
            <div className="profile__info">
              <h1 className="profile__name">{this.state.userName}</h1>
              <button className="profile__edit" type="button" aria-label="Edit" onClick={this.props.onEditProfile}></button>
              <p className="profile__description">{this.state.userDescription}</p>
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
      } else {
        return (<> </>)
      }
  }
}