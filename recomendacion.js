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
