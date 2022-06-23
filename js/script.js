const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const clockArea = document.querySelector('.clock-area');

function Clock() {
    this.render = function () {
        let timer = undefined;
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


let clock = new Clock();
console.log(clock)
clock.start();





// startButton.addEventListener('click', clock.start);
// stopButton.addEventListener('click', clock.stop);
