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

function latestecents (day , hou , min , sec) {
  setInterval(() => {
    if (sec.textContent > 0) {
      sec.textContent--;
    } else {
      sec.textContent = 60;
    };
  }, 1000);

  setInterval(() => {
    if (min.textContent > 0) {
      min.textContent--;
    } else {
      min.textContent = 60;
    };
  }, 1000 * 60);

  setInterval(() => {
    if (hou.textContent > 0) {
      hou.textContent--;
    } else {
      hou.textContent = 24;
    };
  }, (1000 * 60) * 60);

  setInterval(() => {
    if (day.textContent > 0) {
      day.textContent--;
    } else {
      day.textContent = 365;
    };
  }, ((1000 * 60) * 60) * 24);
};

latestecents(days , hours , minutes , seconds);