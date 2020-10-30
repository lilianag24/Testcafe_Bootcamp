let randomNum = Math.random().toString(36).substr(1,4);

//Se importa como un objeto
let data = {
    email: 'dummy' + randomNum + '@mailinator.com',
    firstName : "Liliana",
    lastName : "Gutierrez",
    password : "12345",
    pbox : "PO Box 123",
    city : "Los Angeles",
    state : "California",
    zipCode : "62985",
    mobilePhone : "333-999-8888",
    alias : "Mi Casa"
}

export {data}