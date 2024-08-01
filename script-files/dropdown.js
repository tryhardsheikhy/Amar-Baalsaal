import { physicsChapters, mathsChapters, chemistryChapters } from './chapterNames.js';

document.querySelector('.js-physics-button').addEventListener('click', () => {
  const dropdownMenu = document.querySelector('.js-dropdown-menu');
  const button = document.querySelector('.js-physics-button');
  if (button.innerText === 'Physics') {
    let menuHTML = '';
    physicsChapters.forEach(element => {
      menuHTML += `<div class="chapter-name"><button>${element.Name}</button></div>`;
    });
    dropdownMenu.innerHTML = menuHTML;
    button.innerHTML = 'Show Less';
  } else {
    dropdownMenu.innerHTML = '';
    button.innerHTML = 'Physics';
  }
});

document.querySelector('.js-chemistry-button').addEventListener('click', () => {
  const dropdownMenu = document.querySelector('.js-dropdown-menu');
  const button = document.querySelector('.js-chemistry-button');
  if (button.innerText === 'Chemistry') {
    let menuHTML = '';
    chemistryChapters.forEach(element => {
      menuHTML += `<div class="chapter-name"><button>${element.Name}</button></div>`;
    });
    dropdownMenu.innerHTML = menuHTML;
    button.innerHTML = 'Show Less';
  } else {
    dropdownMenu.innerHTML = '';
    button.innerHTML = 'Chemistry';
  }
});

document.querySelector('.js-math-button').addEventListener('click', () => {
  const dropdownMenu = document.querySelector('.js-dropdown-menu');
  const button = document.querySelector('.js-math-button');
  if (button.innerText === 'Mathematics') {
    let menuHTML = '';
    mathsChapters.forEach(element => {
      menuHTML += `<div class="chapter-name"><button>${element.Name}</button></div>`;
    });
    dropdownMenu.innerHTML = menuHTML;
    button.innerHTML = 'Show Less';
  } else {
    dropdownMenu.innerHTML = '';
    button.innerHTML = 'Mathematics';
  }
});