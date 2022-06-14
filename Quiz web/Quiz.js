const CorrectAnswers = ['B', 'B', 'A', 'B']
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

form.addEventListener('submit', e =>{
    e.preventDefault();


    let score = 25;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.vqlue]

    //check answer
    userAnswers.forEach((answer, index) => {
        if (answer === CorrectAnswers[index]) {
            score += 25;
        }
    })

    // result
    scrollTo(0,0);
    // result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none')

    let output = 0
    const timer = setInterval(()=>{
    result.querySelector('span').textContent = `${output}%`;

    if (output === score) {
        clearInterval(timer)   
    }
    else{
        output++
    }

    }, 10)
})

// setTimeout(()=>{
// alert('hello, ladoke!')
// }, 4000)

// let i= 0;
// const timer = setInterval(()=>{
//     console.log('hello')
//     i++;
//     if (i===5) {
//         clearInterval(timer)
//     }
// }, 1000)