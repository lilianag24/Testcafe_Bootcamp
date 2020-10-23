import page from './pageModel';

fixture('Practica8 en Testcafe')
    .page('https://the-internet.herokuapp.com/');

    test('Prueba de Login con usuario NO válido', async t => {
        await t
            .click(page.link8)
            .expect(page.text81.innerText).contains('Login Page')
    
        await t
            .typeText(page.input82, "invalido", {speed: 0.01})
            .typeText(page.input83, "SuperSecretPassword!")
            .click(page.button84)
            .expect(page.alertMsg85.innerText).contains('Your username is invalid!')   
    });


    test('Prueba de Login con password NO válido', async t => {
        await t
            .click(page.link8)
            .expect(page.text81.innerText).contains('Login Page')
    
        await t
            .typeText(page.input82, "tomsmith", {speed: 0.01})
            .expect(page.input82.value).eql("tomsmith")
            .typeText(page.input83, "InvalidPassword")
            .click(page.button84)
            .expect(page.alertMsg85.innerText).contains('Your password is invalid!')   
    });

    test('Prueba de Login válido', async t => {
        await t
            .click(page.link8)
            .expect(page.text81.innerText).contains('Login Page')
    
        await t
            .typeText(page.input82, "tomsmith", {speed: 0.01})
            .expect(page.input82.value).eql("tomsmith")
            .typeText(page.input83, "SuperSecretPassword!")
            .click(page.button84)
        
        await t
            .expect(page.alertMsg85.innerText).contains('You logged into a secure area!')   
    });