document.addEventListener('DOMContentLoaded', function () {
    let targetDate = new Date('January 1, 2024 00:00:00').getTime();
    let countdownInterval;

    function updateCountdown() {
        const currentDate = new Date().getTime();
        const timeRemaining = targetDate - currentDate;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = 'Event has started!';
        }
    }

    function startCountdown() {
        // Call updateCountdown immediately to avoid delay in displaying the countdown
        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    }

    function stopCountdown() {
        clearInterval(countdownInterval);
    }

    // Initial countdown update
    updateCountdown();

    // Attach functions to buttons
    document.getElementById('startBtn').addEventListener('click', startCountdown);
    document.getElementById('stopBtn').addEventListener('click', stopCountdown);
});
