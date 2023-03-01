let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');

let editButton = document.querySelector('.profile__button');
let closeButton = document.querySelector('.popup__button-close');

let nameInput = document.querySelector('.popup__input_type_name');
let nameInfo = document.querySelector('.profile__title');

let jobInput = document.querySelector('.popup__input_type_job');
let jobInfo = document.querySelector('.profile__text');

function openPopup() {
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
  popup.classList.add('popup_opened');
};

function closepopup() {
  popup.classList.remove('popup_opened');
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameInfo.textContent = nameInput.value;
  jobInfo.textContent = jobInput.value;
  closepopup();
}

editButton.addEventListener('click', function() {
  openPopup();
});

closeButton.addEventListener('click', function() {
  closepopup();
});

formElement.addEventListener('submit', handleFormSubmit);

