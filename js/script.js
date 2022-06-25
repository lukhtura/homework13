const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const clockArea = document.querySelector('.clock-area');

function Clock() {
    this.timer = undefined;
    this.render = function () {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) {
            if (hours < 10) {
                hours = '0' + hours;
            }
        }
        let minutes = date.getMinutes();
        if (minutes < 10) {
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
        }
        let seconds = date.getSeconds();
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        clockArea.innerHTML = (`${hours}:${minutes}:${seconds}`);
    }
    this.start = function () {
        this.render();
        timer = setInterval(this.render, 1000)
    }

}

Clock.prototype.stop = function () {
    clearInterval(timer)
}

let clock = new Clock();
const bindStart = clock.start.bind(clock);
const bindStop = clock.stop.bind(clock);

startButton.addEventListener('click', bindStart);
stopButton.addEventListener('click', bindStop);
