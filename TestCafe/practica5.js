import page from './pageModel'

fixture('Practica 5 en Testcafe')
    .page('https://the-internet.herokuapp.com/');

test("Prueba Inputs - Escribir Letras", async t =>{
    await t
        .click(page.link5)

    await t
        .typeText(page.input51, "letras", {speed:0.1}) //Determinamos la velocidad de ejecución de la instrucción
        .expect(page.input51.value).eql('')

        .typeText(page.input51, "123456789", {speed:0.1})
        .expect(page.input51.value).notEql("7894")
        .expect(page.input51.value).eql("123456789")

        .typeText(page.input51, "067", {replace: true}) //Replace borrar el contenido del campo de texto y lo remplaza con otro valor
        .typeText(page.input51, "!#$=$.,&/()+-", {replace: true})
        .expect(page.input51.value).eql('')
});