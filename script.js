const content = document.getElementById("content");
const nextDayBtn = document.querySelectorAll(".next-day");
const prevDayBtn = document.querySelectorAll(".prev-day");

const navigationButton = document.querySelector(".navigation-button");
const navigationIcon = document.querySelector(".navigation-button i");
const navigationContent = document.querySelector(".navigation-content");

let day = 1;
let numDays=10;


function loadPage() {

fetch(`./days/day${day}.html`).then(response=>response.text())
.then(data=>{
    content.innerHTML = data; loadLeetCodes();
    loadLeetCodes();
loadNavigation();
});

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

function loadNavigation() {
    for(let i = 1; i <= numDays; i++) {
    navigationContent.innerHTML +=`<h1>Day ${i}</h1>`;
    }

}

nextDayBtn.forEach(btn=>btn.onclick = () =>{
    if(day<numDays) {day++;
    loadPage();
    }
}
);
prevDayBtn.forEach(btn=>btn.onclick = () => {
    if(day>1) {day--;
    loadPage();
    }
});




navigationButton.onclick = () =>{
    if(navigationIcon.classList.contains("fa-bars")) {
        navigationIcon.classList.replace("fa-bars","fa-x");
        navigationContent.classList.add("open");
    }
    else {
        navigationIcon.classList.replace("fa-x","fa-bars");
        navigationContent.classList.remove("open");
    }
    
    
    
}




loadPage();