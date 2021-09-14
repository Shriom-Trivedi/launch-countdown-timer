const countdown = () => {
    const endDate = new Date("Jan 01, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = endDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let getDays = Math.floor(diff / days);
    let getHours = Math.floor((diff % days) / hours)
    let getMinutes = Math.floor((diff % hours) / minutes)
    let getSeconds = Math.floor((diff % minutes) / seconds)

    getDays = getDays < 10 ? `0${getDays}` : getDays;
    getHours = getHours < 10 ? `0${getHours}` : getHours;
    getMinutes = getMinutes < 10 ? `0${getMinutes}` : getMinutes;
    getSeconds = getSeconds < 10 ? `0${getSeconds}` : getSeconds;

    document.getElementById("days").innerHTML = getDays;
    document.getElementById("hours").innerHTML = getHours;
    document.getElementById("minutes").innerHTML = getMinutes;
    document.getElementById("seconds").innerHTML = getSeconds;
}

setInterval(countdown, 1000)

const handleChange = () => {
    console.log('you clicked')
}