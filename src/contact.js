import './style/contact.css'

export default function contactLoad(){
    const content = document.getElementById('content')
    content.style.display = 'grid';
    content.style.gridTemplateColumns = 'repeat(2, 1fr)';
    content.style.gap = '10px';
    content.style.marginTop = '80px';


    // add div to pos right
    let contactPosDiv = document.createElement('div')
    contactPosDiv.id = 'contact-pos-div'
    let contactSection = document.createElement('div')
    let locationSection = document.createElement('div')

    contactSection.id = 'contact-section'
    locationSection.id = 'location-section'

    let titleText = document.createElement('h3')
    titleText.textContent = "Contact Us";
    contactSection.append(titleText)

    // paragraph
    let paraText = document.createElement('h4')
    paraText.textContent = "Contact us to order  or if you want enquire about somthing in the following";
    contactSection.append(paraText)

    let contactDiv = document.createElement('div')
    contactDiv.id = 'contact-div'
    let phoneNoDiv = document.createElement('div')
    phoneNoDiv.id = 'phone-no-div'
    let phoneDivTitle = document.createElement('h5')
    phoneDivTitle.textContent = "Phone Number";
    let phoneNoText1 = document.createElement('p')
    phoneNoText1.textContent = "012- 0000- 0000 ";
    let phoneNoText2 = document.createElement('p')
    phoneNoText2.textContent = "012- 0000- 0000 ";

    phoneNoDiv.append(phoneDivTitle)
    phoneNoDiv.append(phoneNoText1)
    phoneNoDiv.append(phoneNoText2)


    let socialsDiv = document.createElement('div')
    socialsDiv.id ='socials-div'
    let socialsDivTitle = document.createElement('h5')
    socialsDivTitle.textContent = "Socials";
    let facebookDiv = document.createElement('p')
    facebookDiv.textContent = "FaceBook: eyoonElSham"
    let instaDiv = document.createElement('p')
    instaDiv.textContent = "Instagram: eyoonElSham"

    socialsDiv.append(socialsDivTitle)
    socialsDiv.append(facebookDiv)
    socialsDiv.append(instaDiv)


    contactDiv.append(phoneNoDiv)
    contactDiv.append(socialsDiv)

    contactSection.append(contactDiv)
    



    // add location
    let restaurantLocation = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6824.872023117085!2d29.959713658691406!3d31.208647599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c5c578c6ab2f%3A0x3fd2610cfe2b18ee!2z2LnZitmI2YYg2KfZhNi02KfZhQ!5e0!3m2!1sen!2seg!4v1715539560564!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    let locationDiv = document.createElement('div')
    locationDiv.id = 'location-div'
    locationDiv.innerHTML = restaurantLocation;

    // add location title
    let locationDivTitle = document.createElement('h5')
    locationDivTitle.textContent = "Visit us at our Restaurant at";
    

    // append to location section
    locationSection.append(locationDivTitle)
    locationSection.append(locationDiv)

    // append to content
    contactPosDiv.append(contactSection)
    content.append(contactPosDiv)
    content.append(locationSection)
}