import { physicsChapters, mathematicsChapters, chemistryChapters } from './chapterNames.js';

function AmarBaal (subjectName, array) {
  const dropdownMenu = document.querySelector('.js-dropdown-menu');
  const button = document.querySelector(`.js-${subjectName}-button`);
  button.addEventListener('click', () => {
    if (button.innerText === subjectName) {
      let menuHTML = '';
      array.forEach(element => {
        menuHTML += `<div class="chapter-name"><button>${element.Name}</button></div>`;
      });
      dropdownMenu.innerHTML = menuHTML;
      button.innerHTML = 'Show Less';
    } else {
      dropdownMenu.innerHTML = '';
      button.innerHTML = `${subjectName}`;
    }
  });
};


AmarBaal('Physics', physicsChapters);
AmarBaal('Chemistry', chemistryChapters);
AmarBaal('Mathematics', mathematicsChapters);