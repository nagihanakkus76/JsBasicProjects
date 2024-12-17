const tagsEl = document.getElementById('tags')
const textArea = document.getElementById('textarea')

textArea.focus()

textArea.addEventListener('keyup', (e) => {
    creatTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 1000)

        randomSelect()

    }

})


function creatTags(input) {
    const tags = input
        .split(',')
        .filter((tag) => tag.trim() !== '')
        .map((tag) => tag.trim())

    tagsEl.innerHTML = ""
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerHTML = tag
        tagsEl.appendChild(tagEl)
    });
}


function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highLightTag(randomTag)

        setTimeout(() => {
            unhighLightTag(randomTag)
        }, 100);
    }, 100)


    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highLightTag(randomTag)
        }, 100)
    }, times * 100)
}


function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    let x = tags[Math.floor(Math.random() * tags.length)]
    console.log(x);
    return x

}


function highLightTag(tag) {
    tag.classList.add('highlight')

}

function unhighLightTag(tag) {
    tag.classList.remove('highlight')

}