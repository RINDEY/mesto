import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {config, elements} from "./constants.js";
import {openPopup, closePopup} from "./utils.js";

const formEditProfiles = document.querySelectorAll('.popup__form');
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

function openEditProfileForm() {
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
  popupEditValidation.resetValidation();
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

function renderElement(item) {
  const card = new Card(item, '#elementTemplate').createElement();
  return card;
};

function addCard(card) {
  elementsBox.prepend(card);
};

elements.forEach(item => {
  addCard(renderElement(item));
});

formEditProfiles.forEach(element => {
  popupAddValidation.enableValidation(element);
  popupEditValidation.enableValidation(element);
});

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  closePopup(popupAddCard);

  addCard(renderElement({
    name:inputAddName.value,
    link:inputAddLink.value
  }));
  evt.target.reset();
};

addButton.addEventListener('click', openAddPopup);

function openAddPopup() {
  formAddElement.reset();
  popupAddValidation.resetValidation();
  openPopup(popupAddCard);
};

formAddElement.addEventListener('submit', handleAddFormSubmit);