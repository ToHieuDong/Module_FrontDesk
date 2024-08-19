/** @odoo-module **/

import { Component, useState  } from "@odoo/owl";
import { registry } from '@web/core/registry';


export class ThankYou extends Component {
    static template = "front_desk.thankyou";

    switchToHome() {
        this.props.switchToHome();
    }

}

registry.category('public_components').add('front_desk.thankyou', ThankYou);

