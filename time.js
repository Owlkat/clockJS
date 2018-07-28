const secondsHand = document.querySelector('.seconds');
 
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secondsHand.style.transform = 'rotate(${secondsDegrees}deg)';
}

setInterval(setDate, 1000);