import page from './pageModel'

fixture('Practica 3 en Testcafe')
    .page('https://the-internet.herokuapp.com/');

test("Prueba de formultario de recuperación de password", async t =>{
    await t
        .click(page.link3)

    await t
        .expect(page.input31.exists).ok()
        .expect(page.button32.exists).ok()
});

test('Probar escribir un email en el formulario', async t =>{
    await t
        .click(page.link3)

    await t
        .typeText(page.input31, 'noemail@noemail.com')
        .expect(page.input31.value).eql('noemail@noemail.com')
});

test('Probar que se envía correctamente el email', async t =>{
    await t
        .click(page.link3)

    await t
        .typeText(page.input31, 'noemail@noemail.com')
        .expect(page.input31.value).eql('noemail@noemail.com')
        .click(page.button32)

    await t
        .expect(page.text33.innerText).contains('sent', "La palabra sent no se muestra en el Text0", 'e-mail')
});

test('Probar que no se ingresa email en el formulario', async t=>{
    await t
        .click(page.link3)

    await t
        .click(page.button32)

    await t
        .expect(page.errorMsg.innerText).eql('Internal Server Error');
});


