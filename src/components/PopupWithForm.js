function PopupWithForm (props){
  
  document.addEventListener('keyup', props.onCloseEscape);

  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}
      onClick={props.onClose}
    >
    <button className="popup__close-button" type="reset" aria-label="Close"></button>
    <form className="popup__container popup__container_type_edit" name={props.name} noValidate>
      <h2 className="popup__title">{props.title}</h2>
      {props.children}
      <button className="popup__confirm" type="submit">{props.buttonText}</button>
    </form>
  </section>
  )
}

export default PopupWithForm;