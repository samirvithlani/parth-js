var company = [
  {
    name: "google",
    employees: [
      {
        name: "bhavik",
        age: 25,
        salary: 25000,
        designation: "developer",
        isMarried: false,
        child: 0,
        gender: "male",
      },
      {
        name: "vishal",
        age: 30,
        salary: 35000,
        designation: "developer",
        isMarried: true,
        child: 2,
        gender: "male",
      },
      {
        name: "priya",
        age: 35,
        salary: 5000,
        designation: "tester",
        isMarried: true,
        child: 2,
        gender: "female",
      },
    ],
  },
  {
    name: "facebook",
    employees: [
      {
        name: "mark",
        age: 40,
        salary: 55000,
        designation: "developer",
        isMarried: true,
        child: 2,
        gender: "male",
      },
      {
        name: "parth",
        age: 35,
        salary: 25000,
        designation: "developer",
        isMarried: false,
        child: 1,
        gender: "male",
      },
      {
        name: "amita",
        age: 36,
        salary: 45000,
        designation: "developer",
        isMarried: false,
        child: 0,
        gender: "female",
      },
    ],
  },
];

//find all employee from google

var googleEmp = company.find((comp) => comp.name == "google").employees;
console.log(googleEmp);

var totalSalaryOfGoogle = company
  .find((comp) => comp.name == "google")
  .employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(totalSalaryOfGoogle);



var filEmployee = company.map((comp) => {

    return comp.employees.filter((emp)=>emp.isMarried== true)

})
console.log(filEmployee);


var femLeemps = company.find((comp)=>comp.name =="google").employees.filter((emp)=>emp.gender=="female")
console.log(femLeemps);

var childFil = company.find((comp)=>comp.name =="facebook").employees.filter((emp)=>emp.child>0)
console.log(childFil);