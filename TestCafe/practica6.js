import page from './pageModel'

fixture('Practica 6 en Testcafe')
    .page('https://the-internet.herokuapp.com/');

test("Prueba para agregar y quitar 1 elemento (botones)", async t =>{
    await t
        .click(page.link6)

        await t
        .expect(page.removeBtn62.exists).notOk()
        .click(page.addBtn61)

        .expect(page.removeBtn62.visible).ok()
        .wait(3000)

        .click(page.removeBtn62)
        .expect(page.removeBtn62.exists).notOk()
});

test("Prueba para agregar y quitar 3 elementos (botones)", async t =>{
    await t
        .click(page.link6)

    await t
        .expect(page.removeBtn62.exists).notOk()
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .expect(page.removeBtn62.nth(0).visible).ok()
        .expect(page.removeBtn62.nth(1).visible).ok()
        .expect(page.removeBtn62.nth(2).visible).ok()
        .wait(3000)

        //Borrar elementos
        .click(page.removeBtn62)
        .expect(page.removeBtn62.nth(2).exists).notOk()
        .click(page.removeBtn62)
        .expect(page.removeBtn62.nth(1).exists).notOk()
        .click(page.removeBtn62)
        .expect(page.removeBtn62.nth(0).exists).notOk()
});

test("Prueba validar el total de botones agregado", async t =>{
    await t
        .click(page.link6)

    await t
        .expect(page.removeBtn62.exists).notOk()
        //Agregar 3 elementos y validar el total 
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        const total = await page.removeBtn62.count; 
        console.log("Total obtenido: " + total + " - Total esperado: 3");
        await t.expect(total).eql(3)
        
        //Agregar 2 elementos adicionales y validar el total 
        .click(page.addBtn61)
        .click(page.addBtn61)
        const total2 = await page.removeBtn62.count; 
        console.log("Total obtenido: " + total2 + " - Total esperado: 5");
        await t.expect(total2).eql(5)

        //Borrar 3 elementos y validar el total 
        .click(page.removeBtn62)
        .click(page.removeBtn62)
        .click(page.removeBtn62)
        const total3 = await page.removeBtn62.count; 
        console.log("Total obtenido: " + total3 + " - Total esperado: 2");
        await t.expect(total3).eql(2)
});