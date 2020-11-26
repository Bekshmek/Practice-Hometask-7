

const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');


const nextYear = new Date(`Nov 23 2020 22:55:00`);


function updateCounter() {
	const currentTime = new Date();
	const diff = nextYear - currentTime;

	if(diff>0){

		const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
		const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
		const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
		const secondsLeft = Math.floor(diff / 1000) % 60;

		console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

		days.innerText = daysLeft;
		hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
		minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
		seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
	}else{
		
	}
}

setInterval(updateCounter, 1000);

setTimeout(function () {
    countdown.style.display = 'flex';
}, 1000);
