'use strict';

const video = document.getElementById('video');
const capture = document.getElementById("capture");
const canvas = document.getElementById('canvas');
const errorMsgElement = document.querySelector('span#errorMsg');

//0-->Frontal-->user
//1-->Trasera-->environment
let sel = 0;
const mode = (sel === 1) ? 'environment' : 'user';

const constraints = {
    audio: false,
    video: {
        width: 200,
        height: 300,
        facingMode: {
            exact: mode
        },
        aspectRatio: 16/9 //Position
    }
};

// Acceso a la webcam
async function webCam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);//console.log(stream);
        window.stream = stream;
        video.srcObject = stream;
        //video.play();
    } catch (e) {
        let msg = `navigator.getUserMedia error:${e.toString()}`; console.log(msg);
        //errorMsgElement.innerHTML = msg;
    }
}
// Correcto!
/*function handleSuccess(stream) {
    window.stream = stream;
    video.srcObject = stream;
}*/
// Load webCam
webCam();
// Dibuja la imagen
var context = canvas.getContext('2d');
capture.addEventListener("click", function () {
    context.drawImage(video, 0, 0, 480, 640);
    var data = canvas.toDataURL('image/png');
    console.log(data);
});