const currentTime = document.querySelector("h1"),
  content = document.querySelector(".content"),
  selectMenu = document.querySelectorAll("select"),
  setAlarmBtn = document.querySelector("button");

let alarmTime;

// ...


for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? "AM" : "PM";
  let option = `<option value="${ampm}">${ampm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
//getting hour, mins, secs
let date = new Date(),
h = date.getHours(),
m = date.getMinutes(),
s = date.getSeconds(),
ampm = "AM";

if (h >= 12) {
h = h - 12;
ampm = "PM";
}
// if hour value is 0, set this value to 12
h = h == 0 ? (h = 12) : h;
// adding 0 before hr, min, sec if this value is less than 10
h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;

currentTime.innerText = `${h}:${m}:${s} ${ampm}`;
if (alarmTime == `${h}:${m}:${s} ${ampm}`) {
    console.log("Alarm ringing...");
  }

}, 1000);
function setAlarm() {
    // code to be executed when the button is clicked
    
    let time = document.querySelector("select").value;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
      return alert("Please select a valid time to set the alarm!");
    }
alarmTime = time;
 content.classList.add("disable");
setAlarmBtn.innerText = "Clear Alarm";
}
  
setAlarmBtn.addEventListener("click", setAlarm);