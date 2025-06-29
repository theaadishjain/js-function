const counterEl = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const clockEl = document.getElementById('clock');

let count = 0;

function updateCounter(animated = true) {
    counterEl.textContent = count;
    if (animated) {
        counterEl.classList.add('animated');
        setTimeout(() => counterEl.classList.remove('animated'), 200);
    }
}

incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCounter();
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockEl.textContent = `${hours}:${minutes}:${seconds}`;
}

function msUntilMidnight() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    return midnight - now;
}

function scheduleMidnightReset() {
    setTimeout(() => {
        count = 0;
        updateCounter();
        scheduleMidnightReset();
    }, msUntilMidnight());
}

// Initial render
updateCounter(false);
updateClock();
scheduleMidnightReset();

// Update clock every second
setInterval(updateClock, 1000); 