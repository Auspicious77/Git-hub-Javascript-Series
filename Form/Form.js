const Form = document.querySelector('.signup-form')
// const username = document.querySelector('.user')
const Feedback = document.querySelector('.feedback')

Form.addEventListener('submit', e => {
    e.preventDefault();
    // validation
const username = Form.username.value
const usernamepattern = /^[a-zA-Z]{6,12}$/;


if (usernamepattern.test(username)){
    Feedback.textContent= 'The username is valid'
}

else{
    // feedback help info
    Feedback.textContent = 'username must contain letters only and be between six and twelve character long'
}

    
});



// texting RegEx

// let result = pattern.test(username);
// console.log(result)

// if (result){
//     console.log('regex text passed')
// } else{
//     console.log('regEx text failed')
// }