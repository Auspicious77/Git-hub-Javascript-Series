
const Clock = document.querySelector('.clock')

// console.log(now);
// console.log(typeof now)

// console.log('getFullYear', now.getFullYear())
// console.log('getMonth', now.getMonth())

const tick =()=>{
    const now = new Date();
    const h = now.getHours()
    const m = now.getMinutes()
    const s = now.getSeconds()
    
 
    const html = `
    <span>${h}</span>
    <span>${m}</span>
    <span>${s}</span>
    `;
   Clock.innerHTML = html;

};

setInterval(tick, 1000);

// https://date-fns.org/    date library
