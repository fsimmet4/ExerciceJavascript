// On séléctionne l'élement sur lequel on va agir
const button = document.querySelector('.btn');

// On écoute l'événement click et on récupère la valeur de l'input
button.addEventListener('click', () => {
    
    let val = document.querySelector('input');

    // On affiche dans une alerte le nom récupèrer dans l'input
    alert(`Bonjour ${val.value} !`);
  });