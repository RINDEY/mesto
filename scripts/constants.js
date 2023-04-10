export {config, elements, popupImage, popupCardImage, popupImageDescription};

const popupImage = document.querySelector('.popup_image');
const popupCardImage = document.querySelector('.popup__card-image');
const popupImageDescription = document.querySelector('.popup__caption');

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__error_visible',
};

const elements = [
  {
    name: 'Карачаевск',
    link: './images/karachaevsk.png'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/elbrus.png'
  },
  {
    name: 'Домбай',
    link: './images/dombay.png'
  },
  {
    name: 'Сахалин',
    link: './images/sakhalin.jpg'
  },
  {
    name: 'Курилы',
    link: './images/kurily.jpg'
  },
  {
    name: 'Карелия',
    link: './images/karelia.jpg'
  },
];