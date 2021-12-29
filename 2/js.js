let offset = 0;
const sliderImg  = document.querySelector('.slider__img');

document.querySelector('.slider-bottom').addEventListener('click', function(){
    offset = offset - 194;
    if (offset < 0) {
        offset = 582;
    }
    sliderImg.style.top = -offset + 'px';
});

document.querySelector('.slider-top').addEventListener('click', function(){
    offset = offset + 194;
    if (offset > 582) {
        offset = 0;
    }
    sliderImg.style.top = -offset + 'px';
});


