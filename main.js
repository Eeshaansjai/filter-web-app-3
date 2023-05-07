noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/C5LRGB6q/360-F-530202726-Uzd-VE1t3-PJhqp3-Kop-WGs-Mob-SG2-Nhv7-Yw-removebg-preview.png')
}
function setup() {
  canvas = createCanvas(600, 600);
  canvas.position(200,170);
  video = createCapture(VIDEO);
  video.size(600, 600);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y+15;
  }
}

function draw() {
  image(video, 0, 0, 600, 600);
  image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
