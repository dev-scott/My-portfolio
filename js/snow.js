// Fonction création d'une boule de neige
/*
On crée un élément span dans le document html
on lui ajoute la classe .snow créée dans le CSS
on rajoute l'élément span class="snow" créé au container (snow_container).
Celui-ci est déjà pointé car c'est un id, sinon faire 
*/
const snow_container = document.getElementById("about");
const snowMaker = () => {
  const snow = document.createElement("span");
  snow.classList.add("snow");
  snow_container.appendChild(snow);

  // taille aléatoire pour la neige
  const size = Math.random() * 10 + "px";
  snow.style.height = size;
  snow.style.width = size;
  // apparition de la neige à des endroits random de la page
  snow.style.bottom = Math.random() * 500 + "%";
  snow.style.right = Math.random() * 500 + "%";

  //   faire disparaître la neige au bout d'un moment sinon la page est trop lourde et lag -->
  setTimeout(() => {
    snow.remove();
  }, 5000);
  //   toutes les 5 secondes(5000 ms) ça nettoie
};
// SetInterval pour répéter la fonction toutes les "X" millisecondes
setInterval(snowMaker, 10);


// for the services container


const snow_container2 = document.querySelector(".contain_services");
const snowMaker2 = () => {
  const snow2 = document.createElement("span");
  snow2.classList.add("snow2");
  snow_container2.appendChild(snow2);

  // taille aléatoire pour la neige
  const size2 = Math.random() * 10 + "px";
  snow2.style.height = size2;
  snow2.style.width = size2;
  // apparition de la neige à des endroits random de la page
  snow2.style.bottom = Math.random() * 500 + "%";
  snow2.style.right = Math.random() * 500 + "%";

  //   faire disparaître la neige au bout d'un moment sinon la page est trop lourde et lag -->
  setTimeout(() => {
    snow2.remove();
  }, 5000);
  //   toutes les 5 secondes(5000 ms) ça nettoie
};
// SetInterval pour répéter la fonction toutes les "X" millisecondes
setInterval(snowMaker2, 40);















// const snow_contain_service = document.getElementById("services")

// const snowMaker2 = ()=>{


//   const snow2 = document.createElement("span");
//   snow2.classList.add("snow2");
//   snow_contain_service.appendChild(snow2);



  
//   const size = Math.random()*10+"px";
//   snow2.style.height = size;
//   snow2.style.width = size;

//   snow2.style.bottom = Math.random()*500+"%";
//   snow2.style.right =Math.random()*500+"%";

//   setTimeout(()=>{

//     snow2.remove();

//   },500);

// };

// setInterval(snowMaker2,10);

