import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {config, elements} from "./constants.js";
import { openPopup, closePopup } from "./utils.js";

const formEditProfile = document.querySelectorAll('.popup__form');

const editButton = document.querySelector('.profile__button');
const closeAddButtons = document.querySelectorAll('.popup__button-close');

const nameInput = document.querySelector('.popup__input_type_name');
const nameInfo = document.querySelector('.profile__title');

const jobInput = document.querySelector('.popup__input_type_job');
const jobInfo = document.querySelector('.profile__text');

const editPopup = document.querySelector('.popup_edit')

const popupAddCard = document.querySelector('.popup_add-card');
const formAddElement = document.querySelector('.popup__add-form');
const addButton = document.querySelector('.profile__add-button');
const inputAddName = document.querySelector('.popup__input_card-name');
const inputAddLink = document.querySelector('.popup__input_card-link');

const formEditElement = document.querySelector('.popup__edit-form');

const popupEditValidation = new FormValidator(config, formEditElement);
const popupAddValidation = new FormValidator(config, formAddElement);

const elementsBox = document.querySelector('.elements');

//Закрытие попапа с помощью escape и overlay


function openEditProfileForm() {
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
  popupEditValidation.resetInput();
  openPopup(editPopup);
  };

closeAddButtons.forEach(function (button) {
  button.addEventListener('click', function(event) {
  const closeItem = event.target.closest('.popup')
  closePopup(closeItem)
})
});

function submitEditProfileForm(evt) {
  evt.preventDefault();
  nameInfo.textContent = nameInput.value;
  jobInfo.textContent = jobInput.value;
  closePopup(editPopup);
};

editButton.addEventListener('click', openEditProfileForm);

formEditElement.addEventListener('submit', submitEditProfileForm);

//1пункт-добавить 6 карточек через js

function renderElement(item) {
  const card = new Card(item, '#elementTemplate')
  elementsBox.prepend(card.createElement())
};

elements.forEach(item => {
  renderElement(item)
});

formEditProfile.forEach(element => {
  const formValidator = new FormValidator(config, element);
  formValidator.enableValidation();
});

//2пункт-сделать попап создания карточек
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  closePopup(popupAddCard);

//3пункт-сделать добавление карточек посредством кнопки создать
  renderElement({
    name: inputAddName.value,
    link:inputAddLink.value,
  })
  evt.target.reset();
};

addButton.addEventListener('click', openAddPopup);

function openAddPopup() {
  formAddElement.reset();
  popupAddValidation.resetInput();
  openPopup(popupAddCard);
}

formAddElement.addEventListener('submit', handleAddFormSubmit);