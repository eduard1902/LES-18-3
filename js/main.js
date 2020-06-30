'use strict';
let abcButton1 = document.querySelectorAll('button')[0];
let abcButton2 = document.querySelectorAll('button')[1];
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
abcButton1.addEventListener('click', function() {
    if(animate) {
        flyInterval = requestAnimationFrame(piuAnimate);
        animate = false;
       
    } else {
        animate = true;
        cancelAnimationFrame(flyInterval);
    }
});
abcButton2.addEventListener('click', function(abcButton1){
    if(animate) {
        count = 0;
        piuS.style.left = 0;
    }
});


console.log(abcButton1);
console.log(abcButton2);



