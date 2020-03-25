// Typed.js
const typed = new Typed('#typed', {
  stringsElement: '#typed-strings'
  ,
  typeSpeed: 100
});

// Details Toggle
const onClick = () => {
  event.currentTarget.classList.toggle("active");
}
