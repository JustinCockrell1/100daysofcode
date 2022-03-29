const content = document.getElementById("content");
const nextDayBtn = document.getElementById("next-day");
const prevDayBtn = document.getElementById("prev-day");

let day = 1;


function loadPage() {

fetch(`./days/day${day}.html`).then(response=>response.text())
.then(data=>{content.innerHTML = data; loadLeetCodes();});
loadLeetCodes();
}

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

nextDayBtn.onclick = () =>{
    if(day<3) {day++;
    loadPage();
    }
}
prevDayBtn.onclick = () => {
    if(day>1) {day--;
    loadPage();
    }
}


loadPage();