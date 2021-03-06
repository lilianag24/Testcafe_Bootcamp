import page from './pageModel';

fixture('Test con testcafe')
    .page ('https://devexpress.github.io/testcafe/example/');

//Primera prueba, escribir en la caja de texto
test('Mover un slider', async t => {
    await t
        .click(page.checkboxTried)
        .expect(page.checkboxTried.checked).ok()
        .dragToElement(page.slider.handle, page.slider.value.withText('9'))
});
