let month = document.querySelector('#month');
let arr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
]
for (let i = 0; i < arr.length; i++) {
    let dat = `<option>${arr[i]}</option>`;
    month.insertAdjacentHTML("beforeend", dat);
}

let day = document.querySelector('#day');
let arrDays = [];
for (let i = 1; i <= 31; i++) {
    arrDays[i-1] = i;    
}
for (let i = 0; i < arrDays.length; i++) {
    let dat = `<option>${arrDays[i]}</option>`;
    day.insertAdjacentHTML('beforeend', dat);   
}

let year = document.querySelector('#year');
let arrYears = [];
for (let i = 1960; i <= 2022; i++) {
    arrYears[i-1960]=i;    
}
for (let i = 0; i < arrYears.length; i++) {
    let dat = `<option>${arrYears[i]}</option>`;
    year.insertAdjacentHTML('beforeend', dat);   
}

// -------------MENU------------ //
let img = document.querySelector('#imgMenu');
let h1 = document.querySelector('h1');

img.addEventListener('mouseover', function(){
    this.closest('img').setAttribute('src', 'menu1.png');
});
img.addEventListener('mouseout', function(){
    this.closest('img').setAttribute('src', 'menu.png');
});
