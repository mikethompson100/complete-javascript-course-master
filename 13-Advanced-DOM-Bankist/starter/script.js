'use strict';

// Button scrolling
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.getElementById('section--1');
btnScrollTo.addEventListener('click', function(e) {
  e.preventDefault;
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords); 
console.log('Current scroll X/Y: ', window.pageXOffset, window.pageYOffset);
console.log('height/width viewport: ', document.documentElement.clientHeight, document.documentElement.clientWidth);
});

const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Page navigation

/* document.querySelectorAll('.nav__link').forEach(function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  })
}); */

// 1. Add event listener to common parent elements
document.querySelector('.nav__links').addEventListener('click', function(e) {
 // console.log(e.target);
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});


// 2. Find out which element origined the event

const h1 = document.querySelector('h1');
// Going downwards: child
/* console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); // Not really used
console.log(h1.children);  // Works for direct children */
h1.firstElementChild.style.color = 'white';

// Going upwards: selecting parents
/* console.log(h1.parentNode);
console.log(h1.parentElement); */
/* h1.closest('.header').style.background = 'red';  // Closest parent element
h1.closest('h1').style.background = 'blue'; */

// Siblings
/* console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1.nextSibling); */

//console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function(el) {
  if(el !== h1) el.style.transform = 'scale(0.5)';
})

// Tabbed component
/* console.log("TABS: ", tabs);
console.log(tabsContainer);
console.log(tabsContent); */

tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');
  
  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c=>c.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active');

  // Activate tab content 
  
  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('operations__content--active');

});

// Menu fade animation
/* nav.addEventListener('mouseover', function(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = 0.5;
        }
      logo.style.opacity = 0.5;
    });
  };
});

nav.addEventListener('mouseout', function(e) {
  const link = e.target;
  const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  const logo = link.closest('.nav').querySelector('img');
  siblings.forEach(el => {
    if (el !== link) {
      el.style.opacity = 1;
      }
    logo.style.opacity = 1;
  });
}); */
  
const handleHover = function (e) {
  if(e.target.classList.contains('nav__link')) {
  const link = e.target;
  const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  const logo = link.closest('.nav').querySelector('img');
  siblings.forEach(el => {
        if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
  };
};

/* 
nav.addEventListener('mouseover', function(e) {
  handleHover(e, .5);
});
nav.addEventListener('mouseout',  function(e) {
  handleHover(e, 1);
}); */

/* 
nav.addEventListener('mouseout', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky nav
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function(e) {
  if(window.scrollY > initialCoords.top) nav.classList.add('sticky')
  else nav.classList.remove('sticky');
}); */

/// Intersection Observer API

/* const obsCallback = function(entries, observer) {
  entries.forEach(entry=> {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,      // Default = viewport
  threshold: 0.1   // Percent we want to have visible in our root
};

const observer = new IntersectionObserver
  (obsCallback,obsOptions);
observer.observe(section1); */

/* const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;;

const stickyNav = function(entries) {
  const [entry] = entries;
  console.log(entry);
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(
  stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px` /// 90 pixels applied outside the target element
  }
);
headerObserver.observe(header); */

// Reveal sections     

const allSections = document.querySelectorAll('.section');

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;;

const revealSection = function(entries, observer) {
  const [entry] = entries;
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, { root: null, threshold: 0.15 });
  allSections.forEach(function(section) {
    sectionObserver.observe(section); 
    //section.classList.add('section--hidden');
  }); 

/// Lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries, observer) {
  const [entry] = entries;
  if(!entry.isIntersecting) return;  
  entry.target.src = entry.target.dataset.src; // Replace image with data-src
  entry.target.addEventListener('load', function() {
  entry.target.classList.remove('lazy-img');
  });
  entry.unobserve(entry.target);
}
const imgObserver = new IntersectionObserver(loadImg, { root: null, threshold: 0 });
imgTargets.forEach(img => imgObserver.observe(img));

// Building a slider component Part 1

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let curSlide = 0;
const maxSlide = slides.length;

const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.4) translateX(-800px)';
slider.style.overflow = 'visible';

const sliderFunc = function(curSlide) {
  slides.forEach( function(s,i) { 
    console.log(s,i);
    s.style.transform = `translateX(${(curSlide === 0) ? (100 * i) : (100 * (i - curSlide))}%)`;
  });
};

sliderFunc(0);

// Next slide
btnRight.addEventListener('click', function() {

  if (curSlide === maxSlide - 1) {
    curSlide = 0;
    console.log("reset to 0");
    sliderFunc(curSlide);
  }
  else {
    curSlide++;
    console.log("Incremented to: ", curSlide);
    sliderFunc(curSlide);
  }
  
});


///////////////////////////////////////
// Modal window
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









////////////////////////////////////////////////////////////////////

/* const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');


document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
const allSectionsArray = Array.from(allButtons); */
/* 
console.log(document.getElementsByClassName('btn')); */

// Creating and inserting elements
/* const message = document.createElement('div');
message.classList.add('cookie-message');
message.textCOntent = 'We used cookies for improved functionality and analytics';
message.innerHTML = 'We used cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message); */
//header.prepend(message);
//header.append(message.cloneNode(true));

/* document.querySelector('.btn--close-cookie').
addEventListener('click', function() {
  message.remove();
}); */

// Styles
/* message.style.backgroundColor = "#37383d";
message.style.width = '120%';
message.style.padding = "10px 0";

console.log(getComputedStyle(message).color); */

// Attributes
/* const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); */

// data Attributes
/* console.log(logo.getAttribute('data-version-number'));
console.log(logo.dataset);
console.log(logo.dataset.versionNumber); */

// classList

//logo.classList.add('test');

// # 188
/* 
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.getElementById('section--1');

btnScrollTo.addEventListener('click', function(e) {
  e.preventDefault;
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords); 
console.log('Current scroll X/Y: ', window.pageXOffset, window.pageYOffset);
console.log('height/width viewport: ', document.documentElement.clientHeight, document.documentElement.clientWidth);

// Scrolling 
/* window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

window.scrollTo({
  left: s1coords.left + window.pageXOffset,
  top: s1coords.top + window.pageYOffset,
  behavior: 'smooth'
}) 
});
 

section1.scrollIntoView({behavior: 'smooth'});*/


//const h1 = document.querySelector('h1');

/* h1.addEventListener('mouseenter', function (e) {
alert('HI!');
}); */

/* h1.onmouseenter = function (e) {
  alert('HI!');
}; */

/* const func = function() {
  alert("test");
}

h1.addEventListener('mouseenter', func); */

/// rgb(255,255,255);

/* const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK: ', e.target, e.currentTarget);
  e.stopPropagation();
});
 document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK: ', e.target, e.currentTarget);

});
document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK: ', e.target, e.currentTarget);
});
 */
/// #192  Event delegation 

























