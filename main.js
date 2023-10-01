noseX = 0;
noseY = 0;
difference = 0;
rightwristX = 0;
leftwristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.position( 100, 100)
    canvas = createCanvas(500,400)
    canvas.position(650, 100)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose" , gotPoses);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = Math.floor(leftwristX - rightwristX);

        console.log("Nose x = " +noseX+ "Nose y =" +noseY+ "right wrist x = " + rightwristX + "left wrist x =" +leftwristX+ "difference = " +difference)
    }

}
function modelLoaded(){
    console.log("Posenet is initialized! 🌈🌈🌈")
}
function draw(){
    background("rgb(232, 175, 228)")
    fill("#725373")
    textSize(difference)
    text("Seher", noseX, noseY)
}