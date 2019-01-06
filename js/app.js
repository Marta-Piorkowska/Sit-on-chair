var btnP = document.querySelector('.banner-prev');
var btnN = document.querySelector('.banner-next');
var list = document.querySelectorAll('.slider li');

var index = 0;

btnN.addEventListener('click', function(event) {
    event.preventDefault();

    list[index].classList.remove('visible');

    if (list[index] === list[list.length-1]) {
        index = 0;
    }
    else {
        index++;}

    list[index].classList.add('visible');
});

btnP.addEventListener('click', function(event) {
    event.preventDefault();

    list[index].classList.remove('visible');

    if (list[index] === list[0]) {
        index = list.length-1;
    }
    else{
        index--;
    }

    list[index].classList.add('visible');
});

