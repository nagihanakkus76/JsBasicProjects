const sounds = ['Sound-1', 'Sound-2', 'Sound-3', 'Sound-4', 'Sound-5', 'Sound-6']



sounds.forEach((sound) => {
 let btn = document.createElement("button")
 btn.innerText=sound
 
 btn.classList.add('btn')
 let buttons =document.querySelector('.buttons')
 buttons.appendChild(btn)

 btn.addEventListener('click' , () => {
    stopSongs()
 document.getElementById(sound).play()


 })  
 
});


function stopSongs() {
    sounds.forEach(sound => {
    var audio = document.getElementById(sound)
    audio.pause()
    audio.currentTime = 0; 
    });
}

