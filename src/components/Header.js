import React from 'react';
import logo from '../images/header/logo.svg';

export default class Header extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <header className="header body__header">
      <img className="header__logo" src={logo} alt="Логотип сайта Mesto"/>
      </header>
    )
  }
}