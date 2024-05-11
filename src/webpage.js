import './style/home.css'

import contentImage from './images/sryan-food-img.jpg'
 export default function homeLoad(){
    

    
   // get the elements by id
    const content = document.getElementById('content')
    content.style.marginTop = '140px';
    content.style.display = 'grid';
    content.style.gridTemplateColumns = '1.5fr 1fr';
    content.style.gap = '30px';
    let textContent = document.createElement('div')
    textContent.id = 'text-content'

    // get content  food image
    const contentImg = new Image()
    contentImg.src = contentImage;
    
    // add to content
    const imageContent = document.createElement('div')
    imageContent.id = 'image-content'
    imageContent.append(contentImg)


    // add content to text content div
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