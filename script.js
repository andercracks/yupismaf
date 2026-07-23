const startButton = document.getElementById("startButton");

const speedValue = document.getElementById("speedValue");

const download = document.getElementById("download");
const upload = document.getElementById("upload");
const ping = document.getElementById("ping");

const status = document.getElementById("status");

let testing = false;

startButton.addEventListener("click", startSpeedTest);

function startSpeedTest() {

    if (testing) return;

    testing = true;

    startButton.disabled = true;
    startButton.textContent = "Probando...";

    status.textContent = "Realizando prueba de velocidad...";

    speedValue.textContent = "0";

    download.textContent = "-- Mbps";
    upload.textContent = "-- Mbps";
    ping.textContent = "-- ms";

    let currentSpeed = 0;

    const animation = setInterval(() => {

        currentSpeed += Math.floor(Math.random() * 8) + 2;

        if (currentSpeed > 100) {
            currentSpeed = 100;
        }

        speedValue.textContent = currentSpeed;

    }, 100);

    setTimeout(() => {

        clearInterval(animation);

        const finalDownload = (Math.random() * 250 + 50).toFixed(2);
        const finalUpload = (Math.random() * 80 + 20).toFixed(2);
        const finalPing = Math.floor(Math.random() * 40 + 5);

        speedValue.textContent = finalDownload;

        download.textContent = `${finalDownload} Mbps`;
        upload.textContent = `${finalUpload} Mbps`;
        ping.textContent = `${finalPing} ms`;

        status.textContent = "Prueba finalizada correctamente.";

        startButton.disabled = false;
        startButton.textContent = "Iniciar prueba";

        testing = false;

    }, 5000);

}
