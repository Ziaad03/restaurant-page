import './style/home.css';
import logoIcon from './images/logo.jpeg' ;

export default function headerLoad(){
     // add to nav
     const logo = new Image()
     logo.src = logoIcon;
 
     const logoDiv = document.getElementById("logo")
     logoDiv.append(logo)
}