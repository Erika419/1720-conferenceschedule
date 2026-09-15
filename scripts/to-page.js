import{areaBox, areaCircle, volume} from'./math.js'
document.querySelector('#message').innerHTML=`
The area of my box is ${areaBox(4,6)} <br> 
The area of my circle is ${areaCircle(8)} <br>
The volume of my rectangle is ${volume(3,4,5)}`

const message = document.createElement('p'); 
const photo = document.createElement('img'); 

message.textContent = "Hello!";
photo.src = "images/opengraph.jpg";

document.body.appendChild(message);
document.body.appendChild(photo);