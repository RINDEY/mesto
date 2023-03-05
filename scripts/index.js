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

function closePopup() {
  popup.classList.remove('popup_opened');
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameInfo.textContent = nameInput.value;
  jobInfo.textContent = jobInput.value;
  closePopup();
}

editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', handleFormSubmit);

const elements = [
  {
    name: 'Карачаевск',
    alt: 'Древний храм в горах',
    link: './images/karachaevsk.png'
  },
  {
    name: 'Гора Эльбрус',
    alt: 'Заснеженный Эльбрус',
    link: './images/elbrus.png'
  },
  {
    name: 'Домбай',
    alt: 'Равнины в закате',
    link: './images/dombay.png'
  },
  {
    name: 'Сахалин',
    alt: 'Побережье Охотского моря',
    link: './images/sakhalin.jpg'
  },
  {
    name: 'Курилы',
    alt: 'Спящий вулкан',
    link: './images/kurily.jpg'
  },
  {
    name: 'Карелия',
    alt: 'Горный парк Рускеала',
    link: './images/karelia.jpg'
  },
];

const page = document.querySelector('.page');
const elementsBox = document.querySelector('.elements');

const createElement = (element) => {
  const newElement = document.querySelector('#elementTemplate').content.cloneNode(true);
  const elementHeading = newElement.querySelector('.element__description');
  elementHeading.textContent = element.name;
  const elementImage = newElement.querySelector('.element__photo');
  elementImage.setAttribute('src', element.link);
  elementImage.setAttribute('alt', element.alt);
  elementsBox.prepend(newElement);
}

elements.forEach(createElement);