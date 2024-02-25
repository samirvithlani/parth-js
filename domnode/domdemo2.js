const box = document.getElementById('box');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {

    const form = document.createElement('form');

    const nameinput = document.createElement('input');
    const nameLable = document.createElement('label');
    nameinput.setAttribute('type', 'text');
    nameLable.innerHTML = 'Name';
    //setid
    nameinput.setAttribute('id', 'name');


    const ageinput = document.createElement('input');
    ageinput.setAttribute('type', 'number');
    const ageLable = document.createElement('label');
    ageLable.innerHTML = 'Age';
    //setid
    ageinput.setAttribute('id', 'age');

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');


    submit.addEventListener("click",(event)=>{
        submitHandler(event);
    })
    



    form.appendChild(nameLable);
    form.appendChild(nameinput);
    form.appendChild(ageLable);
    form.appendChild(ageinput);
    form.appendChild(submit);


    box.appendChild(form);
})

const submitHandler = (e) => {

    e.preventDefault();
    //alert('Form Submitted');
    console.log('Form Submitted');
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    console.log(name, age);


}
