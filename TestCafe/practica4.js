import page from './pageModel'

fixture('Practica 4 en Testcafe')
    .page('https://the-internet.herokuapp.com/');

test("Prueba de checkboxes", async t =>{
    await t
        .click(page.link4)

    await t
        .click(page.baseCheckbox.nth(1))

    await t.expect(page.baseCheckbox.nth(1).checked).notOk()
    await t.expect(page.checkbox42.checked).notOk()
});