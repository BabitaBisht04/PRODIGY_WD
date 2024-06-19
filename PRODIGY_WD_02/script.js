const timeEl = document.getElementById('time');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapsEl = document.getElementById('laps');

let time = 0;
let lapTime = 0;
let intervalId;
let lapNumber = 1;

startBtn.addEventListener('click', () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      time++;
      timeEl.textContent = formatTime(time);
    }, 10);
  }
});

pauseBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
});

resetBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
  time = 0;
  lapTime = 0;
  lapNumber = 1;
  timeEl.textContent = formatTime(time);
  lapsEl.innerHTML = '';
});

lapBtn.addEventListener('click', () => {
  lapTime = time;
  const li = document.createElement('li');
  li.textContent = `Lap ${lapNumber}: ${formatTime(lapTime)}`;
  lapsEl.appendChild(li);
  lapNumber++;
});

function formatTime(time) {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 1000;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}