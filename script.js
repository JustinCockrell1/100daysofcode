const content = document.getElementById("content");

let day = 1;

fetch(`./days/day${day}.html`).then(response=>response.text())
.then(data=>{content.innerHTML = data; loadLeetCodes();});


function loadLeetCodes() {

const leetcodes = document.querySelectorAll(".leetcode-code");

leetcodes.forEach((code)=>{
    const fileName = code.dataset.leetcode;
    fetch(`./leetcode/${fileName}.txt`)
    .then(response=>response.text())
    .then((data)=>{
    code.textContent = data;
});
});

}
