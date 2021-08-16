(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),s=n.n(r),o=(n(14),n(9)),i=n(2),l=n.p+"static/media/logo.bbe2a6ea.svg",u=n(0);var p=function(e){return Object(u.jsx)("header",{className:"header body__header",children:Object(u.jsx)("img",{className:"header__logo",src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430 Mesto"})})},d=c.a.createContext();var _=function(e){var t=c.a.useContext(d),n=e.card.owner._id===t._id,a=e.card.likes.length>0;return Object(u.jsxs)("li",{className:"element",children:[Object(u.jsx)("div",{className:"element__delete ".concat(n?"element__delete_active":""),children:Object(u.jsx)("button",{className:"element__delete-button",onClick:function(){e.onCardDelete(e.card)}})}),Object(u.jsx)("img",{className:"element__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(u.jsxs)("div",{className:"element__group",children:[Object(u.jsx)("h2",{className:"element__name",children:e.card.name}),Object(u.jsxs)("div",{className:"element__like-group",children:[Object(u.jsx)("button",{className:"element__like ".concat(a?"element__like_active":""),onClick:function(){e.onCardLike(e.card)}}),Object(u.jsx)("span",{className:"element__like-counter",children:e.card.likes.length})]})]})]})};function h(e){var t=c.a.useContext(d),n=e.cards.map((function(t){return Object(u.jsx)(_,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}));return Object(u.jsxs)("main",{className:"main",children:[Object(u.jsxs)("section",{className:"profile main__profile",children:[Object(u.jsxs)("div",{className:"profile__main-info",children:[Object(u.jsx)("div",{className:"profile__avatar",onClick:e.onEditAvatar,style:{backgroundImage:"url(".concat(t.avatar,")")}}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsx)("h1",{className:"profile__name",children:t.name}),Object(u.jsx)("button",{className:"profile__edit",type:"button","aria-label":"Edit",onClick:e.onEditProfile}),Object(u.jsx)("p",{className:"profile__description",children:t.about})]})]}),Object(u.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"Add",onClick:e.onAddPlace})]}),Object(u.jsx)("section",{className:"elements main__elements",children:Object(u.jsx)("ul",{className:"elements__list",children:Object(u.jsx)(d.Provider,{value:t,children:n})})})]})}function m(e){return Object(u.jsx)("footer",{className:"footer body__footer",children:"\xa92021 Mesto Russia"})}var j=function(e){return Object(u.jsxs)("section",{className:"popup popup_type_image ".concat(e.card&&"popup_opened"),onClick:e.onClose,children:[Object(u.jsx)("button",{className:"popup__close-button",type:"reset","aria-label":"Close"}),Object(u.jsxs)("figure",{className:"popup__container popup__figure",children:[Object(u.jsx)("img",{className:"popup__image",src:e.card&&e.card.link,alt:e.card&&e.card.name}),Object(u.jsx)("figcaption",{className:"popup__figcaption",children:e.card&&e.card.name})]})]})},b=n(7),f=n(8),v=(n.p,new(function(){function e(t){Object(b.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(f.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._resolve)}},{key:"getCards",value:function(e){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._resolve)}},{key:"changeUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._resolve)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._resolve)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._resolve)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._resolve)}},{key:"changeLike",value:function(e,t){var n=t?"PUT":"DELETE";return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:n,headers:this._headers}).then(this._resolve)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._resolve)}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._resolve)}},{key:"_resolve",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-23",headers:{authorization:"e2787495-d10a-4c6a-a5f2-7d4ee36816fa","Content-Type":"application/json"}}));var O=function(e){return Object(u.jsxs)("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),onClick:e.onClose,children:[Object(u.jsx)("button",{className:"popup__close-button",type:"reset","aria-label":"Close"}),Object(u.jsxs)("form",{className:"popup__container",name:e.name,onSubmit:e.onSubmit,noValidate:!0,children:[Object(u.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(u.jsx)("button",{className:"popup__confirm popup__confirm_active",type:"submit",children:e.buttonText})]})]})};var x=function(e){var t=c.a.useContext(d),n=c.a.useState("\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e"),a=Object(i.a)(n,2),r=a[0],s=a[1],o=c.a.useState("\u041c\u043e\u0440\u0441\u043a\u043e\u0439 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c"),l=Object(i.a)(o,2),p=l[0],_=l[1];c.a.useEffect((function(){t.name&&s(t.name),t.about&&_(t.about)}),[t]);var h=Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{className:"popup__input popup__input_purpose_name",name:"element-name",type:"text",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",value:r,onChange:function(e){s(e.currentTarget.value)}}),Object(u.jsx)("span",{className:"popup__input-error element-name-placeholder"}),Object(u.jsx)("input",{className:"popup__input popup__input_purpose_description",name:"element-link",type:"text",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",required:!0,minLength:"2",maxLength:"200",value:p,onChange:function(e){var t=e.currentTarget.value?e.currentTarget.value:p;_(t)}}),Object(u.jsx)("span",{className:"popup__input-error element-link-placeholder"})]});return Object(u.jsx)(O,{name:"editProfile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:r,about:p})},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:h})};var k=function(e){var t=c.a.useRef(null),n=Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{className:"popup__input popup__input_purpose_description popup__input_purpose_link",name:"avatarEditor-link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:t}),Object(u.jsx)("span",{className:"popup__input-error avatarEditor-link-placeholder"})]});return Object(u.jsx)(O,{name:"editAvatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){var a=t.current.value;n.preventDefault(),e.onUpdateAvatar(a)},children:n})};var C=function(e){var t=c.a.useState(""),n=Object(i.a)(t,2),a=n[0],r=n[1],s=c.a.useState(""),o=Object(i.a)(s,2),l=o[0],p=o[1],d=Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{className:"popup__input popup__input_purpose_name",name:"profileEditor-name",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",value:a,onChange:function(e){r(e.currentTarget.value)}}),Object(u.jsx)("span",{className:"popup__input-error profileEditor-name-placeholder"}),Object(u.jsx)("input",{className:"popup__input popup__input_purpose_description",name:"profileEditor-description",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:l,onChange:function(e){p(e.currentTarget.value)}}),Object(u.jsx)("span",{className:"popup__input-error profileEditor-description-placeholder"})]});return Object(u.jsx)(O,{name:"addPlace",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:l})},children:d})};var g=function(e){var t=c.a.useState(!1),n=Object(i.a)(t,2),a=n[0],r=n[1],s=c.a.useState(!1),l=Object(i.a)(s,2),_=l[0],b=l[1],f=c.a.useState(!1),O=Object(i.a)(f,2),g=O[0],N=O[1],y=c.a.useState({}),E=Object(i.a)(y,2),L=E[0],S=E[1],T=c.a.useState(null),P=Object(i.a)(T,2),A=P[0],U=P[1],D=c.a.useState([]),I=Object(i.a)(D,2),J=I[0],w=I[1],q=function(e){console.log(e)};c.a.useEffect((function(){var e=function(e){27===e.keyCode&&M()};return document.addEventListener("keyup",e),Promise.all([v.getUserInfo(),v.getCards()]).then((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];S(n),w(a)})).catch(q),function(){document.removeEventListener("keyup",e)}}),[]);var F=function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close-button"))&&M()},M=function(){N(!1),r(!1),b(!1),U(null)};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{}),Object(u.jsxs)(d.Provider,{value:L,children:[Object(u.jsx)(h,{onEditProfile:function(){r(!0)},onAddPlace:function(){b(!0)},onEditAvatar:function(){N(!0)},onCardClick:function(e){U(e)},cards:J,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===L._id}));v.changeLike(e._id,!t).then((function(e){var t=J.map((function(t){return t._id===e._id?e:t}));w(t)})).catch(q)},onCardDelete:function(e){v.deleteCard(e._id).then((function(){var t=J.filter((function(t){return e._id!==t._id?t:null}));w(t)})).catch(q)},on:!0}),Object(u.jsx)(m,{}),Object(u.jsx)(x,{isOpen:a,onClose:F,onUpdateUser:function(e){var t=e.name,n=e.about;t&&n&&v.changeUserInfo({name:t,about:n}).then((function(e){S(e),M()}))}}),Object(u.jsx)(C,{isOpen:_,onClose:F,onAddPlace:function(e){var t=e.name,n=e.link;v.addCard({name:t,link:n}).then((function(e){w([e].concat(Object(o.a)(J))),M()})).catch(q)}}),Object(u.jsx)(j,{card:A,onClose:F}),Object(u.jsx)(k,{isOpen:g,onClose:F,onUpdateAvatar:function(e){e&&v.changeAvatar({avatar:e}).then((function(e){S(e),M()}))}})]})]})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.72443ee1.chunk.js.map