const hourHand = <HTMLElement>document.getElementsByClassName("hour-hand")[0]
const minuteHand = <HTMLElement>document.getElementsByClassName("minute-hand")[0]
const secondHand = <HTMLElement>document.getElementsByClassName("second-hand")[0]

export default function updateClock(date: Date) {
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const hourHandPos = 360 / (12 / hour) + (30*(minute % 60/60))
    const minHandPos = 360 / (60 / minute)
    const secHandPos = 360 / (60 / second)
    hourHand.style.rotate = hourHandPos + "deg"
    minuteHand.style.rotate = minHandPos + "deg"
    secondHand.style.rotate = secHandPos + "deg"
}