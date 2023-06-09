// DOM#1

const boxes = document.getElementsByClassName("box");
const paragraphs = document.getElementsByTagName("p");
 
for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "purple";
}
 
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontSize = "20px";
}
 
const h2 = document.createElement("h2");
 
h2.innerText = "Hello World";
document.body.appendChild(h2);