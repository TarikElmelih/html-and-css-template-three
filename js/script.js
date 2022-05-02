let ourAwesome = document.querySelector(".our-awesome-stats");
let ourAwesomeElement = document.querySelectorAll(".our-awesome-stats .box p");
let started = false;
// 
let ourSkills = document.querySelector(".our-slills");
let ourSkillsElement = document.querySelectorAll(".skilbord .bord span");
// 
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".secounds");
let countDownEnd = new Date("Oct 11, 2022 00:00:00").getTime();


function ourawesome (el) {
  let our = el.dataset.our;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == our) {
      clearInterval(count);
    }
  }, 500 / our)
}

window.onscroll = function () {
  if (scrollY >= ourAwesome.offsetTop - 550) {
    if (!started) {
      ourAwesomeElement.forEach((e) => ourawesome(e));
    }
    started = true;
  } else if (scrollY >= ourSkills.offsetTop - 250) {
    ourSkillsElement.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

let countDown = setInterval(() => {
  // time now
  let dateNow= new Date().getTime();
  // the remaining time
  let dateRema = countDownEnd - dateNow ;
  // stop count down
  if (dateRema <= 0) {
    clearInterval(countDown);
  }
  // time units
  let day = Math.floor(dateRema / (1000 * 60 * 60 * 24));
  let hou = Math.floor(dateRema % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let min = Math.floor(dateRema % (1000 * 60 * 60) / (1000 * 60));
  let sec = Math.floor(dateRema % (1000 * 60) / (1000));
  days.textContent = day < 100 ? `0${day}`: day < 10 ? `00${day}` : day;
  hours.textContent = hou < 10 ? `0${hou}`: hou;
  minutes.textContent = min < 10 ? `0${min}`: min;
  seconds.textContent =  sec < 10 ? `0${sec}`: sec;
}, 1000);