import { menuArray } from "./foodArray.js"
export function addToMenuPage() {
    console.log('entered menu func')
    const content = document.querySelector('#content')
    var childElements = content.children;
   
    for (var i = 0; i < childElements.length; i++) {
       var childElement = childElements[i];
      console.log(childElement)
       childElement.remove();     
    }
    const menucontainer = document.createElement('div')
    menucontainer.classList.add('menuContainer')
    const menupage = document.createElement('div')
    menupage.classList.add('menuPage')
    for (let i = 0; i < menuArray.length; i++) {
        // create the parent div and add class
        let div = document.createElement('div')
        let className = menuArray[i].name.replace(/\s/g, '').toLowerCase();
        div.classList.add(className)
        // add image
        let image = document.createElement('img')
        image.src = menuArray[i].image
        div.appendChild(image)
        // add desc
        let desc = document.createElement('p')
        desc.innerText = `${menuArray[i].name} $${menuArray[i].price}`
        div.appendChild(desc)
        // add to the page
        menupage.appendChild(div)
    }
    menucontainer.appendChild(menupage)
    document.querySelector('#content').appendChild(menucontainer)
}


