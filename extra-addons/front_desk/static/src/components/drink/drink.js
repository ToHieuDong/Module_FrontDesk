/** @odoo-module **/

import { Component, useState  } from "@odoo/owl";
import { registry } from '@web/core/registry';


export class Drink extends Component {
    static template = "front_desk.drink";
    setup() {
        this.state = useState({
            drink: "",
        });
        this.state.translations = this.props.translations;
    }



    switchToDrinkService() {
        this.props.switchToDrinkService();  // Gọi callback để chuyển sang 'home'
    }

    switchToThankYou() {
        this.props.switchToThankYou();  // Gọi callback để chuyển sang 'info'
    }
}

registry.category('public_components').add('front_desk.drink', Drink);

