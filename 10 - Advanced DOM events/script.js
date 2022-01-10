'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', function(e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});


// 6 Event Delegation_ Implementing Page Navigation

// Without event delegation
// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     let id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// With event delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the element

document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();

  // Matching strategy
  let id = e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});





///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// 1 Selecting, Creating, and Deleting Elements

// select entire webpage
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// // return live html collection
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// // return live html collection
// console.log(document.getElementsByClassName('btn'));

// // Creating and inserting elements
// // .insertAdjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analitics.';
// message.innerHTML = 'We use cookies for improved functionality and analitics. <button class="btn btn--close-cookie">Got it!</button>';

// // add element as a first child of the element - message is now first element in header 
// // header.prepend(message);

// // add element as a last child of the element - message is now last element in header 
// header.append(message);
// // header.append(message.cloneNode(true));

// // insert message before header as a sibling
// // header.before(message);

// // insert message before header as a sibling
// // header.after(message);

// // Delete elements

// document.querySelector('.btn--close-cookie').addEventListener('click',function() {
//   message.remove();

//   // Old way
//   // message.parentElement.removeChild(message);
// });







// 2 Styles, Attributes and Classes

// styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.height); // nothing in console becouse it read only inline style that is defined in js
// console.log(message.style.backgroundColor); // rgba(55, 56, 61);

// // this will read styles that are even not defined in css
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.src);
// console.log(logo.alt);
// console.log(logo.className);

// // will not work
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));

// logo.alt = 'Beautiful minimalist logo';
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src); // Absolute path
// console.log(logo.getAttribute('src')); // Relative path

// const link = document.querySelector('.nav__link--btn');

// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// dont use
// logo.className = 'adnan';











// 3 Implementing smooth scroll

// Old school



//btnScrollTo.addEventListener('click', function(e) {
  
  // const s1coords = section1.getBoundingClientRect();
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // Scrolling
  //window.scrollTo(s1coords.lef + window.pageXOffset, s1coords.top + window.pageYOffset);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Modern way
//   section1.scrollIntoView({ behavior: 'smooth' });
// });




// 4 Types of Events and Event Handlers

// const h1 = document.querySelector('h1');

// const alertH1 = function(e) {
//   alert('addEventListener: Great! You are reading the header :D');

//   //h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// h1.addEventListener('mouseenter', function(e) {
//   alert('addEventListener: Great! You are reading the header :D');
// });

// old school
// h1.onmouseenter = function(e) {
//   alert('addEventListener: Great! You are reading the header :8');
// };

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);








// 5 Event Propagation in Practice

// rgb(255, 255, 255)
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// console.log(randomColor(0, 255))

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // Stop propagation
//   e.stopPropagation();

// });

// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target);
//   e.stopPropagation();
// });

// document.querySelector('.nav').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target);
//   e.stopPropagation();
// });














// 07 DOM Traversing

// const h1 = document.querySelector('h1');

// // Going downards: selecting child elements
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// // Going Upwards: selecting parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)'; // we well use for event delegation
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going Sideways: selecting siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.nextSibling);
// console.log(h1.previousSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function(el) {
//   if(el !== h1) {
//     el.style.transform = 'scale(0.5)';
//   }
// });







// 08 Building a Tabbed Component

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if(!clicked) return;

  // Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))

  clicked.classList.add('operations__tab--active');

  // Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

});

// 09 Passing Arguments to Event Handlers

// Menu fade animation
const nav = document.querySelector('.nav');

const handleHover = function(e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));


// 10 Implementing a Sticky Navigation_ The Scroll Event

// old way - not good for performance

// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function() {
//   if(window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// 11 A Better Way The Intersection Observer API
// const observerCallback = function(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry)
//   });
// };

// const observerOptions = {
//   root: null,
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
  const [entry] = entries;
  if(!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});
headerObs.observe(header);

// Reveal sections

const allSections = document.querySelectorAll('.section');

const revealSections = function(entries, observer) {
  const [entry] = entries;

  if(!entry.isIntersecting) {
    return;
  } else {
    entry.target.classList.remove('section--hidden');
  }

  // stop observing
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.15
});

allSections.forEach(function(section) {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

const loadImg = function(entries, observer) {
  const [entry] = entries;

  if(!entry.isIntersecting) {
    return;
  } else {

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function() {
      entry.target.classList.remove('lazy-img');
    });
  }

  observer.unobserve(entry.target);

};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider
const slider = function() {
  const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

// Function
const createDots = function() {
  slides.forEach(function(_, i) {
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
  });
};

const activeDot = function(slide) {
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'))
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
};

const goToSlide = function(slide) {
  slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
}

let curSlide = 0;
const maxSlides = slides.length;

// Next slide 
const nextSlide = function() {
  if(curSlide === maxSlides - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activeDot(curSlide);
};

// Previous slide
 const prevSlide = function() {
   if(curSlide === 0) {
     curSlide = maxSlides - 1;
   } else {
     curSlide--;
   }

   goToSlide(curSlide);
   activeDot(curSlide);
 }

const init = function() {
  goToSlide(0);
  createDots();
  activeDot(0);
};

init();

// Event handlers
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function(e) {
  // if(e.key === 'ArrowLeft') prevSlide();

  // Short circuting
  e.key === 'ArrowLeft' && prevSlide();
  e.key === 'ArrowRight' && nextSlide();

});

// Event delegation
dotContainer.addEventListener('click', function(e) {
  if(e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;

    goToSlide(slide);
    activeDot(slide);
  }
});
};

slider();

document.addEventListener('DOMContentLoaded', function(e) {
  console.log('HTML parsed and DOM three build!', e);
});

window.addEventListener('load', function(e) {
  console.log('Page fully loaded', e);
});

window.addEventListener('beforeunload', function(e) {
  //e.preventDefault();
  console.log(e);
  e.returnValue = '';
});