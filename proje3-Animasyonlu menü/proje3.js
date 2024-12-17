const contentContainer = document.querySelector('.content-container')
const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')
const circle = document.querySelector('.circle')




    circle.addEventListener('click', () => {

        if (contentContainer.classList.contains('show-menu')) {
            contentContainer.classList.remove('show-menu')
            circle.classList.remove('open-active')
            circle.classList.remove('open-active')

        }
        else {
            contentContainer.classList.add('show-menu')
            circle.classList.add('open-active')

        }




    })

