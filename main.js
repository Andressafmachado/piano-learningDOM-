
// get all keys
const keys = document.querySelectorAll(".key")

function playNote(event) {


}

let keyCode;

const isKeyboard = event.type === "keydown"
    if(isKeyboard){
      keyCode = event.keyCode  
    } else{
        keyCode = event.target.dataset.key
    }
    return keyCode;
}



keys.forEach( function(key){
    key.addEventListener("click", playNote)
   })

window.addEventListener("keydown", playNote)


// const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)



// 

// 
//      let audioKeyCode = getKeyCode(event); 
//     }



// const cantFoundAnyKey = !key
//     if(cantFoundAnyKey){
//     return;
//     }

// playAudio(audioKeyCode)



// function getKeyCode(event) {
//     let keyCode;



// //play audio
// function playAudio(audioKeyCode){
// const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
// audio.currentTime = 0;
// audio.play()
// }

