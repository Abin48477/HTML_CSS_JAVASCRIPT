function myclock() {
    let now = new Date(); //current date
    let hours = now.getHours(); //0-23
    let minutes = now.getMinutes(); //0-59
    let seconds = now.getSeconds(); //0-59

    // Add leading zeros first
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    // Short form with ternary operator ✅
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Now show the correct formatted time
    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds}`;
}

setInterval(myclock, 1000);
myclock();
