const form = document.querySelector('form');
const radiusInput = document.getElementById('radius');
const volume = document.getElementById('volume');

function CalculateVolumeOfSphere(event) {
    event.preventDefault();
    let radius= parseFloat(radiusInput.value);
    let volumeOutput = (4/3)*Math.PI*Math.pow(radius, 3);
    volume.value = volumeOutput;
}

form.addEventListener('submit',CalculateVolumeOfSphere);