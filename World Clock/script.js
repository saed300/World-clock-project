(function(){
  setInterval(theClock, 1000);

  var secondHand = document.querySelector('[data-second-hand]');
  var minuteHand = document.querySelector('[data-minute-hand]');
  var hourHand = document.querySelector('[data-hour-hand]');
  var time = document.querySelector('.time');

  function theClock() {
    var today = new Date();
    var utc_offset = today.getTimezoneOffset();
    today.setMinutes(today.getMinutes() + utc_offset);
    var barcelona_offset = 2 * 60;
    today.setMinutes(today.getMinutes() + barcelona_offset);
    var m = today.getMinutes();
    var s = today.getSeconds();
    var h = today.getHours();
    var myseconds = today.getSeconds() / 60;
    var myminutes = (myseconds + today.getMinutes()) / 60;
    var myhours = (myminutes + today.getHours()) / 12;
    theRotation(secondHand, myseconds);
    theRotation(minuteHand, myminutes);
    theRotation(hourHand, myhours);
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    var amPM = h >= 12 ? 'PM' : 'AM'
    time.innerHTML = `${h}<span>:</span>${m}<span>:</span>${s} ${amPM}`
  }

  function theRotation(e, myrotate) {
    e.style.setProperty('--rotation', myrotate * 360);
  };

  theClock()
})();


(function() {
  setInterval(theClock2, 1000);

  var secondHand2 = document.querySelector('.london3');
  var minuteHand2 = document.querySelector('.london2');
  var hourHand2 = document.querySelector('.london1');
  var watch = document.querySelector('.watch');

  function theClock2() {
    var today2 = new Date();
    var m = today2.getMinutes();
    var s = today2.getSeconds();
    var h = today2.getHours();
    var myseconds2 = today2.getSeconds() / 60;
    var myminutes2 = (myseconds2 + today2.getMinutes()) / 60;
    var myhours2 = (myminutes2 + today2.getHours()) / 12;
    rotation(secondHand2, myseconds2);
    rotation(minuteHand2, myminutes2);
    rotation(hourHand2, myhours2);
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    var amPM = h >= 12 ? 'PM' : 'AM'
    watch.innerHTML = `${h}<span>:</span>${m}<span>:</span>${s} ${amPM}`
  }

  function rotation(e, rotate2) {
    e.style.setProperty('--rotation', rotate2 * 360);
  }
  theClock2()
})(); 



(function() {
  setInterval(theClock3, 1000);

  var secondHand3 = document.querySelector('.tokyo3');
  var minuteHand3 = document.querySelector('.tokyo2');
  var hourHand3 = document.querySelector('.tokyo1');
  var digital = document.querySelector('.digital');

  function theClock3() {
    var today3 = new Date();
    var utc_offset = today3.getTimezoneOffset();
    today3.setMinutes(today3.getMinutes() + utc_offset);
    var tokyo_offset = 9 * 60;
    today3.setMinutes(today3.getMinutes() + tokyo_offset);
    var m = today3.getMinutes();
    var s = today3.getSeconds();
    var h = today3.getHours();
    var myseconds3 = today3.getSeconds() / 60;
    var myminutes3 = (myseconds3 + today3.getMinutes()) / 60;
    var myhours3 = (myminutes3 + today3.getHours()) / 12;
    rotation(secondHand3, myseconds3);
    rotation(minuteHand3, myminutes3);
    rotation(hourHand3, myhours3);
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    var amPM = h >= 12 ? 'PM' : 'AM'
    digital.innerHTML = `${h}<span>:</span>${m}<span>:</span>${s} ${amPM}`
  }

  function rotation(e, rotate3) {
    e.style.setProperty('--rotation', rotate3 * 360);
  }
  theClock3()
})(); 



