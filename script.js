const inputSearch = document.querySelector('.search-input');
const windowApps = document.querySelector('.windowApps');
const bodyDocument = document.querySelector('body');
const inputSubmit = document.querySelector('.search-btn');
const cross = document.querySelector('.crossDel');
let count = 1;

inputSearch.addEventListener('keydown', e => {
  if(e.keyCode === 13) {
    window.open(`https://www.google.com/search?q=${inputSearch.value}`, '_parent');
  }
});

inputSearch.addEventListener('input', e => {
  if(inputSearch.value.length == 0) {
    cross.style.display = 'none';
  } else {
    cross.style.display = 'block';
  }
});

cross.addEventListener('click', e => {
  inputSearch.value = '';
});

inputSubmit.addEventListener('click', e => {
  window.open(`https://www.google.com/search?q=${inputSearch.value}`, '_parent');
});

bodyDocument.addEventListener('click', e => {
  if(e.target.className == 'imgApp' && count%2 != 0) {
    windowApps.style.display = 'block';
    ++count;
  } else {
    windowApps.style.display = 'none';
    count = 1;
  }
});

