function timer(deadline) {

  function setTimer(t) {
    let allTime = Date.parse(t) - Date.parse(new Date()),
      days = Math.floor(allTime / (1000 * 60 * 60 * 24)),
      hours = Math.floor((allTime / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((allTime / 1000 / 60) % 60),
      seconds = Math.floor((allTime / 1000) % 60);

    return {
      allTime: allTime,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  //   console.log(setTimer());

  function placeTimer(deadline, parentClass) {
    let parentTimerClass = document.querySelector(parentClass),
      days = parentTimerClass.querySelector("#days"),
      hours = parentTimerClass.querySelector("#hours"),
      minutes = parentTimerClass.querySelector("#minutes"),
      seconds = parentTimerClass.querySelector("#seconds"),
      update = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      let timerFunc = setTimer(deadline);

      days.innerHTML = timerFunc.days;
      hours.innerHTML = timerFunc.hours;
      minutes.innerHTML = timerFunc.minutes;
      seconds.innerHTML = timerFunc.seconds;

      if (timerFunc.allTime <= 0) {
        clearInterval(update);
        days.innerHTML = 0;
        hours.innerHTML = 0;
        minutes.innerHTML = 0;
        seconds.innerHTML = 0;
      }
    }
  }

  placeTimer(deadline, ".timer");
}

export default timer;
