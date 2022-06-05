nosex=0;
nosey=0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotposes);
    
}
function draw(){
    background("#969A97");
    document.getElementById("square_side").innerHTML="width and height of a square will be = "+difference+"px";
    fill("#A2BAF5");
    stroke("#A2BAF5");
    square(nosex,nosey,difference);
}
function modelLoaded(){
    console.log("poseNet is Initialized");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex= "+ nosex +"nosey= " + nosey);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX= "+ leftWristX +"rightWristX= " + rightWristX + "difference= " + difference);
    }
}
