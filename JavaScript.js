var images=document.querySelectorAll('.carousel-image');var linkimages=document.querySelectorAll('.linkimg');var i=0;var t1=setInterval(()=>{if(i===0){images[0].style.zIndex='400';images[1].style.zIndex='300';images[2].style.zIndex='200';} else if(i===1){images[1].style.zIndex='400';images[2].style.zIndex='300';images[0].style.zIndex='200';} else if(i===2){images[2].style.zIndex='400';images[1].style.zIndex='300';images[0].style.zIndex='200';} if(i===2){i=-1;} i++;},3000);setTimeout(()=>{for(let l=0;l<linkimages.length;l++){linkimages[l].style.opacity='0';}},3000);var t3=setInterval(()=>{setTimeout(()=>{for(let l=0;l<linkimages.length;l++){linkimages[l].style.opacity='0';}},3000);var b=[];for(var k=0;k<=4;k++){var a=Math.floor(Math.random()*(5-0))+0;b.forEach(element=>{while(element==a){a=Math.floor(Math.random()*(5-0))+0;}});b.push(a);} for(var j=0;j<=4;j++){linkimages[j].style.order=b[j];linkimages[j].style.opacity='1';} for(var j=0;j<=4;j++){linkimages[j+5].style.order=b[j];linkimages[j+5].style.opacity='1';} for(var j=0;j<=4;j++){linkimages[j+10].style.order=b[j];linkimages[j+10].style.opacity='1';} for(var j=0;j<=4;j++){linkimages[j+15].style.order=b[j];linkimages[j+15].style.opacity='1';}},3500);