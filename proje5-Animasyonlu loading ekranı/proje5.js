const bgimage =  document.querySelector('.bg-image')
const loadingText = document.querySelector('.loading-text')
let loadingValue = 0;

 let timer= setInterval( bluring , 30)
   
 function bluring() {
    loadingValue++
    if (loadingValue>99) {
        clearInterval(timer) }

   loadingText.innerText =`${loadingValue}%`
   bgimage.style.filter=`blur(${100-loadingValue}px)`

 }