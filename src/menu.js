


import './style/menu.css'


import img1 from './images/img1.jpeg'
import img2 from './images/img2.jpeg'
import img3 from './images/img3.jpeg'
import img4 from './images/img4.jpeg'
import img5 from './images/img5.jpeg'

import rightArrow from './images/right.png'
import leftArrow from './images/left.png'

export default function menuLoad(){

    

    const content = document.getElementById('content')
    content.style.marginTop = '80px';
   
    content.style.display = 'flex';
    content.style.flexDirection = 'column'
    content.style.justifyContent = 'center'
    content.style.alignItems = 'center'
    content.style.gap = '40px';
    
    let titleText = document.createElement('div')
    titleText.id = 'menu-title-text'
    // create the text and append the to title div text 
    let menuTitle = document.createElement('h4')
    menuTitle.textContent = "Our Menu";
    titleText.append(menuTitle)
    let trendText = document.createElement('h3')
    trendText.textContent = "Most Trending Items";
    titleText.append(trendText)

    // append to content
    content.append(titleText)

    // add menu section 
    let trendingItems =document.createElement('div')
    trendingItems.id = 'trending-items-section'

    // add the images to span and then to the parent div
    let firstDiv = document.createElement('div')
    firstDiv.id = 'first-div'
    let firstSpan = document.createElement('span')

    const firstImage = new Image()
    firstImage.src = img1;
    firstSpan.append(firstImage)
    firstDiv.append(firstSpan)

    let secondSpan = document.createElement('span')
    const secondImage = new Image()
    secondImage.src = img2;
    secondSpan.append(secondImage)
    firstDiv.append(secondSpan)

    let thirdSpan = document.createElement('span')
    const thirdImage = new Image()
    thirdImage.src = img3;
    thirdSpan.append(thirdImage)
    firstDiv.append(thirdSpan)

    let secondDiv = document.createElement('div')
    secondDiv.id ='second-div'
    let fourthSpan = document.createElement('span')
    const fourthImage = new Image()
    fourthImage.src = img4;
    fourthSpan.append(fourthImage)
    secondDiv.append(fourthSpan)

    let fifthSpan = document.createElement('span')
    const fifthImage = new Image()
    fifthImage.src = img5;
    fifthSpan.append(fifthImage)
    secondDiv.append(fifthSpan)


    trendingItems.append(firstDiv)
    trendingItems.append(secondDiv)

    


    // add gallery wrap
    let galleryWrap = document.createElement('div')
    galleryWrap.id = 'gallery-wrap'

    const backBtn = new Image()
    backBtn.src = leftArrow;
    backBtn.id = 'back-btn'
    galleryWrap.append(backBtn)
    galleryWrap.append(trendingItems)
    const nextBtn = new Image()
    nextBtn.src = rightArrow;
    nextBtn.id = 'next-btn'
    galleryWrap.append(nextBtn)
    // append to content
    content.append(galleryWrap)

    // add explore menu button at the end of the ccontent
    let exploreBtn = document.createElement('button');
    exploreBtn.id = 'explore-btn'
    exploreBtn.textContent = "Explore Menu";
    content.append(exploreBtn)

    
    


    // add scroll with buttons behaviour
        nextBtn.addEventListener('click', ()=>{
            trendingItems.scrollLeft += 450
        })
        backBtn.addEventListener('click', ()=>{
            trendingItems.scrollLeft -= 450
        })





}