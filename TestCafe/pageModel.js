import { Selector } from 'testcafe';

class Page {
    constructor(){
        //Selectores para Practica 2
        this.link2 = Selector('a').withText('A/B Testing');
        //this.text21 = Selector ('#content > div > h3');
        this.text21 = Selector ('h3');
        
        //Selectores para Practica 3
        this.link3 = Selector('a').withText('Forgot Password');
        this.input31 = Selector('#email'); 
        this.button32 = Selector('#form_submit');
        this.text33 = Selector('#content');
        this.errorMsg = Selector('body > h1');

        //Selectores para Practica 4
        this.link4 = Selector('a').withText('Checkboxes');
        //Checkbox padre
        this.baseCheckbox = Selector('#checkboxes > input[type=checkbox]');
        //Checkbox hijos
        this.checkbox41 = Selector('#checkboxes > input[type=checkbox]:nth-child(1)');
        this.checkbox42 = Selector('#checkboxes > input[type=checkbox]:nth-child(3)');
        
        //Selectores para Practica 5
        this.link5 = Selector('a').withText('Inputs');
        this.input51 = Selector('#content > div > div > div > input[type=number]'); 

        //Selectores para Practica 6
        this.link6 = Selector('a').withText('Add/Remove Elements');
        this.addBtn61 = Selector('#content > div > button');
        this.removeBtn62 = Selector('#elements > button');
        this.removeBtn63 = Selector('#elements > button:nth-child(1)');
        this.removeBtn64 = Selector('#elements > button:nth-child(2)');

        //Selectores para Practica 7
        this.input71 = Selector('#first-name');
        this.input72 = Selector('#last-name');
        this.input73 = Selector('#job-title');
        this.rbt74 = Selector('#radio-button-1');
        this.rbt75 = Selector('#radio-button-2');
        this.rbt76 = Selector('#radio-button-3');
        this.checkbox77 = Selector('#checkbox-1');
        this.checkbox78 = Selector('#checkbox-2');
        this.checkbox79 = Selector('#checkbox-3');
        this.smenu701 = Selector('#select-menu');
        this.optmenu702 = Selector('#select-menu > option:nth-child(2)');
        this.date703 = Selector('#datepicker');
        this.button704 = Selector('a').withText('Submit');//('body > div > form > div > div:nth-child(15) > a'); 
        this.text705 = Selector('h1').withText('Thanks for submitting your form');
        this.text706 = Selector('body > div > div');

        //Selectores Practica 9
        this.link9 = Selector('a').withText('Key Presses');
        this.text91 = Selector('#result');

        //Selectores Practica 10 
        this.link10 = Selector('a').withText('Context Menu');
        this.hotspot101 = Selector('#hot-spot');
    }
}
export default new Page();