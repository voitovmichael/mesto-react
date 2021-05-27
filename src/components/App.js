// import logo from './logo.svg';
// import './App.css';
// import logo from '../images/header/logo';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: null
    };
    this._ESC_CODE = 27;
  }

  handleOnEscClick () {
    document.addEventListener('keyup', this.closeAllPopups);
  }

  handleEditAvatarClick = () => {
    this.setState({isEditAvatarPopupOpen: true});
    document.addEventListener('keyup', this.closeAllPopups);
  }

  handleEditProfileClick = () => {
    this.setState({isEditProfilePopupOpen: true});
    document.addEventListener('keyup', this.closeAllPopups);
  }

  // обработчик открытия popup-a добавления карточки
  handleAddPlaceClick = () => {
    this.setState({isAddPlacePopupOpen: true});
    document.addEventListener('keyup', this.closeAllPopups);
  }

  // обработчик открытия карточки
  handleCardClick = (card) => {
    this.setState({selectedCard: card})
  }

  // закрытие всех popup-ов
  closeAllPopups = (evt) => {
    if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')
    || evt.keyCode === this._ESC_CODE) {
      this.setState({
        isEditAvatarPopupOpen: false,
        isEditProfilePopupOpen: false,
        isAddPlacePopupOpen: false,
        selectedCard: null
      })
    }
  }

  render() {
    const childrenEditProfile = (
      <>
        <input className="popup__input popup__input_purpose_name" name="element-name" type="text" value="" placeholder="Имя"
          required minlength="2" maxlength="40" />
        <span className="popup__input-error element-name-placeholder"></span>
        <input className="popup__input popup__input_purpose_description" name="element-link" type="text" value="" 
          placeholder="Описание деятельности" required minlength="2" maxlength="200" />
        <span className="popup__input-error element-link-placeholder"></span>
        <button className="popup__confirm" type="submit">Сохранить</button>
      </>
    );

    const childrenAddPlace = (
      <>
        <input className="popup__input popup__input_purpose_name" name="profileEditor-name" type="text" value="" placeholder="Название"
          required minlength="2" maxlength="30" />
        <span className="popup__input-error profileEditor-name-placeholder"></span>
        <input className="popup__input popup__input_purpose_description" name="profileEditor-description" type="url" value="" 
          placeholder="Ссылка на картинку" required />
        <span className="popup__input-error profileEditor-description-placeholder"></span>
        <button className="popup__confirm" type="submit">Создать</button>
      </>
    )

    const childrenEditAvatar = (
      <>
        <input className="popup__input popup__input_purpose_description popup__input_purpose_link" name="avatarEditor-link" type="url" value="" 
          placeholder="Ссылка на картинку" required />
        <span className="popup__input-error avatarEditor-link-placeholder"></span>
        <button className="popup__confirm" type="submit">Сохранить</button>
      </>
    )

    return (
      <div className="App">
      <Header/>
      <Main 
        onEditProfile={this.handleEditProfileClick}
        onAddPlace={this.handleAddPlaceClick}
        onEditAvatar={this.handleEditAvatarClick}
        onCardClick={this.handleCardClick}
      />
      <Footer/>
      <PopupWithForm name="editProfile" title="Редактировать профиль" 
        children={childrenEditProfile} isOpen={this.state.isEditProfilePopupOpen}
        onClose={this.closeAllPopups}
      />
      <PopupWithForm name="addPlace" title="Новое место" children={childrenAddPlace}
        isOpen={this.state.isAddPlacePopupOpen}
        onClose={this.closeAllPopups}
      />
      <ImagePopup card={this.state.selectedCard} onClose={this.closeAllPopups}/>
      <PopupWithForm name="editAvatar" title="Обновить аватар" children={childrenEditAvatar}
        isOpen={this.state.isEditAvatarPopupOpen}
        onClose={this.closeAllPopups}
      />
      </div>
    );
  }
}

export default App;
