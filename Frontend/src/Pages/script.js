

window.onload = function(){
    navigator.mediaDevices.getUserMedia ({ audio:true, video: true}).then(stream => {
        document.getElementById("video").srcObject = stream;
        document.getElementById("btn").onclick = function () {
            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.start(1000);

            mediaRecorder.ondataavailable = function (e) {

            }
        }
    });

}