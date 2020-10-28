let randomNum = Math.random().toString(36).substr(1,4);

//Se importa como un objeto
let data = {
    email: 'dummy' + randomNum + '@mailinator.com',
    firstName : "Liliana",
    lastName : "Gutierrez",
    password : "12345",
    pbox : "PO Box 123",
    city : "Los Angeles"
}

export {data}