
// class  Chronometer{
// Se define una función constructora llamada "Chronometer".
function Chronometer() {

  // Dentro de la función constructora "Chronometer", se definen las propiedades del objeto "this".
  // this.currentTime se inicializa en 0. Esta propiedad representa el tiempo actual del cronómetro en segundos.
  this.currentTime = 0;

  // this.intervalId se inicializa en 0. Esta propiedad se utilizará para almacenar el ID del intervalo utilizado para actualizar el tiempo del cronómetro.
  this.intervalId = 0;

  // this.milis se inicializa en 0. Esta propiedad representa los milisegundos actuales del cronómetro.
  this.milis = 0
}


// Se agrega un método llamado "startClick" al prototipo del objeto "Chronometer".

Chronometer.prototype.startClick = function () {

  // Dentro del método "startClick", se utiliza la función "setInterval" para ejecutar una función de callback repetidamente con un intervalo de tiempo especificado. En este caso, la función de callback se ejecutará cada 10 milisegundos.
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


function printTime() {
  time = chronometer.setTime()
  printMinutes(time[0]);
  printSeconds(time[1]);
  printMilliseconds(time[2]);
  }
  
  
  
  // Esto iria en el archivo chronometer.js
  
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
  



  
  
  function printMilliseconds(milseg) {
    milUni.innerHTML=milseg[1]
    milDec.innerHTML=milseg[0]
  }