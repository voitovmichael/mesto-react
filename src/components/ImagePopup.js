import React from 'react';

export default class ImagePopup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={`popup popup_type_image ${this.props.card && 'popup_opened'}`} onClick={this.props.onClose}>
      <button className="popup__close-button" type="reset" aria-label="Close"></button>
      <figure className="popup__container popup__figure">
        <img className="popup__image" src={this.props.card && this.props.card.link} 
          alt={this.props.card && this.props.card.name} />
        <figcaption className="popup__figcaption">{this.props.card && this.props.card.name}</figcaption>
      </figure>
      </section>
    )
  }
}