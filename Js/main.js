let parrafo = document.querySelector ('#tele');
parrafo.addEventListener('click', function(e) {
e.target.classList.toggle('parrafo-modificado'); });

/*let logos= [
{nombre:'Email',
img:'/Imagenes/mail.png'},
{nombre:'Github',
img:'/Imagenes/github.png'},
{nombre:'Linkedin',
img:'/Imagenes/linkedin.png'},
];

function crearHTMLLogo(logo) {
    let nombreLogo= document.createElement('h3');
    nombreLogo.innerText = logo.nombre;        
    let imagenLogo = document.createElement('img');
    imagenLogo.src = logo.img;

    let listItem = document.createElement('li');
    listItem.appendChild(nombreLogo);
    listItem.appendChild(imagenLogo);
    return listItem;}

const listaLogos = document.querySelector('#logo-list');

logos.forEach(function(logo) {
let logoListItem = 
  crearHTMLLogo(logo); 
  listaLogos.appendChild(logosListItem);
});*/
