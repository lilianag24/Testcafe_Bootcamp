import page from './pageModel';

fixture('Practica7 en Testcafe')
    .page('https://the-internet.herokuapp.com/');


test('Probar presionar teclas', async t => {
    await t
        .click(page.link9)

    await t
        //Instruccion para presionar una tecla
        .pressKey('backspace')
        .wait(500) //en milisegundos
    
    await t
        .pressKey('c')
        .wait(500) 
        .expect(page.text91.innerText).contains('C')
        .expect(page.text91.innerText).notContains('You entered: backspace')

        .pressKey('tab')
        .wait(500) 
        .expect(page.text91.innerText).contains('TAB')

        .pressKey('ENTER')
        .wait(500) 
        .expect(page.text91.innerText).contains('ENTER')

        .pressKey('esc')
        .wait(500) 
        .expect(page.text91.innerText).contains('ESC')

        .pressKey('capslock')
        .wait(500) 
        .expect(page.text91.innerText).contains('CAPS_LOCK')

        .pressKey('space')
        .wait(500) 
        .expect(page.text91.innerText).contains('SPACE')

        .pressKey('shift')
        .wait(500) 
        .expect(page.text91.innerText).contains('SHIFT')

        .pressKey('up')
        .wait(500) 
        .expect(page.text91.innerText).contains('UP')
});