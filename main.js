canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=100;
rover_x=10;
rover_y=10;
rover_image='rover.png';
bg_array=["1.jpg","2.jpg","3.jpg","4.jpg","mars.jpg"]
var xyz=Math.floor(Math.random()*5);
background_image=bg_array[xyz];
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    rover_imgTag=new Image();
    rover_imgTag=uploadrover;
    rover_imgTag=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        uploadBackground();
        uploadrover();
    }
}
function down()
{
    if(rover_y<=600){
        rover_y=rover_y+10;
        uploadBackground();
        uploadrover();
    }
}
function left(){
    if(rover_x>=0)
    {
        rover_x=rover_x-10;
        uploadBackground();
        uploadrover();
    }
}
function right(){
    if(rover_x<=800){
        uploadBackground();
        uploadrover();
    }
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        up();
        console.log("up");
    }
    if(keyPressed=='40')
    {
        down();
        console.log("down");
    }
    if(keyPressed=='37')
    {
        left();
        console.log("left");
    }
    if(keyPressed=='39')
    {
        right();
        console.log("right");
    }
}
