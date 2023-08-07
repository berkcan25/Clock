const hour24Btn = document.getElementById("24-hour-btn")
const hour12Btn = document.getElementById("12-hour-btn")
const analogBtn = document.getElementById("analog")
const digitalBtn = document.getElementById("digital")
let is12Hour = ""
let isAnalog = ""

hour24Btn?.addEventListener("click", () => {
    is12Hour = "false"
    localStorage.setItem("is12Hour", is12Hour)
})

hour12Btn?.addEventListener("click", () => {
    is12Hour = "true"
    localStorage.setItem("is12Hour", is12Hour)
})

digitalBtn?.addEventListener("click", () => {
    isAnalog = "false"
    localStorage.setItem("isAnalog", isAnalog)
})

analogBtn?.addEventListener("click", () => {
    isAnalog = "true"
    localStorage.setItem("isAnalog", isAnalog)
})