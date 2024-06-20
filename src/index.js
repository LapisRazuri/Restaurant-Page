import './styles.css';
import {titleHome, hoursHome, locationHome, parkingHome, containerParkingImg, cakeMenu, drinkMenu,
emailContact, phonenoContact} from './classList.js'
import { parkingImg } from './picture.js';

let content = document.getElementById("content")
let homeBtn = document.getElementById("homeBtn");
let menuBtn = document.getElementById("menuBtn");
let contactBtn = document.getElementById("contactBtn");

console.log("Hi!")

homeBtn.addEventListener('click', function() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
        
        content.appendChild(titleHome);
        content.appendChild(hoursHome);
        content.appendChild(locationHome);
        content.appendChild(parkingHome);
        content.appendChild(containerParkingImg);
        containerParkingImg.appendChild(parkingImg);
})

menuBtn.addEventListener('click', function() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    
    content.appendChild(cakeMenu);
    content.appendChild(drinkMenu);
})

contactBtn.addEventListener('click', function() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    
    content.appendChild(emailContact);
    content.appendChild(phonenoContact);
})







