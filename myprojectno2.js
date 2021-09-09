
/* Possibility NO .1 */ 
const images = document.querySelectorAll('.carousel-image');
var btnL= document.querySelector('.left');
var btnR= document.querySelector('.right');
var imagecontainer= document.querySelector('.carousel-image-container');
var next = 0;
var prev ;
var i = 0;

function automatic(params) {
    btnR.addEventListener('click' ,()=> {
        console.log('The value of next is ', next);
        if(next === 3) {
            return 0;
        }
     
        images[next].classList.add('citr');
        prev = next; 
        next= next + 1;
        
        
    })
    
    btnL.addEventListener('click' , function() {
         images[prev].classList.add('citl')
         next = prev ;
         prev = prev - 1;
    })
    
    
}

automatic();




/* Possibility NO 2 */

var images = document.querySelectorAll('.carousel-image');
var btnL= document.querySelector('.left');
var btnR= document.querySelector('.right');
var imagecontainer= document.querySelector('.carousel-image-container');
var i = 0;
var t = setInterval(() => {
    if(i===0) {
        images[0].style.zIndex = '400';
        images[1].style.zIndex = '300';
        images[2].style.zIndex = '200';
    }
    else if ( i=== 1) {
        images[1].style.zIndex = '400';
        images[2].style.zIndex = '300';
        images[0].style.zIndex = '200';

    }
    else if ( i === 2) {
        images[2].style.zIndex = '400';
        images[1].style.zIndex = '300';
        images[0].style.zIndex = '200';

    }
    console.log(i);
    if(i===2) {
        i = -1;
    }
    i++;

}, 1000);


















