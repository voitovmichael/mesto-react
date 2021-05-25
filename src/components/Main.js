import React from 'react';
import {api} from '../utils/api.js'
export default class Main extends React.Component {

  constructor(props) {
    super (props);
    this.state = {
      userName: 'Жак Кусто',
      userDescription: 'Исследователь океанов',
      userAvatar: '../images/profile/Avatar.jpg'
    }
    this.api = api;
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
  }
  
  // handleEditAvatarClick = () => {
  //   this.popupEditAvatar = document.querySelector('.popup_type_editAvatar');
  //   this.popupEditAvatar.classList.add('popup_opened');
  // }

  // handleEditProfileClick = () => {
  //   this.popupEditProfile = document.querySelector('.popup_type_editProfile');
  //   this.popupEditProfile.classList.add('popup_opened');
  // }

  // handleAddPlaceClick = () => {
  //   this.popupAddPlace = document.querySelector('.popup_type_addPlace');
  //   this.popupAddPlace.classList.add('popup_opened');
  // }

  render() {
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
          </ul>
        </section>
        <template className="element-template">
          <li className="element">
            <div className="element__delete">
              <button className="element__delete-button"></button> 
            </div>
            <img className="element__image" src=" " alt=" "/>
            <div className="element__group">
              <h2 className="element__name"></h2>
              <div className="element__like-group">
                <button className="element__like"></button>
                <span className="element__like-counter">0</span>
              </div>
            </div>
          </li>
        </template>
      </main>
    )
  }
}