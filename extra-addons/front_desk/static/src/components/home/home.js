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
        console.log('Station value:', this.props.visitor_data);
        console.log('Translations value: Home', this.props.translations);
        this.state = useState({
            stationName: this.props.name || 'XBOSS',
            message: this.props.message || '',
        });
        this.state.visitorData = this.props.visitor_data;
        this.state.translations = this.props.translations;


        this.state.visitor_data = {
            'name': '',
            'visitor_company': '',
            'phone': '',
            'drink': '',
            'host': '',
            'check_in': null,
            'duration': 0.0,
            'station': '',
            'status': 'pending',
            'drink_served': false
        }

    }

    switchToInfo() {
        this.props.switchToInfo();  // Gọi callback để chuyển sang 'info'
    }

}

registry.category('public_components').add('front_desk.home', Home);

