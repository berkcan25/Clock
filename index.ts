const timeContainer = document.getElementsByClassName("time-container")[0]
const dateContainer = document.getElementsByClassName("date-container")[0]


window.requestAnimationFrame(updateTime)
function updateTime() {
    console.log("running...")
    const date:Date = new Date(Date.now())
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    let hourStr, minuteStr, secondStr
    hour < 10 ? hourStr = "0" + hour.toString() : hourStr = hour.toString()
    minute < 10 ? minuteStr = "0" + minute.toString() : minuteStr = minute.toString()
    second < 10 ? secondStr = "0" + second.toString() : secondStr = second.toString()
    timeContainer.innerHTML = `${hourStr}:${minuteStr}:${secondStr}`
    dateContainer.innerHTML = `${month}-${day}-${year}`
    window.requestAnimationFrame(updateTime)
}