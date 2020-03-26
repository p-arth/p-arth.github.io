// Typed.js
const typed = new Typed('#typed', {
  stringsElement: '#typed-strings'
  ,
  typeSpeed: 100
});

// Details Toggle
const showDetailsRandomeal = () => {
  const details = document.querySelector(".randomeal-details")
  details.classList.toggle("visible");
  const btn = document.querySelector("#randomeal-toggle");
  btn.classList.toggle("active");
}

const randoBtn = document.querySelector("#randomeal-toggle")
randoBtn.addEventListener('click', showDetailsRandomeal);

const showDetailsRioserve = () => {
  const details = document.querySelector(".rioserve-details")
  details.classList.toggle("visible");
  const btn = document.querySelector("#rioserve-toggle");
  btn.classList.toggle("active");
}

const rioBtn = document.querySelector("#rioserve-toggle")
rioBtn.addEventListener('click', showDetailsRioserve);

const showDetailsCocktail = () => {
  const details = document.querySelector(".cocktail-details")
  details.classList.toggle("visible");
  const btn = document.querySelector("#cocktail-toggle");
  btn.classList.toggle("active");
}

const ctBtn = document.querySelector("#cocktail-toggle")
ctBtn.addEventListener('click', showDetailsCocktail);
