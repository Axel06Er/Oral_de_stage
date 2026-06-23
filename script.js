window.addEventListener('DOMContentLoaded', () => {
    const welcomeTitle = document.getElementById('welcome-title');
    const liveClock = document.getElementById('live-clock');

    function updateTime() {
        const now = new Date();
        const hour = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');


        if (hour >= 18) {
            welcomeTitle.textContent = "Bonsoir ! Bienvenue sur mon tableau de compétences";
        } else {
            welcomeTitle.textContent = "Bonjour ! Bienvenue sur mon tableau de compétences";
        }

  
        liveClock.textContent = `Il est actuellement ${hour}h${minutes}:${seconds}`;
    }


    updateTime();
    

    setInterval(updateTime, 1000);
});