'use strict';

const video = document.getElementById('video');
const snap = document.getElementById("snap");
const canvas = document.getElementById('canvas');
const errorMsgElement = document.querySelector('span#errorMsg');

//0-->Frontal-->user
//1-->Trasera-->environment
let sel = 0;
const mode = (sel === 1) ? 'environment' : 'user';

const constraints = {
    audio: false,
    video: {
        width: 640,
        height: 480,
        facingMode: {
            exact: mode
        }
    }
};

// Acceso a la webcam
async function init() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
    } catch (e) {
        let msg = `navigator.getUserMedia error:${e.toString()}`; console.log(msg);
        //errorMsgElement.innerHTML = msg;
    }
}
// Correcto!
function handleSuccess(stream) {
    window.stream = stream;
    video.srcObject = stream;
}
// Load init
init();
// Dibuja la imagen
var context = canvas.getContext('2d');
snap.addEventListener("click", function () {
    context.drawImage(video, 0, 0, 480, 640);
});