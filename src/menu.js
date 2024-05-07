export default function menuLoad(){
    const content = document.getElementById('content')

    let textContent = document.createElement('div')
    let title = document.createElement('h1')
    title.textContent = "Menu";
    let paraText = document.createElement('p')
    paraText.textContent = "For delicious Siryan food";
    let discoverBtn = document.createElement('button');
    discoverBtn.textContent = "Discover Menu";
    textContent.append(title)
    textContent.append(paraText)
    textContent.append(discoverBtn)

    content.append(textContent)

}