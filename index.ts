import updateClock from "./analogClock.js";
const analogClock = <HTMLElement>document.getElementsByClassName("analog-clock")[0]
const digitalClock = <HTMLElement>document.getElementsByClassName("digital-clock")[0]
const timeContainer = document.getElementsByClassName("time-container")[0]
const dateContainer = document.getElementsByClassName("date-container")[0]
const formatTypes = ["YYYY-MM-DD", "MM-DD-YYYY", "DD-MM-YYYY", "Month DD, YYYY", "DD Month, YYYY"]
const use12hour = localStorage.getItem("is12Hour")
const useAnalog = localStorage.getItem("isAnalog")
window.requestAnimationFrame(updateTime)

if (useAnalog === "true") {
    analogClock.style.width = "70vw"
    analogClock.style.visibility = "visible"
    digitalClock.style.visibility = "hidden"
} else {
    analogClock.style.height = "0"
    analogClock.style.visibility = "hidden"
}

function updateTime() {
    const date:Date = new Date(Date.now())
    if (useAnalog === "true") {
        updateClock(date)
    } else {
        use12hour == "true" ? timeContainer.innerHTML = formatTime(date, true) : timeContainer.innerHTML = formatTime(date, false)
        dateContainer.innerHTML = formatDate(date, "DD Month, day, YYYY")
    }
    window.requestAnimationFrame(updateTime)
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function formatDate(date:Date, format:string) {
    let formattedDate
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const weekday = date.getDay()
    if (format === "MM-DD-YYYY") {
        formattedDate = `${month+1}-${day}-${year}`
    } else if (format === "DD-MM-YYYY") {
        formattedDate = `${day}-${month+1}-${year}`
    } else if (format === "Month DD, YYYY") {
        formattedDate = `${months[month]} ${day}, ${year}`
    } else if (format === "DD Month, YYYY") {
        formattedDate = `${days[weekday]}, ${months[month]}, ${year}`
    } else if (format === "Day, Month DD, YYYY") {
        formattedDate = `${days[weekday]}, ${months[month]} ${day}, ${year}`
    } else if (format === "Day, DD Month, YYYY") {
        formattedDate = `${days[weekday]}, ${months[month]} ${day}, ${year}`
    } else if (format === "DD Month, day, YYYY") {
        formattedDate = `${day} ${months[month]}, ${days[weekday]}, ${year}`
    } else {
        formattedDate = `${year}-${month+1}-${day}`
    }
    return formattedDate
}

function formatTime(date: Date, is12Hour:Boolean) {
    let hour = date.getHours()
    let amPM = ""
    if (is12Hour) {
        hour < 12 ? amPM = "AM" : amPM = "PM"
        hour %= 12
    }
    const minute = date.getMinutes()
    const second = date.getSeconds()
    let hourStr, minuteStr, secondStr
    hour < 10 ? hourStr = "0" + hour.toString() : hourStr = hour.toString()
    minute < 10 ? minuteStr = "0" + minute.toString() : minuteStr = minute.toString()
    second < 10 ? secondStr = "0" + second.toString() : secondStr = second.toString()
    return `${hourStr}:${minuteStr}:${secondStr}${amPM}`
}