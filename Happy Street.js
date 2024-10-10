// Countdown Timer for Event Date
const countdown = () => {
    const eventDate = new Date("Feb 25, 2025 18:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (difference < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "The event has started!";
    }
};

const timer = setInterval(countdown, 1000);
