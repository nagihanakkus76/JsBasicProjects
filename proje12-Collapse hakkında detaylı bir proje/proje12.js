// const toggles = document.querySelectorAll('.faq-toggle')

// toggles.forEach(toggle => {
//     toggle.addEventListener('click', ()=>{
//         toggle.parentNode.classList.toggle('active')
//     })
// });


const faqs = document.querySelectorAll('.faq')
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        activeNone()
        faq.classList.add('active')
    })
    
});

function activeNone() {
faqs.forEach(faq => {
    faq.classList.remove('active')
    
});
    
}