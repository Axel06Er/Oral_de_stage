
const themeToggleBtn = document.getElementById('theme-toggle');


themeToggleBtn.addEventListener('click', () => {
    

    document.body.classList.toggle('light-mode');
    

    if (document.body.classList.contains('light-mode')) {
        themeToggleBtn.textContent = '🌙 Mode Sombre';
    } else {
        themeToggleBtn.textContent = '☀️ Mode Clair';
    }
});