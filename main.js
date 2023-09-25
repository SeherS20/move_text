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
    }

}
function modelLoaded(){
    console.log("Posenet is initialized! 🌈🌈🌈")
}
function draw(){
    background("rgb(232, 175, 228)")
}