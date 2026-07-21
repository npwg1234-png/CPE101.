const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");


const newYearTime = new Date("January 1, 2027 00:00:00").getTime();

function updateCountDown() {

    const currentTime = new Date().getTime();

    const diff = newYearTime - currentTime;

    if (diff <= 0) {
        day.innerHTML = "00";
        hour.innerHTML = "00";
        minute.innerHTML = "00";
        second.innerHTML = "00";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    day.innerHTML = String(d).padStart(2, "0");
    hour.innerHTML = String(h).padStart(2, "0");
    minute.innerHTML = String(m).padStart(2, "0");
    second.innerHTML = String(s).padStart(2, "0");
}

updateCountDown();

setInterval(updateCountDown, 1000);