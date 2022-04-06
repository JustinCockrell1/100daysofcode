const content = document.getElementById("content");
const nextDayBtn = document.querySelectorAll(".next-day");
const prevDayBtn = document.querySelectorAll(".prev-day");

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

nextDayBtn.forEach(btn=>btn.onclick = () =>{
    if(day<10) {day++;
    loadPage();
    }
}
);
prevDayBtn.forEach(btn=>btn.onclick = () => {
    if(day>1) {day--;
    loadPage();
    }
});


loadPage();