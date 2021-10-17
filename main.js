function preload(){
}

function setup(){
    Canvas=createCanvas(640,480);
    Canvas.position(0,70)
    video=createCapture(VIDEO);
    video.hide();
}

    
    function draw() {
        image(video,275,185,220,200)
        
        
    
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(600,150 ,20,250);
      
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(150,150,20,250);
      
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(150,150,450,20);
      
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(150,400,450,20);
      
    fill(0,255, 0);
    stroke(128, 0, 0);
    ellipse(160, 160, 55, 55);
      
    fill(0,255, 0);
    stroke(128, 0, 0);
    ellipse(610, 160, 55, 55);
    
    fill(0,255, 0);
    stroke(128, 0, 0);
    ellipse(610, 410, 55, 55);
      
    fill(0,255, 0);
    stroke(128, 0, 0);
    ellipse(160, 410, 55, 55);
    }


function nppf() {
    save("home.png")
}