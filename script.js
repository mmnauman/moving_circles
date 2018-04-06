
window.onload = function(){
let canvas = document.getElementsByTagName("canvas");
const c = canvas[0].getContext("2d");
const windowWidth = window.innerWidth;

const windowHeight = window.innerHeight;

canvas[0].width = windowWidth;
canvas[0].height = windowHeight;  
    
var colorsContainer = ["red", "blue", "green", "yellow", "black"];  
//console.log(colorsContainer);

const mouse = {
    x: undefined,
    y: undefined
}       
    
// resize event

window.addEventListener("resize", function(){
    
    canvas[0].width = windowWidth;
    canvas[0].height = windowHeight;  
    
    location.reload();
});


// Mouse Move Event
    window.addEventListener("mousemove", function(e){
         mouse.x = e.x;
    mouse.y = e.y;
        
//console.log(mouse.x, windowWidth);
    });
    
function Circle(xp,yp,r,xv,yv){
    this.xp= xp;
    this.yp= yp;
    this.radius= r;
    this.xv= xv;
    this.yv= yv;
    this.colors = colorsContainer[Math.floor(Math.random() * 5)];
    this.minRadius = r;

    this.draw = function(){
        c.beginPath();        
        c.arc(this.xp,this.yp,this.radius,0,100,false);
        c.strokeStyle = "white";
        c.stroke();
        c.fillStyle = this.colors;
        c.fill(); 
        c.shadowColor = "white";
        c.shadowBlur = 8;
        c.lineWidth = 5;
    }
    
    this.update = function(){
         if((this.xp + this.radius) > windowWidth || this.xp - this.radius < 0){
             
             this.xv = -this.xv;

    }
    
        if(this.yp + this.radius > windowHeight || this.yp - this.radius < 0 ){
        
        this.yv = -this.yv
        
    }
        
       
        this.xp += this.xv;
        this.yp += this.yv;
        
        if(mouse.x - this.xp < 50 && mouse.x - this.xp > -50 && mouse.y - this.yp < 50 && mouse.y - this.yp > -50){
            if(this.radius < 80){
            this.radius += 4;
            }
        }else if(this.radius > this.minRadius ){
            this.radius -=1;
        }
        
        
            this.draw();

    }
    
    
    
}   
    
//var circle = new Circle(200,100, 50, 1, 1); 
    


//console.log(c); 
    
let circleContainer = [];
    
for(var i = 0; i < 300; i++){
let radius = Math.random() * 10 + 1;  
let xp = Math.random() * (windowWidth - radius * 2 ) + radius;
let yp = Math.random() * (windowHeight - radius * 2 ) + radius;
let xv = Math.random() - 0.5 + 4 ;
let yv = Math.random() - 0.5 + 4;

circleContainer.push(new Circle(xp,yp, radius, xv, yv));
}    


    
   // console.log(circleContainer);
    
// manipulating circle
    
    
// Animation
    
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,windowWidth, windowHeight);
    
   
    for(var i = 0; i < circleContainer.length; i++){
        circleContainer[i].update();
    }
  
}
    
 animate();   
    
}

