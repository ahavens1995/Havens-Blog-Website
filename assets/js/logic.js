// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  
  // Grab the image target in order to change the light bulb image
  const element = event.target;
  const state = element.getAttribute('data-state');

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
});