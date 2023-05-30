
if (screen && screen.width > 480) {
    // Whole your script here
   
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function getDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    
    return Math.sqrt(x * x + y * y);
}

document.addEventListener('mousemove', e=> {
    var a;
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
       a = true ;
    } else {
       a = false ;
    }
    if (!a & (Math.random()>0.7)){
    let bubles = document.createElement('bubles');
    let x = clamp(e.pageX + (Math.random()-.5)*50,50,windowWidth-75);
    let y = clamp(e.pageY + (Math.random()-.5)*50,50,2450);
    bubles.style.left = x + "px";
    bubles.style.top = y + "px";
    let size = (Math.random() * 50);
    bubles.style.width = 1 + size + "px";
    bubles.style.height = 1 + size + "px";
    bubles.style.transform = "rotate("+Math.random()*360+"deg)";
    document.body.appendChild(bubles);
    setTimeout(function() {
      bubles.remove();
    }, 900);
}
  });
}