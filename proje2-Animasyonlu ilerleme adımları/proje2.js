const  circles=document.querySelectorAll('.circle')
const progressLines=document.querySelectorAll('.progress')
const prevbtn= document.getElementById('prev')
const nextbtn = document.getElementById('next')

let selectedIndex=0



nextbtn.addEventListener('click',()=> GoNext())

prevbtn.addEventListener('click',()=> GoPrev())


function GoNext() {
    selectedIndex++
    console.log(selectedIndex);
    progressLines[selectedIndex-1].classList.add('active')
    circles[selectedIndex].classList.add('active')
    if (selectedIndex+1==circles.length) {
        nextbtn.classList.remove('active')
        nextbtn.setAttribute('disabled',true)
        prevbtn.attributes.remove('disabled')
    }
    
    if (selectedIndex!=0) {
    prevbtn.classList.add('active')

    }
    
}

function GoPrev() {
    selectedIndex--
    circles[selectedIndex+1].classList.remove('active')
    progressLines[selectedIndex].classList.remove('active')
   if (selectedIndex==0) {
    prevbtn.classList.remove('active')
    prevbtn.setAttribute('disabled',true)
    nextbtn.attributes.remove
    ('disabled')

   }
   if (selectedIndex-1!=circles.length) {
    nextbtn.classList.add('active')

   }
}