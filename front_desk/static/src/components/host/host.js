/** @odoo-module **/

import { Component, useState  } from "@odoo/owl";
import { registry } from '@web/core/registry';


export class Host extends Component {
    static template = "front_desk.host";
    setup() {
        this.state = useState({
            host: "",
        });
    }

    switchToDrink() {
        this.props.switchToDrink();
    }

    switchToInfo() {
        this.props.switchToInfo();
    }
}

registry.category('public_components').add('front_desk.host', Host);

