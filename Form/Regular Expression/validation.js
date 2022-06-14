const Form = document.querySelector('.signup-form')
// const username = document.querySelector('.user')
const Feedback = document.querySelector('.feedback')
const usernamepattern = /^[a-zA-Z]{6,12}$/;


Form.addEventListener('submit', e => {
    e.preventDefault();
    // validation
const user = Form.username.value


if (usernamepattern.test(user)){
    Feedback.textContent= 'The username is valid'
}

else{
    // feedback help info
    Feedback.textContent = 'username must contain letters only and be between six and twelve character long'
}

    
});

// Live Feedback
Form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, Form.username.value)
    if (usernamepattern.test(e.target.value)) {
        Form.username.setAttribute('class', 'success');
    }
    else{
        Form.username.setAttribute('class', 'error');

    }
})