var maxLines = 100
var linArr = []
var buttonArr = []
var buttonSize1 = 1
var buttonSize2 = 1
var buttonSize3 = 1
var buttonSize4 = 1
var windowMult = 1
function setup() {
  createCanvas(windowWidth, windowHeight);
  // DownLines
  for (let i = 0; i < maxLines; i++){
    let tmpLine = {y:i/maxLines,colOff:Math.random(),index:i}
    linArr.push(tmpLine)
  }
  buttonArr = [
  {x:1.65,y:2.7,image:twitterLogo,offset:1000,link:'https://twitter.com/stellawisps'},
  {x:2.5,y:2.3,image:twitterLogo,offset:5300,link:'https://twitter.com/stellawisps'},
  {x:1.7,y:1.5,image:twitterLogo,offset:3610,link:'https://twitter.com/stellawisps'},
  {x:2.5,y:1.3,image:twitterLogo,offset:3610,link:'https://twitter.com/stellawisps'}
]

}
let icon;
function preload(){
  porTop = loadImage('img/porTop2.png')
  porBot = loadImage('img/porBottom2.png')
  twitterLogo = loadImage('img/2021 Twitter logo - white.png')
}


function touchEnded(event){
  mouseReleased(event);
}


function mouseReleased(event){
  for(var i = 0; i,buttonArr.length;i++){
    if (i%2 == 0) { 
      if (getDistance(windowWidth/(buttonArr[i].x-(windowMult/4)),windowHeight/buttonArr[i].y,mouseX,mouseY) < windowHeight/13){
        window.open(buttonArr[i].link)
      }   
  } else{
    if (getDistance(windowWidth/(buttonArr[i].x+(windowMult*1)),windowHeight/buttonArr[i].y,mouseX,mouseY) < windowHeight/13){
      window.open(buttonArr[i].link)
    }  
  }
}

 
}


