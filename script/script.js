const button = document.querySelectorAll('.card_button');
const card = document.querySelectorAll('.card');

button.forEach(function(item) {
    item.addEventListener( 'click', function(e) {
        item.parentNode.parentElement.classList.toggle('is-flipped');
        e.stopPropagation();
    });
    });

card.forEach(function(item) {
    item.addEventListener( 'mouseout', function() {
        item.classList.toggle('is-flipped', false);
    });
    });


  
