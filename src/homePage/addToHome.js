export function addToHome() {
   
    console.log('entered home func')
    const content = document.querySelector('#content')
    var childElements = content.children;   
    for (var i = 0; i < childElements.length; i++) {
       var childElement = childElements[i];
      console.log(childElement)
       childElement.remove();     
    }

    const div =  document.createElement('div')
    div.classList.add('homePage')
    div.innerHTML = '<h1>Where every flavor<br>tells a storyyy</h1><p>Discover your taste</p>'
    document.querySelector('#content').appendChild(div)
 }