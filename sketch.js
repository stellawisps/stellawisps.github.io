
var linArr = []

var youtubeButton

function setup() {
  createCanvas(windowWidth*.66, 2500);
  if (windowWidth < 1000){
    resizeCanvas(windowWidth, 1700);
  } else {
    resizeCanvas(windowWidth*.66, 1700);
  }
    for (let i = 0; i < 28; i++){
      let meowTemp = {x:-30,y:i * 40,index:i}
      linArr.push(meowTemp)
    }

    youtubeButton = new Clickable()

    youtubeButton.onPress = function () {
      window.open(buttonArr[0].link)
    }
  
    youtubeButton.rectMode = CENTER
    youtubeButton.color = '#000000'
    youtubeButton.stroke = "#ff0062"; 
    youtubeButton.strokeWeight = 5
    youtubeButton.cornerRadius = 0
    youtubeButton.resize(200, 200);
    youtubeButton.image = youtubeLogo
    youtubeButton.fitImage = true
    youtubeButton.text = ""
    youtubeButton.imageScale = 0.8

    twitterButton = new Clickable()

    twitterButton.onPress = function () {
      window.open(buttonArr[1].link)
    }
  
    twitterButton.rectMode = CENTER
    twitterButton.color = '#000000'
    twitterButton.stroke = "#ff0062"; 
    twitterButton.strokeWeight = 5
    twitterButton.cornerRadius = 0
    twitterButton.resize(200, 200);
    twitterButton.image = twitterLogo
    twitterButton.fitImage = true
    twitterButton.text = ""
    twitterButton.imageScale = 0.8

    NGButton = new Clickable()

    NGButton.onPress = function () {
      window.open(buttonArr[2].link)
    }
  
    NGButton.rectMode = CENTER
    NGButton.color = '#000000'
    NGButton.stroke = "#ff0062"; 
    NGButton.strokeWeight = 5
    NGButton.cornerRadius = 0
    NGButton.resize(200, 200);
    NGButton.image = ngLogo
    NGButton.fitImage = true
    NGButton.text = ""
    NGButton.imageScale = 0.8
  // DownLines	resizeCanvas(windowWidth*.5, windowHeight*5);
  background(0)

  function touchEnded(event){
    mouseReleased(event);
  }
  buttonArr = [
  {x:1.65,y:2.7,image:twitterLogo,offset:1000,link:'https://www.youtube.com/@stellawisps'},
  {x:2.5,y:2.3,image:twitterLogo,offset:5300,link:'https://twitter.com/stellawisps'},
  {x:1.7,y:1.5,image:twitterLogo,offset:3610,link:'https://stellawisps.newgrounds.com/'},
  {x:2.5,y:1.3,image:twitterLogo,offset:3610,link:'https://twitter.com/stellawisps'}
]

}

let icon;

function preload(){
  porTop = loadImage('img/Portal_Bot.png')
  porBot = loadImage('img/Portal_Top.png')
  stella = loadImage('img/StellaUpsideDown.png')
  stellaTailPiece = loadImage('img/StellaTail.png')
  twitterLogo = loadImage('img/2021 Twitter logo - white.png')
  youtubeLogo = loadImage('img/yt_logo_mono_dark.png')
  ngLogo = loadImage('img/ng_tank.png')
  signature = loadImage('img/Signature.png')
}


/* function touchEnded(event){
  mouseReleased(event);
} */


/* function mouseReleased(event){
  for(var i = 0; i,buttonArr.length;i++){
    if (i%2 == 0) { 
      if (getDistance(windowWidth/(buttonArr[i].x-(windowMult/4)),windowHeight/buttonArr[i].y,mouseX,mouseY) < windowHeight/13){
        window.location.href = 'Second.html';
      }   
  } else{
    if (getDistance(windowWidth/(buttonArr[i].x+(windowMult*1)),windowHeight/buttonArr[i].y,mouseX,mouseY) < windowHeight/13){
      window.open(buttonArr[i].link)
    }  
  }
} */


var WWDiv

function draw() {
  
  background(0)
  noStroke()
  if (windowWidth < 1000){
    WWDiv = 0.5
  } else{
    WWDiv = 0.33
  }
  //PORTAL TRANSFORM
  var portalTransformX = ((windowWidth*WWDiv))+(cos(frameCount/41)*2)
  var portalTransformY = (((sin(frameCount/60)-1)*5))
  
  //PORTAL BACK
  imageMode(CENTER)
  rectMode(CENTER)
  image(porBot,portalTransformX,(portalTransformY+porBot.height/2)-132,porBot.width,porBot.height/2)




  //STELLA TAIL
  for (var inst of linArr){
    var offsetPos = sin((frameCount+(inst.index*50))/50)*10
    push()
    
    translate((windowWidth*WWDiv)+offsetPos,inst.y)
    rotate(-offsetPos*.01)
    image(stellaTailPiece,0,0,64+(inst.index*2),74)
    pop()
  }


  //PORTAL FRONT AND STELLA BOTTOM
  image(porTop,portalTransformX,portalTransformY,porTop.width,porTop.height/2)
  var stellaOffset = sin((frameCount+(34*50))/50)*10
  image(stella,(windowWidth*WWDiv)+stellaOffset,1300,stella.width/2,stella.height/2)

  image(signature,150,1600,signature.width,signature.height)
  //SOCIAL LINKS
  youtubeButton.x = (windowWidth * WWDiv) + sin((frameCount+(10*50))/50)*5
  youtubeButton.y = 300
  youtubeButton.draw()

  twitterButton.x = (windowWidth * WWDiv) + sin((frameCount+(17*50))/50)*5
  twitterButton.y = 625
  twitterButton.draw()

  NGButton.x = (windowWidth * WWDiv) + sin((frameCount+(22*50))/50)*5
  NGButton.y = 950
  NGButton.draw()
}

function windowResized() {
  if (windowWidth < 1000){
    resizeCanvas(windowWidth, 1700);
  } else {
    resizeCanvas(windowWidth*.66, 1700);
  }
	
	background(0)
  }








  