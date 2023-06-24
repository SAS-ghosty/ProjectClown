noseX=0;
noseY=0;

function preload() {
    clownnose = loadImage('https://i.postimg.cc/B63YF5ZV/clownnose.png');
}

function setup(){
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    postNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Intitialized')
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + noseX)
    console.log("nose y = " + noseY)
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
}
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clownnose, noseX, noseY, 30, 30);
}
function take_snapshot(){
    save('myFilterImage.png')
}