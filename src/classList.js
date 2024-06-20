import {titleHome, hoursHome, locationHome, parkingHome, cakeMenu, drinkMenu,
emailContact, phonenoContact} from './textContent.js'
import {containerParkingImg,  } from './creatElement.js'
// import {parkingImg} from './picture.js'

titleHome.classList.add("home");
hoursHome.classList.add("home");
locationHome.classList.add("home");
parkingHome.classList.add("home");
containerParkingImg.classList.add("home");
containerParkingImg.classList.add("picture");

cakeMenu.classList.add("menu");
drinkMenu.classList.add("menu");

emailContact.classList.add("contact");
phonenoContact.classList.add("contact");



export {titleHome, hoursHome, locationHome, parkingHome, containerParkingImg, cakeMenu, drinkMenu,
emailContact, phonenoContact };