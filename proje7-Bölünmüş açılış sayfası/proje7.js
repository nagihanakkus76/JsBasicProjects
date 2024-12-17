let front = document.querySelector('.front')
let frontEmpty = document.querySelector('.front-end-empty-container')
let backEmpty = document.querySelector('.back-end-empty-container')
let back = document.querySelector('.back')

const big = '75%';
const small = '25%';



front.addEventListener('mouseover', () => {

    SetWidth([front, frontEmpty], big)
    SetWidth([back, backEmpty], small)

})

back.addEventListener('mouseover', () => {
    SetWidth([front, frontEmpty], small)
    SetWidth([back, backEmpty], big)
})


function SetWidth(elements, widthPercent) {

    elements.forEach(item => {
        item.style.width = widthPercent
    });
}

