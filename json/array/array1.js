var students = [
    {
        id: 1,
        name:"XI JINPING",
        age: 67,
        country:"CHINA",
    },
    {
        id: 2,
        name:"DONALD TRUMP",
        age: 73,
        country:"USA",
    },
    {
        id: 3,
        name:"KIM JONG UN",
        age: 36,
        country:"NORTH KOREA",
    }
]

console.log(students);

// students.forEach((stu)=>{

//         console.log(stu.name);
// })


// students =  students.map((stu)=>{

//     return stu.name;
// })

students =students.map((stu)=>{

    return ({
        id:stu.id,
        name:stu.name.toLowerCase(),
        age:stu.age,
        country:stu.country.toLowerCase(),
        isAlive:true,
    })

})


console.log(students);