
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById("progress-bar").style.width = scrollPercent + "%";
});
window.addEventListener("scroll", () => {
    const animatedSection = document.getElementById("animated-section");
    const sectionPos = animatedSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        animatedSection.classList.add("show");
    }
});


function getLocation() {
    const output = document.getElementById("geo-output");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                output.innerText = `Latitudine: ${pos.coords.latitude}, Longitudine: ${pos.coords.longitude}`;
            },
            () => {
                output.innerText = "Acces la locație refuzat.";
            }
        );
    } else {
        output.innerText = "Geolocalizarea nu este suportată de browser.";
    }
}

document.getElementById("get-quote-btn").addEventListener("click", () => {
    const quoteOutput = document.getElementById("quote-output");
    quoteOutput.innerText = "Se încarcă...";
    
    fetch("https://dummyjson.com/quotes/random")
        .then(response => response.json())
        .then(data => {
            quoteOutput.innerText = `"${data.quote}" — ${data.author}`;
        })
        .catch(() => {
            quoteOutput.innerText = "Nu s-a putut încărca citatul.";
        });
});
