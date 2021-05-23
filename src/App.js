// import logo from './logo.svg';
// import './App.css';
import logo from './images/header/logo.svg';

function App() {
  return (
    <div className="App">
    <header className="header body__header">
      {/* <img className="header__logo" /src="<%=require('./images/header/logo.svg')%>" alt="Логотип сайта Mesto"> */}
      <img className="header__logo" src={logo} alt="Логотип сайта Mesto"/>
    </header>
    <main className="main">
      <section className="profile main__profile">
        <div className="profile__main-info">
          <div className="profile__avatar"></div>
        
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__edit" type="button" aria-label="Edit"></button>
            <p className="profile__description">Исследователь океана</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Add">
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
    <footer className="footer body__footer">
      &copy;2020 Mesto Russia
    </footer>
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
