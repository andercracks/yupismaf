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
    startButton.textContent = translations[language.value].testing;

    status.textContent = translations[language.value].running;

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

        status.textContent = translations[language.value].finished;

        startButton.disabled = false;
        startButton.textContent = translations[language.value].start;

        testing = false;

    }, 5000);

}

const language = document.getElementById("language");

    const translations = {
    
        es:{
    
            title:"📈 SpeedTest",
            subtitle:"Comprueba la velocidad de tu conexión a Internet 🎠",
    
            start:"Iniciar prueba",
            testing:"Probando...",
    
            waiting:"Esperando para iniciar...",
            running:"Realizando prueba de velocidad...",
            finished:"Prueba finalizada correctamente."

            guideTitle:"📘 Guía de velocidad de Internet",

            guideText:"¿No sabes si tu velocidad de Internet es suficiente? Aprende qué significan la velocidad de descarga, subida y el ping, y descubre la conexión recomendada para juegos, streaming, videollamadas y navegación diaria.",
        
            guideButton:"Ver recomendaciones →"
    
        },
    
        en:{
    
            title:"📈 SpeedTest",
            subtitle:"Check your internet connection speed 🚀",
    
            start:"Start Test",
            testing:"Testing...",
    
            waiting:"Waiting to start...",
            running:"Running speed test...",
            finished:"Speed test completed."

            guideTitle:"📘 Internet Speed Guide",

            guideText:"Not sure if your internet speed is good enough? Learn what download speed, upload speed and ping mean, and discover the recommended connection for gaming, streaming, video calls and everyday browsing.",
        
            guideButton:"View Recommendations →"
    
        }
    
    };

language.addEventListener("change", () => {

    const lang = translations[language.value];

    document.querySelector("h1").textContent = lang.title;

    document.querySelector(".subtitle").textContent = lang.subtitle;

    document.getElementById("guideTitle").textContent = lang.guideTitle;

    document.getElementById("guideText").textContent = lang.guideText;
    
    document.getElementById("guideButton").textContent = lang.guideButton;

    startButton.textContent = lang.start;

    status.textContent = lang.waiting;

});
