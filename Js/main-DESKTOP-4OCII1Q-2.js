 /*iniciomenuItems.forEach(function(item) {
   item.addEventListener('clic', function(e) {
    const currentItem = document.querySelector ('.active');
        currentItem.classList.remove('.active');
        e.target.classList.add('active');
    });
});
*/


   let ul= document.querySelector ('tele')
   ul. addEventListener('clic', function(e) {
         e.target.classList.toggle('tele');
     });