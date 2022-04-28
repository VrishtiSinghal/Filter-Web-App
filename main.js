function preload(){
    mustache=loadImage("https://i.postimg.cc/j5qTLTxV/mustache.png");
}
NoseX=0;
NoseY=0;

function setup(){
    canvas=createCanvas(300,250);
    canvas.center(); 
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        NoseX=results[0].pose.nose.x;
        NoseY=results[0].pose.nose.y;
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache,NoseX-28,NoseY-5,60,50);
}

function take_snapshot(){
    save("myImage.png");
}