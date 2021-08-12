import React from 'react';
import PopupWithForm from "./PopupWithForm.js"

function AddPlacePopup (props) {
  const urlRef = React.useRef();
  const [name, setName] = React.useState('');
  //Объявляем метод для обработки изменения popup__input_purpose_name
  const nameChange = (evt) => {
    setName(evt.currentTarget.value);
  }
  //Объявляем обработчик отправки формы
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onAddPlace({name, link: urlRef.current.value});
  }
  const childrenAddPlace = (
    <>
      <input className="popup__input popup__input_purpose_name" name="profileEditor-name" type="text"  placeholder="Название"
        required minLength="2" maxLength="30" value={name} onChange={nameChange}/>
      <span className="popup__input-error profileEditor-name-placeholder"></span>
      <input className="popup__input popup__input_purpose_description" name="profileEditor-description" type="url"  
        placeholder="Ссылка на картинку" required ref={urlRef}/>
      <span className="popup__input-error profileEditor-description-placeholder"></span>
    </>
  )
  return (
    <PopupWithForm name="addPlace" title="Новое место" isOpen={props.isOpen}
              onClose={props.onClose} buttonText='Создать' onSubmit={handleSubmit}>
              {childrenAddPlace}
    </PopupWithForm>
  )
}

export default AddPlacePopup;