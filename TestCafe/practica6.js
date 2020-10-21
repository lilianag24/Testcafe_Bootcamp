import page from './pageModel'

fixture('Practica 6 en Testcafe')
    .page('https://the-internet.herokuapp.com/');

test("Prueba para agregar y quitar elementos (botones)", async t =>{
    await t
        .click(page.link6)

        await t
        //.expect(page.removeBtn62.visible).notOk()
        .click(page.addBtn61)

        .expect(page.removeBtn62.visible).ok()
        .wait(3000)

        .click(page.removeBtn62)
        .expect(page.removeBtn62.visible).notOk()
});