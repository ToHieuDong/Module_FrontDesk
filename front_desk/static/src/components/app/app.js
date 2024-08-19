/** @odoo-module **/

import { Component, useState  } from "@odoo/owl";
import { registry } from '@web/core/registry';
import {Home} from "../home/home";
import {Info} from "../info/info";
import {Host} from "../host/host";
import {Drink} from "../drink/drink";
import {ThankYou} from "../thankyou/thankyou";
import {DrinkService} from "../drinkservice/drinkservice";


export class App extends Component {
    static template = "front_desk.app";
    static components  = { Home, Info, Host, Drink, DrinkService, ThankYou };
    setup() {
        console.log('Station value:', this.props);
        this.state = useState({
            currentComponent: 'home',
        });

        this.switchToInfo = this.switchToInfo.bind(this);
        this.switchToHome = this.switchToHome.bind(this);
        this.switchToHost = this.switchToHost.bind(this);
        this.switchToDrink = this.switchToDrink.bind(this);
        this.switchToDrinkService = this.switchToDrinkService.bind(this);
        this.switchToThankYou = this.switchToThankYou.bind(this);
    }


    switchToInfo() {
        this.state.currentComponent = 'info';
    }

    switchToHome() {
        this.state.currentComponent = 'home';
    }

    switchToHost() {
        this.state.currentComponent = 'host';
    }

    switchToDrink() {
        this.state.currentComponent = 'drink';
    }

    switchToDrinkService() {
        this.state.currentComponent = 'drinkservice';
    }

    switchToThankYou() {
        this.state.currentComponent = 'thankyou';
    }

}

registry.category('public_components').add('front_desk.app', App);