(function() {
  setInterval(theClock4, 1000);

  var secondHand4 = document.querySelector('.dubai3');
  var minuteHand4 = document.querySelector('.dubai2');
  var hourHand4 = document.querySelector('.dubai1');
  var analogue = document.querySelector('.analogue');

  function theClock4() {
    var today4 = new Date();
    var utc_offset4 = today4.getTimezoneOffset();
    today4.setMinutes(today4.getMinutes() + utc_offset4);
    var dubai_offset = 4 * 60;
    today4.setMinutes(today4.getMinutes() + dubai_offset);
    var m = today4.getMinutes();
    var s = today4.getSeconds();
    var h = today4.getHours();
    var myseconds4 = today4.getSeconds() / 60;
    var myminutes4 = (myseconds4 + today4.getMinutes()) / 60;
    var myhours4 = (myminutes4 + today4.getHours()) / 12;
    rotation(secondHand4, myseconds4);
    rotation(minuteHand4, myminutes4);
    rotation(hourHand4, myhours4);
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    var amPM = h >= 12 ? 'PM' : 'AM'
    analogue.innerHTML = `${h}<span>:</span>${m}<span>:</span>${s} ${amPM}`
  }

  function rotation(e, rotate4) {
    e.style.setProperty('--rotation', rotate4 * 360);
  }
  theClock4()
})(); 


(function() {
  setInterval(theClock5, 1000);

  var secondHand5 = document.querySelector('.singapore3');
  var minuteHand5 = document.querySelector('.singapore2');
  var hourHand5 = document.querySelector('.singapore1');
  var stopwatch = document.querySelector('.stopwatch');

  function theClock5() {
    var today5 = new Date();
    var utc_offset5 = today5.getTimezoneOffset();
    today5.setMinutes(today5.getMinutes() + utc_offset5);
    var singapore_offset = 8 * 60;
    today5.setMinutes(today5.getMinutes() + singapore_offset);
    var m = today5.getMinutes();
    var s = today5.getSeconds();
    var h = today5.getHours();
    var myseconds5 = today5.getSeconds() / 60;
    var myminutes5 = (myseconds5 + today5.getMinutes()) / 60;
    var myhours5 = (myminutes5 + today5.getHours()) / 12;
    rotation(secondHand5, myseconds5);
    rotation(minuteHand5, myminutes5);
    rotation(hourHand5, myhours5);
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    var amPM = h >= 12 ? 'PM' : 'AM'
    stopwatch.innerHTML = `${h}<span>:</span>${m}<span>:</span>${s} ${amPM}`
  }

  function rotation(e, rotate5) {
    e.style.setProperty('--rotation', rotate5 * 360);
  }
  theClock5()
})(); 


(function() {
  setInterval(theClock6, 1000);

  var secondHand6 = document.querySelector('.hargeisa3');
  var minuteHand6 = document.querySelector('.hargeisa2');
  var hourHand6 = document.querySelector('.hargeisa1');
  var pocketwatch = document.querySelector('.pocketwatch');

  function theClock6() {
    var today6 = new Date();
    var utc_offset6 = today6.getTimezoneOffset();
    today6.setMinutes(today6.getMinutes() + utc_offset6);
    var hargeisa_offset = 3 * 60;
    today6.setMinutes(today6.getMinutes() + hargeisa_offset);
    var m = today6.getMinutes();
    var s = today6.getSeconds();
    var h = today6.getHours();
    var myseconds6 = today6.getSeconds() / 60;
    var myminutes6 = (myseconds6 + today6.getMinutes()) / 60;
    var myhours6 = (myminutes6 + today6.getHours()) / 12;
    rotation(secondHand6, myseconds6);
    rotation(minuteHand6, myminutes6);
    rotation(hourHand6, myhours6);
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    var amPM = h >= 12 ? 'PM' : 'AM'
    pocketwatch.innerHTML = `${h}<span>:</span>${m}<span>:</span>${s} ${amPM}`
  }

  function rotation(e, rotate6) {
    e.style.setProperty('--rotation', rotate6 * 360);
  }
  theClock6()
})(); 

