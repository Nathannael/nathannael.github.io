document.getElementById('closebtn').addEventListener('click', closeNav);
document.getElementById('about').addEventListener('click', openNav);
document.getElementById('toggle-pt').addEventListener('click', () => translate('pt-br', 'Sobre'));
document.getElementById('toggle-en').addEventListener('click', () => translate('en', 'About'));

closeNav();
translate('pt-br', 'Sobre');

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById('myNav').style.display = 'block';
}

/* Close when someone clicks on the 'x' symbol inside the overlay */
function closeNav() {
  document.getElementById('myNav').style.display = 'none';
}

function translate(id, about_text) {
  hide_descriptions();
  document.getElementById(id).style.display = 'block'
  document.getElementById('about').innerText = about_text

}

function hide_descriptions() {
  for (let el of document.querySelectorAll('.description')) el.style.display = 'none';
}
