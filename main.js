song1=""
song2=""
leftWristX=0
leftWristY=0
rightWristX=0
rightWristY=0
scoreRightWrist=0
scoreLeftWrist=0

function preload() 
{
    song1= loadSound("LejaRe.mp3")
    song2 = loadSound("Saanson.mp3")
}
function setup() {
    canvas=createCanvas(550,435)
    canvas.center();
    video = createCapture(VIDEO)
    video.hide()
    poseNet=ml5.poseNet(video,modelLoaded)
   
}
function modelLoaded(){
    console.log("poseNet Is Initialized")
}





function draw(){
    image(video,0,0,600,530);

    fill("#00ff00");
    stroke("#ff0000");

   
    console.log(song_name);

    if(scoreLeftWrist > 0.2)
    {
        circle(leftWrist_x,leftWrist_y,20);
       LejaRe.stop();
        if(song_name == false){
            LejaRe.play();
        }
        else{
            console.log("Song Name:LejaRe");
            document.getElementById("song_id").innerHTML = "Song Name: LejaRe";
        }
    }
}
{



}
function gotposes(results){
    if(results.length > 0){
        console.log(results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}