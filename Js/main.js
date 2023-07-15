 /*iniciomenuItems.forEach(function(item) {
   item.addEventListener('clic', function(e) {
    const currentItem = document.querySelector ('.active');
        currentItem.classList.remove('.active');
        e.target.classList.add('active');
    });
});
*/

/*
   let ul = document.querySelector ('#tele')
   ul.addEventListener('clic', function(e) {
         e.target.classList.toggle('#tele');
     });*/
function saludar(nombre,apellido){
    console.log("Contáctame"+" 1164773949 ");

    var divSaludor=document.getElementeById("tele");
    divSaludar.innerText="Contáctame"+ + nombre+""+ apellido;
}