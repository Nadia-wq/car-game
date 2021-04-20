canvas=document.getElementById ("myCanvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;
car1_img="car1.png"; 

car2_width=120;
car2_height=70;
car2_x=10;
car2_y=100;
car2_img="car1.png";
background_img="racing.jpg";
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_img;


    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_img;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_img;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function uploadcar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if(keypressed=='38'){
    up1();
    console.log("up");
}
if(keypressed=='40'){
    down1();
    console.log("down");
}if(keypressed=='37'){
    left1();
    console.log("left");
}if(keypressed=='39'){
    right1();
    console.log("right");
}
if(keypressed=='87'){
    up2();
    console.log("W");
}
if(keypressed=='83'){
    down2();
    console.log("S");
}if(keypressed=='65'){
    left2();
    console.log("A");
}if(keypressed=='68'){
    right2();
    console.log("D");
}
}
function up1(){
if(car1_y>=0){
    car1_y-=10;
    uploadBackground();
    uploadcar1();
    uploadcar2();
}
}
function down1(){
    if(car1_y<=500){
        car1_y+=10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function left1(){
    if(car1_x>=0){
        car1_x-=10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function right1(){
    if(car1_x<=700){
        car1_x+=10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function up2(){
    if(car2_y>=0){
        car2_y-=10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
    }
    function down2(){
        if(car2_y<=500){
            car2_y+=10;
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }
    function left2(){
        if(car2_x>=0){
            car2_x-=10;
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }
    function right2(){
        if(car2_x<=700){
            car2_x+=10;
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }