"use strict";

const goodMorning = document.getElementById("good-morning");
const today = document.getElementById("today");
const todayTime = document.getElementById("today-time");
const toNewYear = document.getElementById("to-new-year");

const timesOfDay = (ofDay) => {
  ofDay = new Date().getHours();
  if (ofDay >= 6) {
    goodMorning.textContent = "Доброе утро!";
  } else if (ofDay >= 12) {
    goodMorning.textContent = "Добрый день!";
  } else if (ofDay >= 18) {
    goodMorning.textContent = "Добрый вечер!";
  } else if (ofDay >= 0) {
    goodMorning.textContent = "Доброй ночи!";
  }
};

const dayOfWeek = (day) => {
  day = new Date().getDay();
  if (day === 0) {
    day = "Понедельник";
  } else if (day === 1) {
    day = "Вторник";
  } else if (day === 2) {
    day = "Среда";
  } else if (day === 3) {
    day = "Четверг";
  } else if (day === 4) {
    day = "Пятница";
  } else if (day === 5) {
    day = "Суббота";
  } else if (day === 6) {
    day = "Воскресенье";
  }

  today.textContent = "Сегодня: " + day;
};

const currentTime = () => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  todayTime.textContent =
    "Текущее время: " +
    ("0" + hours).slice(-2) +
    ":" +
    ("0" + minutes).slice(-2) +
    ":" +
    ("0" + seconds).slice(-2) +
    " " +
    ampm;
};

const newYear = () => {
  let dateStop = new Date("1 January 2022").getTime();
  let dateNow = new Date().getTime();
  let timeRemaining = (dateStop - dateNow) / 1000;
  toNewYear.textContent =
    "До нового года осталось: " + Math.floor(timeRemaining / 60 / 60 / 24);
};

timesOfDay();
dayOfWeek();
setInterval(currentTime);
newYear();
