const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke )
generateJoke()


async function generateJoke() {
    let url ='https://icanhazdadjoke.com'
    const config = {
    headers:{
        Accept:'application/json'

} }
const response = await fetch(url, config)

  const data = await response.json()

  jokeEl.innerHTML =data.joke 
}


// fetch('https://icanhazdadjoke.com', config)
// .then((response) => response.json())
// .then((json) => {
//     jokeEl.innerHTML = json.joke
// } )  




