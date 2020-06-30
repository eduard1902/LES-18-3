'use strict';
let abcButton = document.querySelector('button');
let piuS = document.querySelector('.piu'),
    count = 0;
let flyInterval;
let piuAnimate = () => {
    flyInterval = requestAnimationFrame(piuAnimate);
    count ++;
    if(count < 800){
        piuS.style.left = count + 'px';
    }else {
        cancelAnimationFrame(flyInterval);
    }
};

let animate = false;
abcButton.addEventListener('click', function() {
    if(animate) {
        flyInterval = requestAnimationFrame(piuAnimate);
        animate = false;
    } else {
        animate = true;
        cancelAnimationFrame(flyInterval);
    }
});


console.log(abcButton);



