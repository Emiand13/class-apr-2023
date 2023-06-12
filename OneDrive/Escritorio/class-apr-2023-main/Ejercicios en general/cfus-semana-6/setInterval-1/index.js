
// setInterval #1

const intervalId = setInterval(() => {
    console.log("Hello, every 3 seconds");
},3000);

setTimeout(() => {
    clearInterval("intervalId");
},10000);
