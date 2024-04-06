const getAPIDEMO1 = async () => {


    const response = await fetch("https://reqres.in/api/users?page=2",{
        method: 'GET',
    })
    console.log(response)
    const data = await response.json()
    console.log(data)
    console.log(data.data)

}

//getAPIDEMO1()


const getApiDemo2 = ()=>{


    fetch("https://node5.onrender.com/user/user").then((response)=>{
        console.log(response)
        response.json().then((data)=>{
            console.log(data)
        })
    })




}

//getApiDemo2()

const printData =async () => {


    const response = await fetch("https://node5.onrender.com/user/user",{
        method: 'GET',
    })
    const data = await response.json()
    console.log(data.data)

    const tbody = document.getElementById("tbody")

    for(let i=0;i<data.data.length;i++){

        const tr = document.createElement("tr")
        const IDTD = document.createElement("td")
        IDTD.innerHTML = data.data[i]._id

        const nameTD = document.createElement("td")
        nameTD.innerHTML = data.data[i].name

        const emailTD = document.createElement("td")
        emailTD.innerHTML = data.data[i].email

        const ageTD = document.createElement("td")
        ageTD.innerHTML = data.data[i].age
        if(data.data[i].age >= 24){

            ageTD.style.color = "red"
            tr.style.backgroundColor = "green"
        }

        const statusTD = document.createElement("td")
        statusTD.innerHTML = data.data[i].isActive


        tr.appendChild(IDTD)
        tr.appendChild(nameTD)
        tr.appendChild(emailTD)
        tr.appendChild(ageTD)
        tr.appendChild(statusTD)
        tbody.appendChild(tr)
    }


}
printData()