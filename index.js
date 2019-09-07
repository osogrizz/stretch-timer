// 10sec timer 

// let msTens = document.getElementById("msTens");
// let msHundreds = document.getElementById("msHundreds");
// let secOnes = document.getElementById("secondOnes");
// let secTens = document.getElementById("secondTens");

// let allTimes = document.querySelectorAll('.digit');
// console.log(allTimes)
// ms = 0;

// let timer = setInterval(() => {
  //   ms++;
  //   msTens.textContent = Math.floor(ms % 10)
  //   msHundreds.textContent = Math.floor(ms * .1) % 10;
  //   secOnes.textContent = Math.floor(ms * .01) % 10;
  //   secTens.textContent = Math.floor(ms * .001) % 10
  
  //   if ( secTens.textContent > '0' ) {
    //     msTens.textContent = 0;
    //     allTimes.forEach( time => {
      //       time.classList.add('redDigit');
      //     })
      //     clearInterval(timer)
      //     console.log('stop')
      //   }
      // }, 10);
      
      // End 10sec timer
      
      
// Stretch stretch
      
let clock = document.querySelector('.buttons');
let msTens = document.getElementById('msTens');
let msHundreds = document.getElementById('msHundreds');
let secOnes = document.getElementById('secondOnes');
let secTens = document.getElementById('secondTens');

ms = 0;

const startBtn = document.createElement('button');
startBtn.textContent = `start`;

clock.appendChild(startBtn);

const stopBtn = document.createElement('button');
stopBtn.textContent = `stop`;

clock.appendChild(stopBtn);

const resetBtn = document.createElement('button');
resetBtn.textContent = `reset`;

clock.appendChild(resetBtn);

startBtn.addEventListener('click', event => {
  let interval = setInterval(() => {
    ms++
    msTens.textContent = Math.floor(ms % 10);
    msHundreds.textContent = Math.floor(ms * .1) % 10;
    secOnes.textContent = Math.floor(ms * .01) % 10;
    secTens.textContent = Math.floor(ms * .001) % 10;
  }, 10);  

  startBtn.disabled = true;
  startBtn.classList.add('disabled');

  stopBtn.addEventListener('click', event => {
    clearInterval(interval);
    startBtn.disabled = false;
    startBtn.classList.remove('disabled');
  })
  
  resetBtn.addEventListener('click', event => {
    startBtn.disabled = false;
    startBtn.classList.remove('disabled');

    clearInterval(interval);

    msTens.textContent = Math.floor(0);
    msHundreds.textContent = Math.floor(0); 
    secOnes.textContent = Math.floor(0);
    secTens.textContent = Math.floor(0);
    ms = 0;
  })
});


