

function showTime() {
    let date = new Date();

    var h = date.getHours();
    var m = checkDate(date.getMinutes());
    var s = checkDate(date.getSeconds());
    var day = date.getDay();

    const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    var clock = `${h}:${m}:${s} ${weekday[day]}`;

    document.getElementById("myClock").textContent = clock;

    setTimeout(showTime, 1000);
}

function checkDate(num) {
    return num = (num < 10) ? "0" + num : num;
}

let userName = prompt("WHAT IS YOUR NAME", "HOPE IS NOT EZEKIEL")
var nameArea = document.getElementById('myName');
nameArea.innerText = userName;

showTime();
