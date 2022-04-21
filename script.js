const content = document.getElementById("content");
const nextDayBtn = document.querySelectorAll(".next-day");
const prevDayBtn = document.querySelectorAll(".prev-day");

const navigationButton = document.querySelector(".navigation-button");
const navigationIcon = document.querySelector(".navigation-button i");
const navigationContent = document.querySelector(".navigation-content");

let day = 1;
let numDays=15;

let savedDay = localStorage.getItem("day");
if(savedDay!=null) {
    day = savedDay;
}

loadNavigation();

function loadPage() {




fetch(`./days/day${day}.html`).then(response=>response.text())
.then(data=>{
    content.innerHTML = data; loadLeetCodes();
    loadLeetCodes();

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
    navigationContent.innerHTML +=`<h1 onclick="setPage('${i}')">Day ${i}</h1>`;
    }

}

function setPage(d) {
    day = d;
    localStorage.setItem("day", day);
    loadPage();
}

nextDayBtn.forEach(btn=>btn.onclick = () =>{
    if(day<numDays) {day++;
    loadPage();
    localStorage.setItem("day", day);
    }
}
);
prevDayBtn.forEach(btn=>btn.onclick = () => {
    if(day>1) {day--;
    loadPage();
    localStorage.setItem("day", day);
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