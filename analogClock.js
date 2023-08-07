const hourHand = document.getElementsByClassName("hour-hand")[0];
const minuteHand = document.getElementsByClassName("minute-hand")[0];
const secondHand = document.getElementsByClassName("second-hand")[0];
export default function updateClock(date) {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const hourHandPos = 360 / (12 / hour);
    const minHandPos = 360 / (60 / minute);
    const secHandPos = 360 / (60 / second);
    hourHand.style.rotate = hourHandPos + "deg";
    minuteHand.style.rotate = minHandPos + "deg";
    secondHand.style.rotate = secHandPos + "deg";
}
