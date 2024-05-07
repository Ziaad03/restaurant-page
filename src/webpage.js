 import './style/home.css'
 import logoIcon from './images/logo.jpeg' ;
 
 export default function homeLoad(){

    // add logo to nav
    const logo = new Image()
    logo.src = logoIcon;

    const logoDiv = document.getElementById("logo")
    logoDiv.append(logo)



    const content = document.getElementById('content')

    let textContent = document.createElement('div')
    let title = document.createElement('h1')
    title.textContent = "عيون الشام";
    let paraText = document.createElement('p')
    paraText.textContent = "For delicious Siryan food";
    let discoverBtn = document.createElement('button');
    discoverBtn.textContent = "Discover Menu";
    textContent.append(title)
    textContent.append(paraText)
    textContent.append(discoverBtn)
    

    content.append(textContent)

}