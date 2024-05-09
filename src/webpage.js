 import './style/home.css'
 import logoIcon from './images/logo.jpeg' ;
 import contentImage from './images/sryan-food-img.jpg'
 export default function homeLoad(){
    

    // add to nav
    const logo = new Image()
    logo.src = logoIcon;

    const logoDiv = document.getElementById("logo")
    logoDiv.append(logo)



    // get the elements by id
    const content = document.getElementById('content')
    let textContent = document.getElementById('text-content')

    // get content  food image
    const contentImg = new Image()
    contentImg.src = contentImage;
    
    // add to content
    const imageContent = document.getElementById('image-content')
    imageContent.append(contentImg)


    
    let title = document.createElement('h1')
    title.textContent = "عيون الشام";
    let paraText = document.createElement('p')
    paraText.textContent = "For delicious Siryan meals";
    let discoverBtn = document.createElement('button');
    discoverBtn.textContent = "Discover Menu";
    textContent.append(title)
    textContent.append(paraText)
    textContent.append(discoverBtn)
    

    content.append(textContent)
    content.append(imageContent)

}