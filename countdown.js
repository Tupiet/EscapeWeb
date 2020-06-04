// 5:00 PM en horario España
var end = new Date('June 7, 2020 16:00:00 GMT+01:00');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
  var now = new Date();
  var distance = end - now;
  if (distance < 0) {

    clearInterval(timer);
    document.getElementById('countdown').innerHTML = '¡ES LA HORA!';

    return;
  }
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);

  if (days == 1) {
    document.getElementById('countdown').innerHTML = days + ' día, ';
  } else {
    document.getElementById('countdown').innerHTML = days + ' días, ';
  }
  if (hours == 1) {
    document.getElementById('countdown').innerHTML += hours + ' hora, ';
  } else {
    document.getElementById('countdown').innerHTML += hours + ' horas, ';
  }
  if (minutes == 1) {
    document.getElementById('countdown').innerHTML += minutes + ' minuto, ';
  } else {
    document.getElementById('countdown').innerHTML += minutes + ' minutos, ';
  }
  if (seconds == 1) {
    document.getElementById('countdown').innerHTML += seconds + ' segundo';
  } else {
    document.getElementById('countdown').innerHTML += seconds + ' segundos';
  }
}

timer = setInterval(showRemaining, 1000);