const heartsEl = document.getElementById('hearts');
const heartChars = ['♡', '♥', '💗', '💕', '🌸'];

for (let i = 0; i < 18; i++) {
    const h = document.createElement('div');
    h.className = 'heart';
    h.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
    h.style.left = Math.random() * 100 + '%';
    h.style.fontSize = (14 + Math.random() * 18) + 'px';
    h.style.animationDuration = (8 + Math.random() * 12) + 's';
    h.style.animationDelay = (Math.random() * 10) + 's';
    heartsEl.appendChild(h);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));