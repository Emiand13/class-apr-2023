// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.milis = 0
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(()=>{
    this.setTime()
    printTime()
    this.milis ++;
    if(this.milis%100==0){
      this.currentTime++;
    }
    if(this.currentTime === 1000){
      this.currentTime = 0;
    }
    if(this.milis === 100){
      this.milis = 0;
    }
  },10)

};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60);
  
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime%60
};

Chronometer.prototype.twoDigitsNumber = function (num) {
  num = num.toString()
  if(num.length<2){
    return `0${num}`
  }else{
    return num
  }
};

Chronometer.prototype.setTime = function () {
  let minutes = this.twoDigitsNumber(this.setMinutes())
  let seconds = this.twoDigitsNumber(this.setSeconds())
  let mili = this.twoDigitsNumber(this.setMilliseconds())
  return [minutes, seconds, mili]
};

Chronometer.prototype.setMilliseconds = function () {
  return this.milis
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.milis = 0;
};

