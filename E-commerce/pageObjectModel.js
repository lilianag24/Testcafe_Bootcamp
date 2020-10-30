import {Selector} from 'testcafe';

class Page{
    constructor (){
        this.signIn_link = Selector('a').withText('Sign in');
        this.email_input = Selector('#email_create');
        this.createAccount_btn = Selector('#SubmitCreate');
        this.firstName_input = Selector('#customer_firstname');
        this.lastName_input = Selector('#customer_lastname');
        this.email_form = Selector ('#email');
        this.password_input = Selector('#passwd');
        this.firstName_Address = Selector('#firstname');
        this.lastName_Address = Selector('#lastname');
        this.address_input = Selector('#address1')
        this.city = Selector('#city');
        this.state = Selector('#uniform-id_state');
        this.stateOption = Selector('#id_state > option')
        this.zipCode = Selector('#postcode');
        this.country = Selector('#id_country');
        this.mobilePhone = Selector('#phone_mobile');
        this.alias = Selector('#alias');
        this.submitButton = Selector('#submitAccount');
    }
}

export default new Page(); 