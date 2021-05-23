// import logo from './logo.svg';
// import './App.css';
// import logo from '../images/header/logo';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
    <Header/>
    <Main/>
    <Footer/>
    <section className="popup popup_type_edit">
      <button className="popup__close-button" type="reset" aria-label="Close"></button>
      <form className="popup__container popup__container_type_edit" name="profileEditor" novalidate>
        <h2 className="popup__title">Редактировать профиль</h2>
        <input className="popup__input popup__input_purpose_name" name="element-name" type="text" value="" placeholder="Имя"
          required minlength="2" maxlength="40" />
          <span className="popup__input-error element-name-placeholder"></span>
        <input className="popup__input popup__input_purpose_description" name="element-link" type="text" value="" 
          placeholder="Описание деятельности" required minlength="2" maxlength="200" />
        <span className="popup__input-error element-link-placeholder"></span>
        <button className="popup__confirm" type="submit">Сохранить</button>
      </form>
    </section>

    <section className="popup popup_type_add">
      <button className="popup__close-button" type="reset" aria-label="Close"></button>
      <form className="popup__container popup__container_type_add" name="profileEditor" novalidate>
        <h2 className="popup__title">Новое место</h2>
        <input className="popup__input popup__input_purpose_name" name="profileEditor-name" type="text" value="" placeholder="Название"
          required minlength="2" maxlength="30" />
        <span className="popup__input-error profileEditor-name-placeholder"></span>
        <input className="popup__input popup__input_purpose_description" name="profileEditor-description" type="url" value="" 
          placeholder="Ссылка на картинку" required />
        <span className="popup__input-error profileEditor-description-placeholder"></span>
        <button className="popup__confirm" type="submit">Создать</button>
      </form>
    </section>

    <section className="popup popup_type_image">
      <button className="popup__close-button" type="reset" aria-label="Close"></button>
      <figure className="popup__container popup__figure">
        <img className="popup__image" src=" " alt=" " />
        <figcaption className="popup__figcaption"></figcaption>
      </figure>
    </section>
    
    <section className="popup popup_type_delete">
      <button className="popup__close-button" type="reset" aria-label="Close"></button>
      <div className="popup__container popup__container_type_delete">
        <p className="popup__delete-question">Вы уверены?</p>
        <button className="popup__confirm popup__confirm_active" type="submit">Да</button>
      </div>
    </section>

    <section className="popup popup_type_edit-avatar">
      <button className="popup__close-button" type="reset" aria-label="Close"></button>
      <form className="popup__container popup__container_type_edit-avatar" name="avatarEditor" novalidate>
        <h2 className="popup__title">Обновить аватар</h2>
        <input className="popup__input popup__input_purpose_description popup__input_purpose_link" name="avatarEditor-link" type="url" value="" 
          placeholder="Ссылка на картинку" required />
        <span className="popup__input-error avatarEditor-link-placeholder"></span>
        <button className="popup__confirm" type="submit">Сохранить</button>
      </form>
    </section>

    </div>
  );
}

export default App;
