/** @odoo-module **/

import { Component, useState  } from "@odoo/owl";
import { registry } from '@web/core/registry';
import {Language} from "../language/language";
import {Qr} from "../qr/qr";
import {Time} from "../times/time";

export class Home extends Component {
    static template = "front_desk.home";
    static components  = { Qr, Language, Time };
    setup() {
        console.log('Station value:', this.props);  // Kiểm tra giá trị của prop
        this.state = useState({
            stationName: this.props.name || 'XBOSS',
        });
    }

    switchToInfo() {
        this.props.switchToInfo();  // Gọi callback để chuyển sang 'info'
    }

}

registry.category('public_components').add('front_desk.home', Home);

