<script setup>

</script>

<template>
<nav>
<img class="logo-ironhack" src="./images/Ironhack_logo.png">
<img class="Burger-nav" src="./images/Burger_menu.png">
</nav>

<div class="div-logo">
<img class="logo" src="./images/Vue_logo.png">
</div>
<div class="Welcome">
    <h1>Welcome to Vue.js</h1>
</div>
<div class="Become">
<p>Become a coding ninja with the fastest- <br>
growing JavaScript framework</p>
</div>

<div class="image-container">
  <img class="Button-shape" src="./images/Buttton shape.png">
  <p class="Awesome">Awesome!</p>
</div>

<div class="container">

<div>
    <img src="./images/USP-1.png">
    <h3>Performant</h3>
    <p >Truly reactive,compiler- <br>optimized rendering <br>system that rarely <br>requires manual<br> optimization.</p>
</div>
<div>
    <img src="./images/USP-2.png">
    <h3>Approachable</h3>
    <p>Builds on top of standard<br>HTML, CSS and JavaScript<br>with intuitive API and <br>world-class documentation.</p>
</div>
<div>
    <img src="./images/USP-3.png">
    <h3 >Versatile</h3>
    <p >A rich, incrementally<br>adoptable ecosystem <br>that scales between a<br>library and a full-<br>featured framework.</p>
</div>

</div>

</template>

<style scoped>



/* Ironhack_logo */
.logo-ironhack{
position: absolute;
width: 55px;
height: 58px;
left: 60px;
top: 40px;

}

.Burger-nav{
position: absolute;
width: 42px;
height: 40px;
right: 60px;
top: 40px;
}

.div-logo{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 25vh;
  margin-left: 85vh;
  margin-top: 20vh;
  flex-wrap: wrap;

}
.logo{
width: 300px;
height: 300px;
}
.Welcome{
   
  width: 100%;
  height: 158px;
  padding: 20px 0px 20px 280px;
  font-family: 'Arial black';
  font-size: 50px;
  margin-top: 5px;
  margin-bottom: 80px;
  color: #000000;
  white-space: nowrap;
  box-sizing: border-box;
}


.Become{
height: 35px;
margin-left: 500px;
font-family:'Arial Black';
font-size: 28px;
line-height: 35px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;

color: #000000;
}


.Button-shape{
position: absolute;
width: 150px;
height: 31px;
left: 700px;
top: 50px;

background: #34495E;
border-radius: 13px;


}
 .image-container {
  position: relative;
} 


.Awesome {
  position: absolute;
  top: 38px;
  margin-left: 730px;
  color: white;
  margin-bottom: 50px;
  font-family: 'Arial black';
 
}


.container{
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 150px;
    width: 1450px;
    height: 500px;
    padding: 30px;
    background-image: url(./images/Background.png);
}

.container img {
    width: 150px;
    height: 150px;
    padding-top: 100px;
   
}
 .container h3 {
    text-align: center;
    font-size: 28px;
    font-family: 'Arial Black'; 
   
}

.container p{
    text-align: center;
    font-family: 'Arial';
    font-size: 20px;
}


</style>
