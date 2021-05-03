// On séléctionne l'élement sur lequel on va agir
const button = document.querySelector('.test');

// On initialise une variable à 0 pour compter le nombre de cliques
var count = 0;

// On écoute l'événement click et on change la background-color
button.addEventListener('click', () => {
    // On incrémente de 1 le compteur à chaque clique
    count++;

    // Si le nombre de clique est pair (modulo 2 pour récupérer le reste de la division par 2) on change le background-color en vert
    if (count % 2 === 0) {
        button.style.backgroundColor = 'green';
    }
    // Ou si le nombre de clique est un multiple de 5 (modulo 5 pour récupérer le reste de la division par 5) on change le background-color en rouge
    else if (count % 5 === 0) {
        button.style.backgroundColor = 'red';
    }
    // Sinon mettre le background-color en jaune
    else {
        button.style.backgroundColor = 'yellow';
    }
  });