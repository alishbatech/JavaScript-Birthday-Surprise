// ============================
// SCREEN NAVIGATION
// ============================

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    document.getElementById(screenId).classList.add('active');
}

document.getElementById('startBtn').addEventListener('click', function () {
    showScreen('screen2');
});

// ============================
// GIFT REVEAL WITH ANIMATION
// ============================

document.getElementById('giftBtn').addEventListener('click', function () {
    const gift = document.querySelector('.gift');
    const giftContainer = document.querySelector('.gift-container');

    gift.classList.add('opening');

    const lid = document.createElement('div');
    lid.className = 'gift-lid';
    lid.textContent = '🎀';
    giftContainer.appendChild(lid);

    const shine = document.createElement('div');
    shine.className = 'gift-shine';
    giftContainer.appendChild(shine);

    // Create sparks
    createGiftSparks(giftContainer);

    setTimeout(() => {
        this.classList.add('hidden');
        document.getElementById('giftMessage').classList.remove('hidden');
    }, 300);
});

function createGiftSparks(container) {
    const sparkEmojis = ['✨', '⭐', '💫'];

    for (let i = 0; i < 8; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        spark.textContent = sparkEmojis[Math.floor(Math.random() * sparkEmojis.length)];
        spark.style.left = '50%';
        spark.style.top = '50%';
        spark.style.fontSize = '1.5rem';
        spark.style.animation = `sparkFly ${0.8 + Math.random() * 0.4}s ease-out forwards`;
        spark.style.animationDelay = (i * 0.05) + 's';

        const angle = (i / 8) * Math.PI * 2;
        const distance = 100;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        spark.style.setProperty('--x', x + 'px');
        spark.style.setProperty('--y', y + 'px');

        container.appendChild(spark);

        setTimeout(() => {
            spark.remove();
        }, 1200);
    }
}

// Add sparkfly animation
const sparkStyle = document.createElement('style');
sparkStyle.textContent = `
            @keyframes sparkFly {
                0% {
                    transform: translate(0, 0) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translate(var(--x), var(--y)) scale(0);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(sparkStyle);

document.getElementById('continue1').addEventListener('click', function () {
    showScreen('screen3');
    document.getElementById('giftBtn').classList.remove('hidden');
    document.getElementById('giftMessage').classList.add('hidden');
    const gift = document.querySelector('.gift');
    gift.classList.remove('opening');
    document.querySelectorAll('.gift-lid, .gift-shine, .spark').forEach(el => el.remove());
});

 // ============================
// LETTER TYPING EFFECT
// ============================

const letterContent = `Dear Birthday Star✨,
Another year, another beautiful chapter.
May this birthday mark the beginning of exciting opportunities, unforgettable adventures, and moments that make you truly happy😊.
Keep chasing your dreams, stay true to yourself, and never lose your smile.
Wishing you a year filled with success, peace, laughter, and everything you've been hoping for.
 Happy Birthday! 🎂🎉`;

let typingIndex = 0;
let isTyping = false;

document.getElementById('letterBtn').addEventListener('click', function () {
    if (isTyping) return;

    this.classList.add('hidden');
    document.getElementById('letter').classList.remove('hidden');
    typeText();
});

function typeText() {
    isTyping = true;
    const typingText = document.getElementById('typingText');
    typingText.textContent = '';
    typingIndex = 0;

    function type() {
        if (typingIndex < letterContent.length) {
            typingText.textContent += letterContent[typingIndex];
            typingIndex++;
            setTimeout(type, 30);
        } else {
            isTyping = false;
        }
    }
    type();
}

document.getElementById('continue2').addEventListener('click', function () {
    showScreen('screen4');
    // Reset letter for potential replay
    document.getElementById('letterBtn').classList.remove('hidden');
    document.getElementById('letter').classList.add('hidden');
    document.getElementById('typingText').textContent = '';
    typingIndex = 0;
});

// ============================
// CANDLE BLOW EFFECT
// ============================

document.getElementById('blowBtn').addEventListener('click', function () {
    const cake = document.querySelector('.cake');

    // Add blow animation
    cake.style.animation = 'none';
    setTimeout(() => {
        cake.style.animation = '';
    }, 10);

    const candlesText = '🕯️🕯️🕯️<br>🎂';
    cake.innerHTML = candlesText;

    cake.style.opacity = '0.3';
    cake.style.transform = 'scale(0.9)';

  
    setTimeout(() => {
        cake.style.opacity = '1';
        cake.style.transform = 'scale(1)';
        cake.innerHTML = '✨🎂✨';
    }, 600);

    this.classList.add('hidden');
    document.getElementById('continue3').classList.remove('hidden');
});

document.getElementById('continue3').addEventListener('click', function () {
    showScreen('screen5');
    document.querySelector('.cake').innerHTML = '🕯️🕯️🕯️<br>🎂';
    document.getElementById('blowBtn').classList.remove('hidden');
    this.classList.add('hidden');
});

// ============================
// CELEBRATION & CONFETTI
// ============================

document.getElementById('celebrateBtn').addEventListener('click', function () {
    createConfetti();
    this.classList.add('hidden');
    document.getElementById('continue4').classList.remove('hidden');
});

document.getElementById('continue4').addEventListener('click', function () {
    showScreen('screen6');
    document.getElementById('celebrateBtn').classList.remove('hidden');
    this.classList.add('hidden');
    // Clear confetti
    document.getElementById('confetti').innerHTML = '';
});

// ============================
// CONFETTI ANIMATION
// ============================

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#ff5ea8', '#9876fe', '#ffd700', '#fea6d0', '#cfa6fa'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.animation = `fall ${2 + Math.random() * 2}s linear infinite`;

        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

// Add falling animation
const style = document.createElement('style');
style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);

// ============================
// EASTER EGG: KEYBOARD SHORTCUTS
// ============================

document.addEventListener('keydown', function (e) {
    if (e.key === 'n' || e.key === 'N') {
        const buttons = document.querySelectorAll('button:not(.hidden)');
        if (buttons.length > 0) {
            buttons[buttons.length - 1].click();
        }
    }
    if (e.key === 'r' || e.key === 'R') {
        location.reload();
    }
});




