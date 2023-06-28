const monthEL = document.querySelector('.date h2');
const fullDateEL = document.querySelector('.date p');
const daysEL = document.querySelector('.days');
const monthInx= new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(),monthInx + 1,0).getDate();
const firstDay = new Date(new Date().getFullYear(),monthInx,1).getDay() -1;
console.log(lastDay);
const months=[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'August',
    'September',
    'October',
    'November',
    'December'
];

monthEL.innerText= months[monthInx];
fullDateEL.innerText= new Date().toDateString();

let day = '';
for(i = firstDay;i > 0 ;i--){
    day += `<div class='empty'></div>`

}
for(i = 1;i <= lastDay;i++){
    if(i === new Date().getDate())    day += `<div class='today'>${i}</div>`

    else day += `<div>${i}</div>`
}
daysEL.innerHTML= day;