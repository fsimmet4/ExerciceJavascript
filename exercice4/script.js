// On séléctionne l'élement sur lequel on va agir
const button = document.querySelector('.btn');

// On écoute l'événement click et on récupère la valeur de l'input
button.addEventListener('click', () => {
    // On vérifie que l'input existe
    if (document.querySelector('input')){
        // on vérifie que sa valeur n'est pas nulle et que le champ n'est pas vide
        if( document.querySelector('input').value != null && document.querySelector('input').value != ''){

            // On récupère l'input et sa valeur
            let input = document.querySelector('input');
            let val = input.value;

            // On crée un regex (autorisés : lettres min et maj, lettres accentuées et tiret)
            const reg = new RegExp("^[a-zA-Z-ä-ÿÄ-Ÿ]+$");

            // On test la valeur récupérée dans l'input avec le regex (return null si pas de match)
            const result = val.match(reg)

            // Si le résultat est ok
            if (result) {

                // On met la bordure de l'input en vert
                input.style.border = "green solid 3px";

                // On vide le p et on affiche Message envoyé
                document.querySelector('p').innerHTML = ""
                document.querySelector('p').innerHTML = "Message envoyé"

                //console.log('cest ok')
            } else {

                // On met la bordure de l'input en rouge
                input.style.border = "red solid 3px";

                // On vide le p et on affiche champ incorrect
                document.querySelector('p').innerHTML = ""
                document.querySelector('p').innerHTML = "Champ incorrect"

                //console.log("erreur")
            }
        }
        else {

            // On vide le p et on affiche champ vide
            document.querySelector('p').innerHTML = ""
            document.querySelector('p').innerHTML = "Champ vide"
           //console.log("champ vide");
            
        }
    } 
    
    

   
  });
