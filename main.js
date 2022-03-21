// var myAge = 20;
// console.log(myAge);
let count = 0;
let countEl = document.getElementById("count-el");
function increament(){
    count += 1;
    countEl.textContent = count;
}
let saveEl = document.getElementById("save-el");

function save(){
    let countstr = count + " - "
    saveEl.textContent += countstr
    countEl.textContent = 0;
    count = 0;
    // document.getElementById("save-el").textContent +=countstr;
}







