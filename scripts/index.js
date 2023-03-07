let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');

let editButton = document.querySelector('.profile__button');
let closeAddButton = document.querySelectorAll('.popup__button-close');

let nameInput = document.querySelector('.popup__input_type_name');
let nameInfo = document.querySelector('.profile__title');

let jobInput = document.querySelector('.popup__input_type_job');
let jobInfo = document.querySelector('.profile__text');

const editPopup = document.querySelector('.popup_edit')

function openPopup(block) {
    block.classList.add('popup_opened');
};

function makeValue() {
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
  openPopup(editPopup);
}
 
function closePopup(block) {
  block.classList.remove('popup_opened');
};

closeAddButton.forEach(function (button) {
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
}

editButton.addEventListener('click', makeValue);

// closeButton.addEventListener('click', closePopup);

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
  const newElement = document.querySelector('#elementTemplate').content.cloneNode(true);
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

//5пункт-удаление
return newElement;
}

function renderElement(block, item) {
  block.prepend(createElement(item))
};

elements.forEach(item => {
  renderElement(elementsBox, item)
});

//2пункт-сделать попап создания карточек
let popupAddCard = document.querySelector('.popup__add-card');
let formAddElement = document.querySelector('.popup__add-form');

let addButton = document.querySelector('.profile__add-button');
const inputAddName = document.querySelector('.popup__input_card-name');
const inputAddLink = document.querySelector('.popup__input_card-link');

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  closePopup(popupAddCard);
//3пункт-сделать добавление карточек посредством кнопки создать
  renderElement(elementsBox, {
    name: inputAddName.value,
    link:inputAddLink.value,
  })
};

addButton.addEventListener('click', function() {
  openPopup(popupAddCard)
});

formAddElement.addEventListener('submit', handleAddFormSubmit);
