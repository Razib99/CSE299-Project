// const texts = document.querySelector('.texts');

// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new window.SpeechRecognition();
// recognition.interimResults = true;

// let p = document.createElement('result',(e) => {

//     const text = Array.from(e.result)
//         .map(result => result[0])
//         .map(result => result.transcript)
//         .join('');

//     console.log(text);
// })

// recognition.start();

const recognition = new webkitSpeechRecognition()

recognition.continuous = true;

let test = document.querySelector("#test")

test.addEventListener('click', () => {
    toggle();
});
let recognizing = false;
recognition.onresult = (e) => {
   let res = "";

   for (let i=e.resultIndex; i < e.results.length; ++i) {
        res += e.results[i][0].transcript;
   }

   console.log(res);
   document.querySelector('#v2t').innerHTML = res;

   res = "";
}


const reset = () => {
    recognizing = false;
    test.innerHTML = "Click to speak"
}

recognition.onend = reset;


const toggle = () => {
    if (recognizing) {
        recognition.stop();
        reset();
    } else {
        recognition.start();
        recognizing = true;
        test.innerHTML = "Click to stop";
    }
}
