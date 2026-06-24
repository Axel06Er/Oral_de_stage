window.addEventListener('DOMContentLoaded', () => {

    const welcomeTitle = document.getElementById('welcome-title');
    const liveClock = document.getElementById('live-clock');

    const now = new Date();
    const hour = now.getHours();
    let message = "";

    if (hour >= 18) {
        message = "Bonsoir ! Bienvenue sur mon tableau de compétences.";
    } else {
        message = "Bonjour ! Bienvenue sur mon tableau de compétences.";
    }

    let index = 0;
    welcomeTitle.textContent = ""; 

    function typeWriter() {
        if (index < message.length) {
            welcomeTitle.textContent += message.charAt(index);
            index++;
            setTimeout(typeWriter, 35);  
        } else {
            welcomeTitle.style.borderRight = "none";
        }
    }

    typeWriter();
    
    function updateTime() {
        const clockNow = new Date();
        const clockHour = clockNow.getHours();
        const minutes = clockNow.getMinutes().toString().padStart(2, '0');
        const seconds = clockNow.getSeconds().toString().padStart(2, '0');
        liveClock.textContent = `Il est actuellement ${clockHour}h${minutes}:${seconds}`;
    }

    updateTime();
    setInterval(updateTime, 1000);

    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
});