let countJSON = JSON.stringify(PETpetPage);
console.log(PETpetPage, countJSON);
localStorage.setItem("PETpetPage", JSON.stringify);
let fromLocal = localStorage.getItem("PETpetPage");
console.log(fromLocal);
