const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
    const trimmedInput = textInput.value.trim();

    if (trimmedInput === "") {
        output.textContent = "Anonymous";
    }
    else {
        output.textContent = trimmedInput;
    }
} )