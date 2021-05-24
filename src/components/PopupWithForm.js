import React from 'react';

export default class PopupWithForm extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={`popup popup_type_${this.props.name} ${this.props.isOpen && 'popup_opened'}`}
        onClick={this.props.onClose}
      >
      <button className="popup__close-button" type="reset" aria-label="Close"></button>
      <form className="popup__container popup__container_type_edit" name={this.props.name} novalidate>
        <h2 className="popup__title">{this.props.title}</h2>
        {this.props.children}
      </form>
    </section>
    )
  }
}