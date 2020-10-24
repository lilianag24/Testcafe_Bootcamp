import page from './pageObjectModel';

let randomNum = Math.random().toString(36).substr(1,4);
const email = 'dummy' + randomNum + '@mailinator.com'
const firstName = "Liliana"
const lastName = "Gutierrez"
const password = "12345"

fixture('Pruebas de modulo Mi Cuenta')
    .page('http://automationpractice.com');

test ('Crear una cuenta', async t => {
    await t
        .click(page.signIn_link)
        console.log("Correo: ", email)

    await t
        .typeText(page.email_input, email)
        .click(page.createAccount_btn)

    await t
        .expect(page.email_form.value).contains(email)
        .expect(page.email_form.hasAttribute('readonly')).notOk() //Valida que el campo es editable

        .typeText(page.firstName_input, firstName)
        .typeText(page.lastName_input, lastName)

        .expect(page.firstName_Address.value).contains(firstName)
        .expect(page.lastName_Address.value).contains(lastName)

        .typeText(page.password_input, password)
        .typeText(page.address_input, "PO Box 123")
});

test ('Loggearse a un cuenta nueva', async t => {});

test ('Logout', async t => {});

test ('Crear una cuenta con datos ya existentes', async t => {});

test ('Validar recuperar el password de un correo valido', async t => {});

test ('Validar recuperar password con un correo no valido', async t => {});

test ('Cambiar información de mi cuenta', async t => {});
