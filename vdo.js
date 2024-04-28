const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const startCallBtn = document.getElementById('startCallBtn');
const endCallBtn = document.getElementById('endCallBtn');

let isCalling = false;

startCallBtn.addEventListener('click', startCall);
endCallBtn.addEventListener('click', endCall);

function startCall() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
      localVideo.srcObject = stream;
      isCalling = true;
    })
    .catch(error => console.error('Error accessing media devices:', error));
}

function endCall() {
  if (isCalling) {
    const stream = localVideo.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(track => track.stop());
    localVideo.srcObject = null;
    isCalling = false;
  }
}
