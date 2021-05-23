export default function Main (props) {
  return (
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
  )
}