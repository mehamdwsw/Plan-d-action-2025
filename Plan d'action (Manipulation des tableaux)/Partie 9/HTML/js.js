const dataContent = document.getElementById("dataContent");

let data = [
    {
        id: 1,
        firstname: "Tayeb",
        lastname: "SOUINI",
        email: "Tayeb@gmail.com"
    }
]
id=2;

function afficherData(oneItem) {
    dataContent.innerHTML=''
    data.forEach((Elemen,i)=>{

    dataContent.innerHTML += `
        <tr>
                    <th scope="row">${Elemen.firstname}</th>
                    <td>${Elemen.lastname}</td>
                    <td>${Elemen.email}</td>
                    <td>
                        <button id="${Elemen.id}" onclick="Delete(${i})" class="btn btn-danger">Delete</button>
                        <button id="${Elemen.id}" onclick="Update(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-info">Update</button>
                    </td>
                </tr>`
    })
   
    
} 


afficherData(data);
function Delete(id){
data.splice(id,1)
afficherData(data)
}



const ajouter = document.getElementById("ajouter")
ajouter[3].addEventListener('click' ,ajouter_vail )
function ajouter_vail(){
    console.log(10);
    
    let obg ={};
    obg.id=id
obg.firstname=ajouter[0].value
obg.lastname=ajouter[1].value
obg.email=ajouter[2].value

data.push(obg);
afficherData(data)
id++;
ajouter[0].value=''
ajouter[1].value=''
ajouter[2].value=''
}
function Update(id){
ajouter[0].value=data[id].firstname
ajouter[1].value=data[id].lastname
ajouter[2].value=data[id].email
const idf = document.getElementById("id").style.display='block'
idf.innerText='id'
}
// -------------------------------------------------------------------------------------------------------------
const Search= document.getElementById('Search')
const Search_inpot= document.getElementById('Search_inpot')

Search.addEventListener('click',Search_filter)
function Search_filter(){
    if(Search_inpot.value==""){
        console.log(data);
        console.log(10);
        
    }else{
    console.log(data.filter((Elemen)=>Search_inpot.value==Elemen.firstname))

    }
}