'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

/* for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal); */

btnsOpenModal.forEach( (btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');


document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
const allSectionsArray = Array.from(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textCOntent = 'We used cookies for improved functionality and analytics';
message.innerHTML = 'We used cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message);
//header.prepend(message);
//header.append(message.cloneNode(true));

document.querySelector('.btn--close-cookie').
addEventListener('click', function() {
  message.remove();
});

// Styles
message.style.backgroundColor = "#37383d";
message.style.width = '120%';
message.style.padding = "10px 0";

console.log(getComputedStyle(message).color);





