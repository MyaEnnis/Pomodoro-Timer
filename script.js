let timer;
let timeleft =1500;
let isPaused =false;

const timerview = document.getElementById('timer');
const stopbut = document.getElementById('stop');
const pausebut = document.getElementById('pause');
const startbut = document.getElementById('start');

function formatTimer(seconds)
{
    const mins = Math.floor(seconds/60);
    const sec = seconds%60;
    return `${mins.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
}

function updateTimer()
{
    timerview.textContent= formatTimer(timeleft);
    if(timeleft <=60)
    {
        timerview.classList.add('warning');
    }
    else
    {
        timerview.classList.remove('warning');
    }

    if(timeleft == 0)
    {
        clearInterval(timer);
        alert('It is time for a break!');
        resetTimer();
    }
    else
    {
        timeleft--;
    }
}

function startTimer()
{
    if(!timer)
    {
        timer = setInterval(updateTimer,1000);
    }
}

function pauseTimer()
{
    if(!timer)
    {
        timer = setInterval(updateTimer,1000);
        pausebut.textContent = 'Pause';
    }
    else
    {
        clearInterval(timer);
        timer = null;
        pausebut.textContent = 'Resume';
    }
    isPaused = !isPaused;
}

function resetTimer()
{
    clearInterval(timer);
    timer = null;
    timeleft = 1500;
    timerview.textContent = formatTimer(timeleft);
    pausebut.textContent = 'Pause';
    timerview.classList.remove('warning');
    isPaused = false;
}

startbut.addEventListener('click',startTimer);
stopbut.addEventListener('click', resetTimer);
pausebut.addEventListener('click', pauseTimer);