let chronometer = new Chronometer();
let btnLeft     = document.getElementById('btnLeft');
let btnRight    = document.getElementById('btnRight');
let minDec      = document.getElementById('minDec');
let minUni      = document.getElementById('minUni');
let secDec      = document.getElementById('secDec');
let secUni      = document.getElementById('secUni');
let milDec      = document.getElementById('milDec');
let milUni      = document.getElementById('milUni');
let splits      = document.getElementById('splits');
let splitsCont  = document.getElementById('splits-container');
// let intervalDom = 0;
// let intervalCount = 0;
let time = 0;


function printTime() {
  // intervalDom = setInterval(()=>{
    time = chronometer.setTime()
    // if(intervalCount%100==0){
    printMinutes(time[0]);
    printSeconds(time[1]);
    // }
    printMilliseconds(time[2]);
    // intervalCount++;
  // },10)
}

function printMinutes(minuts) {
  minUni.innerHTML=minuts[1]
  minDec.innerHTML=minuts[0]
}

function printSeconds(seg) {
  secUni.innerHTML=seg[1]
  secDec.innerHTML=seg[0]
}

function printMilliseconds(milseg) {
  milUni.innerHTML=milseg[1]
  milDec.innerHTML=milseg[0]
}

function printSplit(time) {
  let text = `${time[0][0]}${time[0][1]} : ${time[1][0]}${time[1][1]} , ${time[2][0]}${time[2][1]}`;
  let line = document.createElement('li')
  line.textContent = text;
  splits = document.getElementById('splits');
  splits.appendChild(line)
}

function clearSplits() {
  document.querySelectorAll('li').forEach(elem=>{
    elem.remove()
  })
}

function setStopBtn() {
  // clearInterval(intervalDom)
  chronometer.stopClick()
}

function setSplitBtn() {
  printSplit(chronometer.setTime())
}

function setStartBtn() {
  chronometer.startClick();
  printTime();
}

function setResetBtn() {
  chronometer.resetClick();
  secDec.innerHTML="0"
  secUni.innerHTML="0"
  minDec.innerHTML="0"
  minUni.innerHTML="0"
  milDec.innerHTML="0"
  milUni.innerHTML="0"
  clearSplits()
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(document.getElementById("btnLeft").className.includes("start")){
    document.getElementById("btnLeft").setAttribute("class", "btn stop");
    document.getElementById("btnLeft").innerHTML = "STOP";
    document.getElementById("btnRight").setAttribute("class", "btn split");
    document.getElementById("btnRight").innerHTML = "SPLIT";
    setStartBtn();
  }else{
    document.getElementById("btnLeft").setAttribute("class", "btn start")
    document.getElementById("btnLeft").innerHTML = "START"
    document.getElementById("btnRight").setAttribute("class", "btn reset")
    document.getElementById("btnRight").innerHTML = "RESET" 
    setStopBtn();
  }
});
// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(document.getElementById("btnRight").className.includes("reset")){
    setResetBtn();
  }else{
    setSplitBtn();
  }
});