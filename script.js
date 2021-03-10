const dataButtonCategory = document.querySelector('[data-button-category]')
const dataLinksContainer = document.querySelector('[data-links-container]')
const buttons = document.getElementsByClassName('buttons')
const aboutMySelf = document.getElementsByClassName('about-my-self')

dataButtonCategory.addEventListener('mouseover', () => {
    dataLinksContainer.style.display = 'block'
})

function show_status(e) {
    for(var i = 0; i < aboutMySelf.length; i++ ) {
        aboutMySelf[i].style.display = 'none'
    }
    document.getElementById(e).style.display = 'block'
}

for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        const currentButton = document.getElementsByClassName('button-active')
        if(currentButton.length > 0) {
            currentButton[0].className = currentButton[0].className.replace(" button-active", "")
        }
        this.className += " button-active"
    }) 
}



