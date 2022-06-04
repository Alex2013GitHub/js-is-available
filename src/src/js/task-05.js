// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// const input = document.querySelector("#name-input");
// const output = document.querySelector("#name-input");

// console.log(input);
// console.log(output);


textInputRef.addEventListener('input', onChangeTextInput);

function onChangeTextInput({ currentTarget: { value }}) {
    textOutputRef.textContent = !value
        ? 'Anonymous'
        : value;
}

// input.addEventListener("input", (event) => {
//     if(input.textContent.length === "") {
//         output.textContent = 'Anonymous'
//     }
//     outputt.textContent = event.currentTarget.value
// })

// outputRef.textContent =
//     event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;

    // input.addEventListener('input', (event) => {
    //     outputRef.textContent =
    //         event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
        
    // })