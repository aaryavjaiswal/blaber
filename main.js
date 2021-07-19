Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality:110,

    constraints: {
        facingMode: "environment"
    }
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot_view").innerHTML = '<img id="captured_image" src="' + data_uri + '"/></img>';
    });
};

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded(){
    console.log("Model loaded");
}

function test(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("obj_name").innerHTML = results[0].label;
    }
}