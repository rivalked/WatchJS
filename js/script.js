/* Сначала подключаемся к стрелкам */

const sec = document.querySelector('.s'), /* Подключаемся к секундной стрелке */
    min = document.querySelector('.m'), /* Подключаемся к минутной стрелке */
    hour = document.querySelector('.h'), /* Подключаемся к часовой стрелке */
    numberHours = document.querySelector('.hours'), /* Получаем часы с цифровых часов */
    numberMinutes = document.querySelector('.minutes') /* Получаем минуты с цифровых часов */



// console.log(new Date()); /* получает дату с устройства */

// let date = new Date()

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getSeconds());
// console.log(date.getTime());
// console.log(date.getTimezoneOffset());
// console.log(date.getUTCDate());


function clock() {

    let time = new Date()
    let second = time.getSeconds() * 6
    let minutes = time.getMinutes() * 6
    let hours = time.getHours() * 30

    sec.style = `transform: rotate(${second}deg);`
    min.style = `transform: rotate(${minutes}deg);`
    hour.style = `transform: rotate(${hours}deg);`

    // innerHTML - заменяет внутренний контент HTML элемента

    numberHours.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    numberMinutes.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()

    setTimeout(() => clock(), 1000);
    /* рекурсия это когда функция вызывает саму себя внутри себя */
}

clock()



// setTimeout(() => {
//     console.log('adfdf');
// }, 5000);

// setInterval(() => {
//     console.log('interval');
// }, 2000);

const links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem')



/* classList - работает с классами HTml элемента через JS */

links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault() /* e - это объект события. preventDefault() - отключает обычное поведение элемента в браузере */
        removeActiveClass(links, 'active')
        removeActiveClass(tabs, 'active')
        link.classList.add('active')
        tabs[index].classList.add('active')
    })
})


function removeActiveClass(element, className) {
    element.forEach(el => {
        el.classList.remove(className)
    })
}

/* Секундомер*/

let stpwatchhours  = 0,
      stpwatchminutes = 0,
      stpwatchseconds = 0,
      displaySeconds = 0,
      displayMinutes = 0,
      displayHours = 0,
      status = 'Stopped',
      interval = ''

function startWatch(){
    stpwatchseconds++;
    if(stpwatchseconds/60 ===1)
    {
        stpwatchseconds=0;
        stpwatchminutes++;

        if(stpwatchminutes/60===1)
        {
            stpwatchminutes=0;
            stpwatchhours++;
        }
    }
if(stpwatchseconds<10){
    displaySeconds = '0'+stpwatchseconds.toString();

}
else{
    displaySeconds = stpwatchseconds;
}

if(stpwatchminutes<10){
    displayMinutes= '0' +stpwatchminutes.toString();
}
else{
    displayMinutes = stpwatchminutes;
}
if(stpwatchhours<10){
    displayHours= '0' +stpwatchhours.toString();
}
else{
    displayHours = stpwatchhours;
}

document.querySelector('.stopwatch__hours').innerHTML=displayHours+':'+displayMinutes+':'+displaySeconds;
}

function startStop(){
    if(status=='Stopped'){
        interval = window.setInterval(startWatch,1000);
        document.querySelector('.startwatch__btn').innerHTML ="Stopped";
        status = 'Started';
    }
    else if(status == 'Started')
	{
		window.clearInterval(interval);
		document.querySelector(".startwatch__btn").innerHTML = 'Start';
		status = 'Stopped';
	}
}

function Reset()
{
	stpwatchseconds = 0;
	stpwatchminutes = 0;
	stpwatchhours = 0;
	window.clearInterval(interval);
	document.querySelector('.stopwatch__hours').innerHTML = '00:00:00';
	document.querySelector('.startwatch__btn').innerHTML = 'Start';
	status = 'Stopped';
}











































/*
var    watch = document.querySelector('.stopwatch__clock')
var    descp = document.querySelector('.stopwatch__clock-description')
var    stp_hours = document.querySelector('.stopwatch__hours')
var    stp_minutes = document.querySelector('.stopwatch__minutes')
var    stp_seconds = document.querySelector('.stopwatch__seconds')
var    stopt = document.querySelector('.stopwatch__btn')
var    restart = document.querySelector('.restartwatch__btn')
var    start = document.querySelector('.startwatch__btn')
var    t

    function stopwatch(){
        stp_seconds++;
        if(stp_seconds>=60){
            stp_seconds = 0;
            stp_minutes++;
            if (stp_minutes>=60){
                stp_minutes =0;
                stp_hours++;
            }
        }
    }

    function timer(){
        t=setTimeout(1000);
    }




function tick(){
    stp_seconds++;
    if(stp_seconds>=60){
        stp_seconds = 0;
        stp_minutes++;
        if (stp_minutes>=60){
            stp_minutes =0;
            stp_hours++;
        }
    }
}

function timer(){
    t=setTimeout(1000);
}

timer();
start.onclick = timer;
stopt.onclick = function(){
    clearTimeout(t);
}


reset.onclick = function(){
    
    stp_hours = 0; stp_minutes = 0; stp_seconds = 0;
};

*/