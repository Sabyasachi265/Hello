var myCanvas = document.getElementById("HiCanvas");
ctx = myCanvas.getContext("2d");
var car1_width = 120;
var car1_height = 70;
var car1_image = "pngtree-car-car-traffic-cartoon-car-png-image_361579.jpg";
var car1_x = 10;
var car1_y = 10;
var car2_width = 120;
var car2_height = 70;
var car2_image = "car.jpg";
var car2_x = 100;
var car2_y = 100;
var background_image = "w.jpg";

function add(){
    background_imageTag = new Image();
    background_imageTag.onload = uploadbackground;
    background_imageTag.src = background_image;
    
    car1_imageTag = new Image();
    car1_imageTag.onload = uploadcar1;
    car1_imageTag.src = car1_image;
    car2_imageTag = new Image();
    car2_imageTag.onload = uploadcar2;
    car2_imageTag.src = car2_image;
}

function uploadbackground(){
    ctx.drawImage(background_imageTag, 0, 0, myCanvas.width, myCanvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imageTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar1(){
    ctx.drawImage(car2_imageTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

 if( keyPressed ==  "38"){
     car1Up();
     console.log("Up");
 }

 if( keyPressed ==  "40"){
    car1Down();
    console.log("Down");
}

if( keyPressed ==  "37"){
    car1Left();
    console.log("Left");
}

if( keyPressed ==  "39"){
    car1Right();
    console.log("Right");
}
if( keyPressed ==  "87"){
    car2up();
    console.log("W");
}
if( keyPressed ==  "83"){
    car2down();
    console.log("S");
}
if( keyPressed ==  "65"){
    car2left();
    console.log("A");
}
if( keyPressed ==  "68"){
    car2right();
    console.log("D");
}
if(car1_x > 700){
console.log("Car 1 Won")
document.getElementById('game status').innerHTML="Car 1 Won!!"
}
if(car1_x > 700){
    console.log("Car 1 Won")
    document.getElementById('game status').innerHTML="Car 1 Won!!"
}
}
function car1Up(){
    if(car1_y >=0){
        car1_y = car1_y-10;
        console.log("when up arrow is pressed, x = " + car1_x + " y = "+car1_y)
        uploadbackground();
        uploadcar1()
        uploadcar2()
    }
} 
function car1Down(){
    if(car1_y <=500){
        car1_y = car1_y+10;
        console.log("when down arrow is pressed, x = " + car1_x + " y = "+car1_y)
        uploadbackground();
        uploadcar1()
        uploadcar2()
    }
} 
function car1Left(){
    if(car1_x >=0){
        car1_x = car1_x-10;
        console.log("when left arrow is pressed, x = " + car1_x + " y = "+car1_y)
        uploadbackground();
        uploadcar1()
        uploadcar2()
    }
} 
function car1Right(){
    if(car1_x <=700){
        car1_x = car1_x+10;
        console.log("when right arrow is pressed, x = " + car1_x + " y = "+car1_y)
        uploadbackground();
        uploadcar1()
        uploadcar2()
    }
} 
function car2up(){
    if(car1_y >=0){
        car1_y = car1_y-10;
        console.log("when up arrow is pressed, x = " + car1_x + " y = "+car1_y)
        uploadbackground();
        uploadcar1()
        uploadcar2()
    }
} 
function car2down(){
    if(car1_y <=500){
        car1_y = car1_y+10;
        console.log("when down arrow is pressed, x = " + car1_x + " y = "+car1_y)
        uploadbackground();
        uploadcar1()
        uploadcar2()
    }
} 
function car2left(){
    if(car1_x >=0){
        car1_x = car1_x-10;
        console.log("when left arrow is pressed, x = " + car1_x + " y = "+car1_y)
        uploadbackground();
        uploadcar1()
        uploadcar2()
    }
} 
function car2right(){
    if(car1_x <=700){
        car1_x = car1_x+10;
        console.log("when right arrow is pressed, x = " + car1_x + " y = "+car1_y)
        uploadbackground();
        uploadcar1()
        uploadcar2()
    }
} 
