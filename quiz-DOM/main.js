let data = [
  {
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "age": 30,
    "userAccount": "Premium",
    "first_name": "Michael",
    "last_name": "Lawson",
    "description": "Lorem ipsum"
    },
    {
    "id": 8,
    "email": "lindsay.ferguson@reqres.in",
    "age": 78,
    "userAccount": "Basic",
    "first_name": "Lindsay",
    "last_name": "Ferguson",
    "description": "Lorem ipsum"
    },
    {
    "id": 9,
    "email": "tobias.funke@reqres.in",
    "age": 23,
    "userAccount": "Basic",
    "first_name": "Tobias",
    "last_name": "Funke",
    "description": "Lorem ipsum"
    },
    {
    "id": 10,
    "email": "byron.fields@reqres.in",
    "age": 86,
    "userAccount": "Basic",
    "first_name": "Byron",
    "last_name": "Fields",
    "description": "Lorem ipsum"
    },
    {
    "id": 11,
    "email": "george.edwards@reqres.in",
    "age": 30,
    "userAccount": "Premium",
    "first_name": "George",
    "last_name": "Edwards",
    "description": "Lorem ipsum"
    },
    {
    "id": 12,
    "email": "rachel.howell@reqres.in",
    "age": 67,
    "userAccount": "Premium",
    "first_name": "Rachel",
    "last_name": "Howell",
    "description": "Lorem ipsum"
    },
    {
    "id": 13,
    "email": "adrian.bell@reqres.in",
    "age": 54,
    "userAccount": "Basic",
    "first_name": "Adrian",
    "last_name": "Bell",
    "description": "Lorem ipsum"
    },
    {
    "id": 14,
    "email": "adrian.bell@reqres.in",
    "age": 54,
    "userAccount": "",
    "first_name": "Adrian",
    "last_name": "Bell",
    "description": "Lorem ipsum"
    }
] ; 

//Profe, la verdad tuve un enredo con los document y pase buen rato haciendolo con casi todo al reves y como hasta 
//5:40 me di cuenta que todo iba mal T.T 

const nuevaInfo = document.getElementsByClassName('one');
  const elementos = [...nuevaInfo.elements];
  let dataProducto = {};

  const imprimirInfo= (infos) => {
    const one = document.getElementsByClassName('one');

    infos.forEach (campos )  {
    const id = document.createElement('h2');
    const first_name = document.createElement('h3'); 
    const last_name = document.createElement('h3');
    const userAccount  = document.createElement('p');
    const email = document.createElement ('p')
    const description = document.createElement('p');
    const edad = document.createElement('p');

    id.textContent = '7' 
    first_name.textContent = 'Michael'
    last_name.textContent = 'Lawson'
    email.textContent = 'michael.lawson@reqres.in'
    userAccount.textContent = 'Premium'
    description.textContent = 'Lorem ipsum'
    edad.textContent = '30'
  infos.append(id, first_name, last_name, userAccount, descripcion, edad);
    infos.appendChild(infos);
  } 
}
