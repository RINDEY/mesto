import { openPopup } from "./utils.js";

export default class Card {
  constructor(card, templateElement) {
    this._name = card.name;
    this._link = card.link;
    this._template = templateElement;
    this._popup = document.querySelector('.popup_image');
    this._popupImage = this._popup.querySelector('.popup__card-image');
    this._caption = this._popup.querySelector('.popup__caption');
    this._openPopup = () => {
      this._caption.textContent = this._name;
      this._popupImage.src = this._link;
      this._popupImage.alt = this._name;
      openPopup(this._popup);
    }
}
createElement() {
  this._card = document.querySelector(this._template).content.querySelector('.element').cloneNode(true);
  this._title = this._card.querySelector('.element__description');
  this._image= this._card.querySelector('.element__photo');
  this._title.textContent = this._name;
  this._image.src = this._link;
  this._image.alt = this._name;
  this._listener();
  return this._card;
}

_makeLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

_deleteCard(evt) {
  evt.target.closest('.element').remove();
}

_listener() {
  this._card.querySelector('.element__like').addEventListener('click', this._makeLike);
  this._card.querySelector('.element__photo-basket').addEventListener('click', this._deleteCard);
  this._image.addEventListener('click', this._openPopup);
}
}