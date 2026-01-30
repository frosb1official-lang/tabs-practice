const timerBlock = document.querySelector('.timer__time')
const deadLine = '31 mar 2026'

let interval

const updateClock = () => {

    const date = new Date().getTime()
    const dateDeadline = new Date(deadLine).getTime()
    const timeRemainig = (dateDeadline - date) / 1000

    const days = Math.floor(timeRemainig / 60 / 60 / 24) 
    const hours = Math.floor((timeRemainig / 60 / 60) % 24)
    const minutes = Math.floor((timeRemainig / 60) % 60)
    const seconds = Math.floor(timeRemainig % 60)

    const fHours = hours < 10 ? '0' + hours : hours
    const fMinutes = minutes < 10 ? '0' + minutes : minutes
    const fSeconds = seconds < 10 ? '0' + seconds : seconds

    timerBlock.textContent = `${days} дней ${fHours}:${fMinutes}:${fSeconds}`

    if (timeRemainig <= 0)  {
        timerBlock.textContent = '0 дней 00:00:00'
    }


}

updateClock()

interval = setInterval(updateClock, 500);
