 
 const menuItems = document.querySelectorAll('.menu-item');  
 /*lo utilizo para buscar todos los li que tengan menu-item*/

 menuItems.forEach(function(item) {
   item.addEventListener('click', function(e) {
    const activeItem = document.querySelector ('.active');
       activeItem.classList.remove('active');
        e.target.classList.add('active');
    });
});


 /* cambiar*/
 /*const cambioBtn= document.querySelector ('#cambiarTamaño');
  cambioBtn.addEventListener('clicK', function() {
    document.body.classList.toggle('#tele');
     });*/

function saludar(nombre,apellido){
    console.log("Contáctame"+" 1164773949 ");
    var divSaludor=document.getElementeById("tele");
    divSaludar.innerText="Contáctame"+ + nombre+""+ apellido;}
