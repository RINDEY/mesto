const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');

const editButton = document.querySelector('.profile__button');
const closeAddButtons = document.querySelectorAll('.popup__button-close');

const nameInput = document.querySelector('.popup__input_type_name');
const nameInfo = document.querySelector('.profile__title');

const jobInput = document.querySelector('.popup__input_type_job');
const jobInfo = document.querySelector('.profile__text');

const editPopup = document.querySelector('.popup_edit')

const popupImage = document.querySelector('.popup_image');
const popupCaption = document.querySelector('.popup__caption');
const popupCardImage = document.querySelector('.popup__card-image');

const popupAddCard = document.querySelector('.popup_add-card');
const formAddElement = document.querySelector('.popup__add-form');
const addButton = document.querySelector('.profile__add-button');
const inputAddName = document.querySelector('.popup__input_card-name');
const inputAddLink = document.querySelector('.popup__input_card-link');

const templateElement = document.querySelector('#elementTemplate').content;

const buttonPopupEdit = document.querySelector('.popup__button-edit');
const buttonPopupAdd = document.querySelector('.popup__button-add');

const formEditElement = document.querySelector('.popup__edit-form');

//Закрытие попапа с помощью escape и overlay
function addListeners(popup) {
  document.addEventListener('keydown', closePopupEsc);
  popup.addEventListener('mousedown', closePopupByClick);
};

function removeListeners(popup) {
  document.removeEventListener('keydown', closePopupEsc);
  popup.removeEventListener('mousedown', closePopupByClick);
};

function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
      const popup = document.querySelector('.popup_opened');
      closePopup(popup);
    }
};

 function closePopupByClick(evt) {
  closePopup(evt.target);
 };

function openPopup(block) {
    block.classList.add('popup_opened');
    addListeners(block);
};

function makeValue() {
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
  openPopup(editPopup);
  resetInput(formEditElement);
  disableButton(buttonPopupEdit, config);
};
 
function closePopup(block) {
  block.classList.remove('popup_opened');
  removeListeners(block);
};

closeAddButtons.forEach(function (button) {
  button.addEventListener('click', function(event) {
  const closeItem = event.target.closest('.popup')
  closePopup(closeItem)
})
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameInfo.textContent = nameInput.value;
  jobInfo.textContent = jobInput.value;
  closePopup(editPopup);
};

editButton.addEventListener('click', makeValue);

formElement.addEventListener('submit', handleFormSubmit);

//1пункт-добавить 6 карточек через js
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

const elementsBox = document.querySelector('.elements');

const createElement = (element) => {
  const newElement = templateElement.querySelector('.element').cloneNode(true);
  const elementHeading = newElement.querySelector('.element__description');
  elementHeading.textContent = element.name;
  const elementImage = newElement.querySelector('.element__photo');
  elementImage.setAttribute('src', element.link);
  elementImage.setAttribute('alt', element.name);
  
  //4пункт-лайк карточки
const likeButton = newElement.querySelector('.element__like');
likeButton.addEventListener('click', function(evt) {
  evt.target.classList.toggle('element__like_active')
});

//5пункт-удаление карточки с помощью корзинки
const deleteButton = newElement.querySelector('.element__photo-basket');

deleteButton.addEventListener('click', function() {
  const deleteElement = deleteButton.closest('.element');
  console.log(deleteElement);
  deleteElement.remove();
 });

//6пункт-открытие попапа картинок
function openPopupImg(element) {
  popupCardImage.src = element.link;
  popupCaption.textContent = element.name;
  popupCardImage.alt = element.name;
  openPopup(popupImage);
};

elementImage.addEventListener('click', () => openPopupImg(element));

return newElement;
};

function renderElement(block, item) {
  block.prepend(createElement(item))
};

elements.forEach(item => {
  renderElement(elementsBox, item)
});

//2пункт-сделать попап создания карточек
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  closePopup(popupAddCard);

//3пункт-сделать добавление карточек посредством кнопки создать
  renderElement(elementsBox, {
    name: inputAddName.value,
    link:inputAddLink.value,
  })
  evt.target.reset();
};

addButton.addEventListener('click', function() {
  openPopup(popupAddCard);
  formAddElement.reset();
  enableButton(buttonPopupAdd, config);
  resetInput(formAddElement);
});

formAddElement.addEventListener('submit', handleAddFormSubmit);