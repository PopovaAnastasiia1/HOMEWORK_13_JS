const btnStop = document.querySelector(".btn-stop");
const btnStart = document.querySelector(".btn-start");
const images = document.querySelectorAll('.image-to-show');
const timer = document.querySelector('.timer');

btnStart.addEventListener('click', e => {
   if (e.target.closest('.btn-start')) {
      changeImg(count);
   }
});
btnStop.addEventListener('click', e => {
   if (e.target.closest('.btn-stop')) {
      clearTimeout(imgTimerId);
      clearInterval(timerId);
      
   }
});
let count = 0;
let imgTimerId;
let timerId;

function changeImg() {
   if (count > images.length - 1) count = 0;
   startTime()
   images[count].classList.add('active');
   imgTimerId = setTimeout(() => {
         images[count].classList.remove('active');
         count++;
         clearInterval(timerId);
         changeImg()
   }, 3000);
};
changeImg()

function startTime() {
   let responseTime = new Date(Date.now() + (1000 * 3));
   let countdown = new Date();
   timerId = setInterval(function () {
      countdown.setTime(responseTime - Date.now());
      timer.innerHTML = (countdown.getUTCSeconds()) + ' : ' + countdown.getUTCMilliseconds();
   },);
};

