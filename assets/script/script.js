const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function updateClock() {
  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let mp = "AM";

  if (hr > 12) {
    hr = hr - 12;
    mp = "PM";
  }

  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  hours.innerText = hr;
  minutes.innerText = min;
  seconds.innerText = sec;
  ampm.innerText = mp;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
