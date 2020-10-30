import page from './pageModel';

fixture('Practica11 en Testcafe')
    .page('https://the-internet.herokuapp.com/');


test('Probar manejar un slider horizontal', async t => {
    await t
        .click(page.link11)

    await t
        .click(page.slider11)
        .typeText(page.slider11, "3.5", {speed: 0.1})
        .expect(page.slider11.value).eql("3.5")
});

test('Probar manejar un slider horizontal con flechas', async t => {
    await t
        .click(page.link11)

    await t
        .click(page.slider11)
        .pressKey('right')
        .pressKey('right')
        .pressKey('right')
        .expect(page.slider11.value).eql("1.5")
        .wait(300)

        .pressKey('left')
        .expect(page.slider11.value).eql("1")
});