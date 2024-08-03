document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const countdownDisplay = document.getElementById('countdown');
    let targetDateTime, countdownInterval;

    startBtn.addEventListener('click', () => {
        const targetDate = document.getElementById('date').value;
        const targetTime = document.getElementById('time').value;
        targetDateTime = new Date(`${targetDate}T${targetTime}`);

        countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown(); // Update immediately after clicking

        function updateCountdown() {
            const now = new Date();
            const timeRemaining = targetDateTime - now;

            if (timeRemaining <= 0) {
                clearInterval(countdownInterval);
                alert('Target time reached!');
                countdownDisplay.innerHTML = ''; // Clear countdown display
                
            } else {
                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                countdownDisplay.innerHTML = `
                    <div class="time-section" id="days">${days}<span>days</span></div>
                    <div class="time-section" id="hours">${hours}<span>hours</span></div>
                    <div class="time-section" id="minutes">${minutes}<span>minutes</span></div>
                    <div class="time-section" id="seconds">${seconds}<span>seconds</span></div>
                `;
            }
        }
    });
});


