import homeLoad  from "./webpage";
import menuLoad  from "./menu";
import contactLoad  from "./contact";

function switchPage(){
    const homeBtn = document.getElementById("home")
    const menuBtn = document.getElementById("menu")
    const contactBtn = document.getElementById("contact")

    // when a button is clicked remove child from content and load 
    // the new page
    homeBtn.addEventListener('click', () => {
        const content = document.getElementById('content')
        content.innerHTML = ""
        homeLoad()
    })

    menuBtn.addEventListener('click', () => {
        const content = document.getElementById('content')
        content.innerHTML = ""
        menuLoad()

    })

    contactBtn.addEventListener('click', () => {
        const content = document.getElementById('content')
        content.innerHTML = ""
        contactLoad()
    })

}


homeLoad()

