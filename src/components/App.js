import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import {api} from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContexts.js'
import EditProfilePopup from './EditProfilePopup.js';

function App (props) {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const [selectedCard, setSelectedCard] = React.useState(null);
  const _ESC_CODE = 27;

  // const childrenEditProfile = (
  //   <>
  //     <input className="popup__input popup__input_purpose_name" name="element-name" type="text" placeholder="Имя"
  //       required minLength="2" maxLength="40" />
  //     <span className="popup__input-error element-name-placeholder"></span>
  //     <input className="popup__input popup__input_purpose_description" name="element-link" type="text"  
  //       placeholder="Описание деятельности" required minLength="2" maxLength="200" />
  //     <span className="popup__input-error element-link-placeholder"></span>
  //     {/* <button className="popup__confirm" type="submit">Сохранить</button> */}
  //   </>
  // );

  const childrenAddPlace = (
    <>
      <input className="popup__input popup__input_purpose_name" name="profileEditor-name" type="text"  placeholder="Название"
        required minLength="2" maxLength="30" />
      <span className="popup__input-error profileEditor-name-placeholder"></span>
      <input className="popup__input popup__input_purpose_description" name="profileEditor-description" type="url"  
        placeholder="Ссылка на картинку" required />
      <span className="popup__input-error profileEditor-description-placeholder"></span>
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

  // обработчик нажатия ESC
  React.useEffect(() => {
    const clickEscape = (evt) => {
      if(evt.keyCode === _ESC_CODE) {
        closeAllPopups();
      }
    }

    document.addEventListener('keyup', clickEscape);
    
    //делаем запрос данных текщего пользователя через API
    api.getUserInfo()
    .then((response) => {
      setCurrentUser(response)
    });

    return () => {
      document.removeEventListener('keyup', clickEscape);
    }
  }, []);

  // обработчик закрытия Overlay
  const closeOverlay = (evt) => {
    if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
      closeAllPopups();
    }
  }

  // закрытие всех popup-ов
  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  //объявляем обновление данных по пользователю
  const handleUpdateuser = ({name, about}) => {
    api.changeUserInfo({name, about});
    closeAllPopups();
  }

  return (
    <div className="App">
      <Header/>
    <CurrentUserContext.Provider value={currentUser}>
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer/>

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeOverlay} onUpdateUser={handleUpdateuser}/>

        <PopupWithForm name="addPlace" title="Новое место" isOpen={isAddPlacePopupOpen}
          onClose={closeOverlay} buttonText='Создать'>
          {childrenAddPlace}
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeOverlay} />
        
        <PopupWithForm name="editAvatar" title="Обновить аватар"isOpen={isEditAvatarPopupOpen}
          onClose={closeOverlay} buttonText='Сохранить'>
          {childrenEditAvatar}
        </PopupWithForm>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
