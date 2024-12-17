const searchField = document.querySelector('.search-field')
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const clear = document.querySelector('.clear')

btn.addEventListener('click' , () => {
    search.classList.add('active')
    btn.classList.add('click')
    search.focus();
})

search.addEventListener('blur' , () => {
    if (search.value=='') {
        console.log("evet boş")
        search.classList.remove('active')
        btn.classList.remove('click') 

    }
    })