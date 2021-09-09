var images         = document.querySelectorAll('.carousel-image'); // Carousel images selection
// var btnL           = document.querySelector('.left'); Inshallah we will code these two buttons when we fully 
// var btnR           = document.querySelector('.right'); known how to make a carousel by myself.
var linkimages     = document.querySelectorAll('.linkimg'); // Third section animated images selection.
var i = 0;
var t1 = setInterval(() => { // Automatically image changing carousel.
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
    if(i===2) {
        i = -1;
    }
    i++;

}, 3000);

setTimeout(()=> {   // This function explanation is in below comment.
    for (let l = 0; l < linkimages.length; l++) {
        linkimages[l].style.opacity='0';
        
    }
},3000);


/* Here we are using setInterval for changing images with a lit bit of animation
   so here our interval will repeate every 3.5 second , within out interval I give
   another setTimeout() function to make every image opacity 0 for every after 3s
   and ofter that out of setTimeout() I give opacity 1 for making animation and this
   animation will take 1s of invisibility and visibility duration because my setInterval()
   has duration of 3.5s and after 3s opacity will become 0 and this will take 0.5s because 
   I give transition effect in CSS 0.5s and here in out of setTimeout(), 0.5s
   left withing this our remaining code will execute where I give opacity of 1 so as a whole 
   it will take one second for image opacity animation.

   But here is a problem initially for the first time in setInterval() , setTimeout() is not 
   executing , its execution starts with second round so in order to solve this problem I 
   give another Extra setTimeout() Above the setInterval. If I don't put a above setTimeout()
   than it will not give me a animation for first time. **************************************/ 

var t3 = setInterval(()=> {
    setTimeout(()=> {
        for (let l = 0; l < linkimages.length; l++) {
            linkimages[l].style.opacity='0';
            
        }
    },3000);




    var b = []; //For storing a random number
        for(var k = 0; k<=4; k++) {
            var a = Math.floor(Math.random()*(5-0))+0;            // With random() there in a range formula for displaying
            b.forEach(element=> {                                 // a definite numbers i.e (from '0' to '5') 
                                                                 // the range formula is (max - min) + min .
                while (element==a) { //for making less repitiion                          
                    a=Math.floor(Math.random()*(5-0))+0;
                    
                }
            });
            b.push(a); // Adding a random number to array
        }

        for(var j = 0; j<=4; j++) {
            linkimages[j].style.order = b[j]; // for changing order
            linkimages[j].style.opacity = '1'; // for opacity animation
            
        }

        for(var j = 0; j<=4; j++) {
            linkimages[j+5].style.order = b[j];
            linkimages[j+5].style.opacity = '1';
        }

        for(var j = 0; j<=4; j++) {
            linkimages[j+10].style.order = b[j];
            linkimages[j+10].style.opacity = '1';
        }

        for(var j = 0; j<=4; j++) {
            linkimages[j+15].style.order = b[j];
            linkimages[j+15].style.opacity = '1';
        }

},3500);


        