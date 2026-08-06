// el footer
const footer = document.querySelector("footer p");

footer.textContent = `© ${new Date().getFullYear()} SpeedTest`;


// el boton para ir arriba xd
const backButton = document.querySelector(".home-button");

backButton.addEventListener("mouseover", () => {

    backButton.style.transform = "scale(1.05)";

});

backButton.addEventListener("mouseout", () => {

    backButton.style.transform = "scale(1)";

});


// tarjetas animadas
const cards = document.querySelectorAll(".info-card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

cards.forEach(card => observer.observe(card));

const language = document.getElementById("language");

language.addEventListener("change", () => {

    const lang = translations[language.value];

    document.getElementById("title").textContent = lang.title;
    document.getElementById("subtitle").textContent = lang.subtitle;
    // entender los resultados xd
    document.getElementById("resultsTitle").textContent = lang.resultsTitle;

    document.getElementById("downloadTitle").textContent = lang.downloadTitle;
    document.getElementById("downloadText").textContent = lang.downloadText;

    document.getElementById("uploadTitle").textContent = lang.uploadTitle;
    document.getElementById("uploadText").textContent = lang.uploadText;

    document.getElementById("pingCardTitle").textContent = lang.pingCardTitle;
    document.getElementById("pingText").textContent = lang.pingText;
    // velocidad de recomendacion xd 
    document.getElementById("recommendedTitle").textContent = lang.recommendedTitle;

    document.getElementById("activityHeader").textContent = lang.activity;
    document.getElementById("speedHeader").textContent = lang.speed;
    
    document.getElementById("browsingRow").textContent = lang.browsing;
    document.getElementById("streamingRow").textContent = lang.streaming;
    document.getElementById("streaming4kRow").textContent = lang.streaming4k;
    document.getElementById("callsRow").textContent = lang.calls;
    document.getElementById("gamingRow").textContent = lang.gaming;
    document.getElementById("downloadsRow").textContent = lang.downloads;
    // el speed rating
    document.getElementById("ratingTitle").textContent = lang.ratingTitle;

    document.getElementById("excellentTitle").textContent = lang.excellentTitle;
    document.getElementById("excellentText").textContent = lang.excellentText;
    
    document.getElementById("goodTitle").textContent = lang.goodTitle;
    document.getElementById("goodText").textContent = lang.goodText;
    
    document.getElementById("averageTitle").textContent = lang.averageTitle;
    document.getElementById("averageText").textContent = lang.averageText;
    
    document.getElementById("slowTitle").textContent = lang.slowTitle;
    document.getElementById("slowText").textContent = lang.slowText;

    // los tips
    document.getElementById("tipsTitle").textContent = lang.tipsTitle;
    
    document.getElementById("tip1").textContent = lang.tip1;
    document.getElementById("tip2").textContent = lang.tip2;
    document.getElementById("tip3").textContent = lang.tip3;
    document.getElementById("tip4").textContent = lang.tip4;
    document.getElementById("tip5").textContent = lang.tip5;
    document.getElementById("tip6").textContent = lang.tip6;
    
    // FAQ
    document.getElementById("faqTitle").textContent = lang.faqTitle;
    
    document.getElementById("faq1Title").textContent = lang.faq1Title;
    document.getElementById("faq1Text").textContent = lang.faq1Text;
    
    document.getElementById("faq2Title").textContent = lang.faq2Title;
    document.getElementById("faq2Text").textContent = lang.faq2Text;
    
    document.getElementById("faq3Title").textContent = lang.faq3Title;
    document.getElementById("faq3Text").textContent = lang.faq3Text;
    
    document.getElementById("faq4Title").textContent = lang.faq4Title;
    document.getElementById("faq4Text").textContent = lang.faq4Text;
    
    // Botón
    document.getElementById("backButton").textContent = lang.back;
    
    
});
