import React from 'react';

export default class ImagePopup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="popup popup_type_image">
      <button className="popup__close-button" type="reset" aria-label="Close"></button>
      <figure className="popup__container popup__figure">
        <img className="popup__image" src=" " alt=" " />
        <figcaption className="popup__figcaption"></figcaption>
      </figure>
      </section>
    )
  }
}