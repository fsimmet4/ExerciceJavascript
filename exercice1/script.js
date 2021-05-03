// On séléctionne l'élement sur lequel on va agir
const button = document.querySelector('.test');

// On écoute l'événement click et on change la background-color
button.addEventListener('click', () => {
    button.style.backgroundColor = 'blue';
  });