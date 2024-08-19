/** @odoo-module **/

import { Component, useState  } from "@odoo/owl";
import { registry } from '@web/core/registry';


export class DrinkService extends Component {
    static template = "front_desk.drinkservice";
    setup() {
        this.state = useState({
            drink: "",
        });
    }


    switchToThankYou() {
        this.props.switchToThankYou();
    }
}

registry.category('public_components').add('front_desk.drinkservice', DrinkService);

