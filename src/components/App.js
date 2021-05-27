import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App (props) {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  
  const [selectedCard, setSelectedCard] = React.useState(null);
  const _ESC_CODE = 27;

  const childrenEditProfile = (
    <>
      <input className="popup__input popup__input_purpose_name" name="element-name" type="text" placeholder="Имя"
        required minLength="2" maxLength="40" />
      <span className="popup__input-error element-name-placeholder"></span>
      <input className="popup__input popup__input_purpose_description" name="element-link" type="text"  
        placeholder="Описание деятельности" required minLength="2" maxLength="200" />
      <span className="popup__input-error element-link-placeholder"></span>
      {/* <button className="popup__confirm" type="submit">Сохранить</button> */}
    </>
  );

  const childrenAddPlace = (
    <>
      <input className="popup__input popup__input_purpose_name" name="profileEditor-name" type="text"  placeholder="Название"
        required minLength="2" maxLength="30" />
      <span className="popup__input-error profileEditor-name-placeholder"></span>
      <input className="popup__input popup__input_purpose_description" name="profileEditor-description" type="url"  
        placeholder="Ссылка на картинку" required />
      <span className="popup__input-error profileEditor-description-placeholder"></span>
      {/* <button className="popup__confirm" type="submit">Создать</button> */}
    </>
  )

  const childrenEditAvatar = (
    <>
      <input className="popup__input popup__input_purpose_description popup__input_purpose_link" name="avatarEditor-link" type="url"  
        placeholder="Ссылка на картинку" required />
      <span className="popup__input-error avatarEditor-link-placeholder"></span>
    </>
  )

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true)
  }

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  }

  // обработчик открытия popup-a добавления карточки
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  }

  // обработчик открытия карточки
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  // закрытие всех popup-ов
  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
    document.removeEventListener('keyup', clickEscape);
  }

  // обработчик закрытия Overlay
  const closeOverlay = (evt) => {
    if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
      closeAllPopups();
    }
  } 

  // обработчик нажатия ESC
  const clickEscape = (evt) => {
    if(evt.keyCode === _ESC_CODE) {
      closeAllPopups();
    }
  }

    return (
      <div className="App">
      <Header/>
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer/>

      <PopupWithForm name="editProfile" title="Редактировать профиль" 
        isOpen={isEditProfilePopupOpen}
        onClose={closeOverlay} onCloseEscape={clickEscape}
        buttonText='Сохранить'>
        {childrenEditProfile}  
      </PopupWithForm>

      <PopupWithForm name="addPlace" title="Новое место" isOpen={isAddPlacePopupOpen}
        onClose={closeOverlay} onCloseEscape={clickEscape} buttonText='Создать'>
        {childrenAddPlace}
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeOverlay} onCloseEscape={clickEscape}/>
      
      <PopupWithForm name="editAvatar" title="Обновить аватар"isOpen={isEditAvatarPopupOpen}
        onClose={closeOverlay} onCloseEscape={clickEscape} buttonText='Сохранить'>
        {childrenEditAvatar}
      </PopupWithForm>
    
      </div>
    );
}

export default App;
