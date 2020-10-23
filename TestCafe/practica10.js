import page from './pageModel';

fixture('Practica7 en Testcafe')
    .page('https://the-internet.herokuapp.com/');


test('Probar un click derecho', async t => {
    await t
        .click(page.link10)

    await t
        .setNativeDialogHandler()
        .rightClick(page.hotspot101)

});