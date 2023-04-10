export {openPopup, closePopup};

function openPopup(block) {
  block.classList.add('popup_opened');
  addListeners(block);
};

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

 function closePopup(block) {
  block.classList.remove('popup_opened');
  removeListeners(block);
};