button = document.getElementById("convert"); 
input = document.getElementById("input");
answer = document.getElementById("answer");

function convert() {
    result = Number(input.value);
    answer.value = result / 3.6;
}

button.addEventListener("click",convert);

