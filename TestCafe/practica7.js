import page from './pageModel';

fixture('Practica7 en Testcafe')
    .page('https://formy-project.herokuapp.com/form');

test('Prueba de Formulario', async t => {
    await t
        .typeText(page.input71, "Liliana", {speed:0.1})
        .expect(page.input71.value).eql("Liliana")

        .typeText(page.input72, "Gutierrez")
        .expect(page.input72.value).eql("Gutierrez")

        .typeText(page.input73, "Software Engineer in Test")
        .expect(page.input73.value).eql("Software Engineer in Test")

        .click(page.rbt74)
        .expect(page.rbt74.checked).ok()

        .click(page.rbt75)
        .expect(page.rbt75.checked).ok()

        .click(page.rbt76)
        .expect(page.rbt76.checked).ok()

        .click(page.checkbox77)
        .expect(page.checkbox77.checked).ok()

        .click(page.smenu701)
        .click(page.optmenu702)
        
        .typeText(page.date703, "10222020")
        .click(page.button704)

    await t
        .expect(page.text705.visible).ok()
        .expect(page.text706.innerText).contains("successfully submitted")
});