function draw() {
  colorMode(HSB)
  background(0);
 
  var strokeWeg = windowHeight/120.0
  image(porBot,((windowWidth/2.0)-((windowHeight/3)/2.0))+(sin(frameCount/100)*2),(sin(frameCount/24)-1)*5,windowHeight/3,windowHeight/3)
  rectMode(CENTER)
  
	buttonLoc1 = createVector(
    windowWidth/(buttonArr[0].x-(windowMult/4))+(sin((frameCount+buttonArr[0].offset)/100)*5),
    windowHeight/buttonArr[0].y+(cos((frameCount+buttonArr[0].offset)/67)*5))

	buttonLoc2 = createVector(
	windowWidth/(buttonArr[1].x+(windowMult*1))+(sin((frameCount+buttonArr[1].offset)/90)*5),
	windowHeight/buttonArr[1].y+(cos((frameCount+buttonArr[1].offset)/67)*5))

	buttonLoc3 = createVector(
	windowWidth/(buttonArr[2].x-(windowMult/4))+(sin((frameCount+buttonArr[2].offset)/100)*5),
	windowHeight/buttonArr[2].y+(cos((frameCount+buttonArr[2].offset)/67)*5))

  buttonLoc4 = createVector(
    windowWidth/(buttonArr[3].x+(windowMult/1))+(sin((frameCount+buttonArr[3].offset)/100)*5),
    windowHeight/buttonArr[3].y+(cos((frameCount+buttonArr[3].offset)/67)*5))
  for (var inst of linArr){
    push()
   if (inst.index == 30 || inst.index == 45){
      stroke(lerp(246,326,inst.y), lerp(100,100,inst.y), 95+(inst.colOff*10))
      strokeWeight(strokeWeg)
      line(
        windowWidth/2.0+((sin((frameCount+(inst.y*-800))/10)+windowWidth/44)+(sin((frameCount*.5+(inst.y*-700))/5)*5)),
        windowHeight*inst.y,
        buttonLoc1.x,
        buttonLoc1.y)
    }
  if (inst.index == 38 || inst.index == 50 || inst.index == 60){
      stroke(lerp(246,326,inst.y), lerp(100,100,inst.y), 95+(inst.colOff*10))
      strokeWeight(strokeWeg)
      line(
        windowWidth/2.0+((sin((frameCount+(inst.y*-800))/10)-windowWidth/44)+(sin((frameCount*.5+(inst.y*-700))/5)*5)),
        windowHeight*inst.y,
        buttonLoc2.x,
		buttonLoc2.y)
    }
  if (inst.index == 55 || inst.index == 72){
      stroke(lerp(246,326,inst.y), lerp(100,100,inst.y), 95+(inst.colOff*10))
      strokeWeight(strokeWeg)
      line(
        windowWidth/2.0+((sin((frameCount+(inst.y*-800))/10)+windowWidth/44)+(sin((frameCount*.5+(inst.y*-700))/5)*5)),
        windowHeight*inst.y,
        buttonLoc3.x,
        buttonLoc3.y)
    }
    if (inst.index == 74 || inst.index == 60 || inst.index == 80){
      stroke(lerp(246,326,inst.y), lerp(100,100,inst.y), 95+(inst.colOff*10))
      strokeWeight(strokeWeg)
      line(
        windowWidth/2.0+((sin((frameCount+(inst.y*-800))/10)-windowWidth/44)+(sin((frameCount*.5+(inst.y*-700))/5)*5)),
        windowHeight*inst.y,
        buttonLoc4.x,
        buttonLoc4.y)
    }
    noStroke()
    fill(lerp(246,326,inst.y), lerp(100,100,inst.y), 95+(inst.colOff*10))
    rect(windowWidth/2.0+((sin((frameCount+(inst.y*-800))/10) -0  )+(sin((frameCount*.5+(inst.y*-700))/5)*5)),windowHeight*inst.y,windowWidth/22,windowHeight/120)
    pop()
	push()
	fill(0,0,0)
	strokeWeight(strokeWeg)
	imageMode(CENTER)
	
	stroke(lerp(246,326,buttonLoc1.y/windowHeight), lerp(100,100,buttonLoc1.y/windowHeight), 95)
	
	circle(buttonLoc1.x,buttonLoc1.y,(windowHeight/10)*buttonSize1)
	image(buttonArr[0].image,buttonLoc1.x,buttonLoc1.y,(windowHeight/15)*buttonSize1,(windowHeight/15)*buttonSize1)
	
	stroke(lerp(246,326,buttonLoc2.y/windowHeight), lerp(100,100,buttonLoc2.y/windowHeight), 95)
	
	circle(buttonLoc2.x,buttonLoc2.y,(windowHeight/10)*buttonSize2)
	image(buttonArr[1].image,buttonLoc2.x,buttonLoc2.y,(windowHeight/14)*buttonSize2,(windowHeight/14)*buttonSize2)
	
	stroke(lerp(246,326,buttonLoc3.y/windowHeight), lerp(100,100,buttonLoc3.y/windowHeight), 95)
	
	circle(buttonLoc3.x,buttonLoc3.y,(windowHeight/10)*buttonSize3)
	image(buttonArr[2].image,buttonLoc3.x,buttonLoc3.y,(windowHeight/14)*buttonSize3,(windowHeight/14)*buttonSize3)	

  stroke(lerp(246,326,buttonLoc4.y/windowHeight), lerp(100,100,buttonLoc4.y/windowHeight), 95)
	
	circle(buttonLoc4.x,buttonLoc4.y,(windowHeight/10)*buttonSize4)
	image(buttonArr[3].image,buttonLoc4.x,buttonLoc4.y,(windowHeight/12)*buttonSize4,(windowHeight/12)*buttonSize4)	
	pop()


	if (getDistance(buttonLoc1.x,buttonLoc1.y,mouseX,mouseY) < windowHeight/15){
		buttonSize1 = lerp(buttonSize1, 1.2,0.0001*deltaTime)
	} else {
		buttonSize1 = lerp(buttonSize1, 1,0.0001*deltaTime)		
	}
	if (getDistance(buttonLoc2.x,buttonLoc2.y,mouseX,mouseY) < windowHeight/15){
		buttonSize2 = lerp(buttonSize2, 1.2,0.0001*deltaTime)
	} else {
		buttonSize2 = lerp(buttonSize2, 1,0.0001*deltaTime)		
	}
	if (getDistance(buttonLoc3.x,buttonLoc3.y,mouseX,mouseY) < windowHeight/15){
		buttonSize3 = lerp(buttonSize3, 1.2,0.0001*deltaTime)
	} else {
		buttonSize3 = lerp(buttonSize3, 1,0.0001*deltaTime)		
	}
	if (getDistance(buttonLoc4.x,buttonLoc4.y,mouseX,mouseY) < windowHeight/15){
		buttonSize4 = lerp(buttonSize4, 1.2,0.0001*deltaTime)
	} else {
		buttonSize4 = lerp(buttonSize4, 1,0.0001*deltaTime)		
	}  
}
  image(porTop,((windowWidth/2.0)-((windowHeight/3)/2.0))+(sin(frameCount/100)*2),(sin(frameCount/24)-1)*5,windowHeight/3,windowHeight/3)
  
  push()
  translate(windowWidth/10,windowWidth/10)
  rotate((sin(frameCount/20)*.1))
  pop()
  imageMode(CORNER)

  if (windowWidth <= windowHeight){
    windowMult = 1
  } else{
    windowMult=0
  }
}

function getDistance(x1,y1,x2,y2){
	let y = x2-x1;
	let x = y2-y1;
	return Math.sqrt(x * x + y * y)
}

function windowResized() {

	resizeCanvas(windowWidth, windowHeight);
	background(0)
  }