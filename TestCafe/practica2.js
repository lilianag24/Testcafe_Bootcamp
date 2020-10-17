import {Selector} from 'testcafe';
//Se importa el Page Model
import page from './pageModel';

fixture('Practica2 en Testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Prueba para dar click en un enlace', async t =>{
    await t
        .click(page.link2)

    await t //Recarga la pagina y espera
        if(page.text21.innerText == "A/B Test Control" || "A/B Test Variation" || "A/B Test Variation 1"){
            console.log("La prueba paso")
        } else {
            console.log("La prueba fallo")
        }
});
