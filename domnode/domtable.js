const users = [
    {
        id: 1,
        name: 'Amit',
        age: 30,
        city: 'Pune'
    },
    {
        id: 2,
        name: 'Raj',
        age: 28,
        city: 'Mumbai'
    },
    {
        id: 3,
        name: 'Parth',
        age: 31,
        city: 'Ahmedabad'
    },
    {
        id: 4,
        name: 'Lalu',
        age: 54,
        city: 'Patna'
    },
]


const btn = document.getElementById('btn');

btn.addEventListener("click", () => {

    const tbody = document.getElementById('tbody');

    for(let i=0;i<users.length;i++){

        const tr = document.createElement('tr');

        const namrTD = document.createElement('td');
        namrTD.innerHTML = users[i].name;
        
        const ageTD = document.createElement('td');
        ageTD.innerHTML = users[i].age;

        const cityTD = document.createElement('td');
        cityTD.innerHTML = users[i].city;

        const detailTd = document.createElement('td');
        const detailBtn = document.createElement('button');
        detailBtn.innerHTML = "Details";
        detailBtn.addEventListener("click", () => {
            alert("Name " +users[i].name)
        })




        detailTd.appendChild(detailBtn);

        tr.appendChild(namrTD);
        tr.appendChild(ageTD);
        tr.appendChild(cityTD);
        tr.appendChild(detailTd);
        tbody.appendChild(tr);


    }



})