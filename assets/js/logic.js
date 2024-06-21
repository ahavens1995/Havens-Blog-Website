// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {

  const storedMode = localStorage.getItem('mode');
  
  if(storedMode !== null){
    mode = storedMode;
  }

  // Grab the image target in order to change the light bulb image
  const element = event.target;
  //const state = element.getAttribute('data-state');

  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');

    // Change the light bulb image to On
    element.dataset.state='light';
    element.setAttribute('data-state', 'light');
    element.setAttribute('src', element.dataset.light);

  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');

    // Change the light bulb image to Off
    element.dataset.state='dark';
    element.setAttribute('data-state', 'dark');
    element.setAttribute('src', element.dataset.dark);
  }

  localStorage.setItem('mode', mode);

});

function renderMode(){

  const storedMode = localStorage.getItem('mode');

  //const state = element.getAttribute('data-state');

  // If the stored mode is Dark, apply the dark background
  if (storedMode === 'dark') {

    container.setAttribute('class', 'dark');

    // Change the light bulb image to Off
    themeSwitcher.dataset.state='dark';
    themeSwitcher.setAttribute('data-state', 'dark');
    themeSwitcher.setAttribute('src', element.dataset.dark);

  }
  // If stored mode is light, apply light background
  else {

    container.setAttribute('class', 'light');

    // Change the light bulb image to On
    themeSwitcher.dataset.state='light';
    themeSwitcher.setAttribute('data-state', 'light');
    themeSwitcher.setAttribute('src', themeSwitcher.dataset.light);
  }


}

function init(){
  renderMode();
}

init();