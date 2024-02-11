var emails = [
    "samir@gmail.com",
    "aashiq@gmail.com",
    "parth@gmail.com"
]

const studentForm = document.getElementById('studentForm');
//console.log(studentForm);
studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form Submitted');
})

const studentName = document.getElementsByName("name")[0]
studentName.addEventListener('input', (e) => {
    //console.log(e.target.value);
})
studentName.addEventListener('blur', (e) => {

    console.log(e.target.value);

    if(emails.includes(e.target.value)){
        console.log('Email already exists')
    }
    else{
        console.log('Email is unique')
    }

    // if (e.target.value.length < 5) {
    //     console.log('Name is too short');
    // }

})