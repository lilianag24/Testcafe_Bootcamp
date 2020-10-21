import {Selector} from 'testcafe';
//Se importa el Page Model
import page from './pageModel';

fixture('Practica2 en Testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Prueba para dar click en un enlace', async t =>{
    await t
        .click(page.link2)

    await t //Recarga la pagina y espera
        const pageTitle = await page.text21.innerText;
        console.log(pageTitle);
        
        if(pageTitle == "A/B Test Control" || pageTitle == "A/B Test Variation" || pageTitle == "A/B Test Variation 1"){
            await t.expect(true).ok()
            console.log("La prueba paso")
        } else {
            await t.expect(false).ok("La prueba fallo, el texto: \"" +pageTitle+ "\" es diferente a los esperados")
        }
});
