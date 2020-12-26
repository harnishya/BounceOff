var rect1,rect2,rect3,rect4

function setup() {
	createCanvas(600,600);
	rect1 = createSprite (200,100,50,50);
	rect2 = createSprite (400,100,50,50);
    rect3 = createSprite (300,200,50,50);
	rect4 = createSprite (300,400,50,50);

	rect1.velocityX=3;
	rect2.velocityX=-3;
	rect3.velocityY=4;
	rect4.velocityY=-4;
}

function draw(){
background ("black");
bounceOff(rect1,rect2);
bounceOff(rect3,rect4);

drawSprites()
}

