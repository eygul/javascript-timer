// Get the new year
const getLizzieTime = () => {
    return new Date('August 21, 2023 17:38:00');
  };
  
  // select elements
  const app = document.querySelector('.countdown-timer');
  const message = document.querySelector('.message');
  const heading = document.querySelector('h1');
  
  const format = (t) => {
    return t < 10 ? '0' + t : t;
  };
  
  const render = (time) => {
    app.innerHTML = `
      <div class="count-down">
        <div class="timer">
          <h2 class="days">${format(time.days)}</h2>
          <small>Days</small>
        </div>
        <div class="timer">
          <h2 class="hours">${format(time.hours)}</h2>
          <small>Hours</small>
        </div>
        <div class="timer">
          <h2 class="minutes">${format(time.minutes)}</h2>
          <small>Minutes</small>
        </div>
        <div class="timer">
          <h2 class="seconds">${format(time.seconds)}</h2>
          <small>Seconds</small>
        </div>
      </div>
    `;
  };
  
  const showMessage = () => {
    message.innerHTML = `We hopefully met!!!!`;
    app.innerHTML = '';
    heading.style.display = 'none';
  };
  
  const hideMessage = () => {
    message.innerHTML = '';
    heading.style.display = 'block';
  };
  
  const complete = () => {
    showMessage();
  };
  
  const countdownTimer = new CountDown(getLizzieTime(), render, complete);
  