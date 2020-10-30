import page from './pageObjectModel';
import { data } from './data';

fixture('Pruebas de modulo Mi Cuenta')
    .page('http://automationpractice.com');

test ('Crear una cuenta', async t => {
    await t
        .click(page.signIn_link)
        console.log("Correo: ", data.email)
        console.log("firstName: ", data.firstName)
        console.log("lastName: ", data.lastName)

    await t
        .typeText(page.email_input, data.email)
        .click(page.createAccount_btn)
        //.takeScreenshot()

    await t
        //.maximizeWindow()
        .expect(page.email_form.value).contains(data.email)
        .expect(page.email_form.hasAttribute('readonly')).notOk() //Valida que el campo es editable
        //.takeScreenshot()

        .typeText(page.firstName_input, data.firstName)
        .typeText(page.lastName_input, data.lastName)
        //.takeElementScreenshot(page.firstName_input)
        .setTestSpeed(1)

        .expect(page.firstName_Address.value).contains(data.firstName)
        .expect(page.lastName_Address.value).contains(data.lastName)

        .typeText(page.password_input, data.password)

        .typeText(page.address_input, data.pbox)
        .expect(page.address_input.value).contains(data.pbox)

        .typeText(page.city, data.city)
        .expect(page.city.value).contains(data.city)

        .click(page.state)


});

test ('Loggearse a un cuenta nueva', async t => {});

test ('Logout', async t => {});

test ('Crear una cuenta con datos ya existentes', async t => {});

test ('Validar recuperar el password de un correo valido', async t => {});

test ('Validar recuperar password con un correo no valido', async t => {});

test ('Cambiar información de mi cuenta', async t => {});
