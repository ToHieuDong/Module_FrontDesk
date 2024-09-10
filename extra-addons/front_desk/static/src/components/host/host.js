/** @odoo-module **/

import { Component, useState  } from "@odoo/owl";
import { registry } from '@web/core/registry';
import { useService } from "@web/core/utils/hooks";


export class Host extends Component {
    static template = "front_desk.host";
    setup() {
        this.rpc = useService("rpc");
        this.state = useState({
            offer_drinks: this.props.offer_drinks || false,
            host: {},
            listHost: [],
        });
        this.state.translations = this.props.translations;

        this.getHost()
        console.log(this.state.listHost)
    }

    onHostChange(ev) {
        // this.state.host = {'login': ev.target.value, 'name': ev.target.name};
        this.state.host = this.state.listHost.find(host => host.login === ev.target.value);
        console.log(this.state.host)
    }

    async getHost() {
        try {
            const result = await this.rpc('/front_desk/getHost');
            if (result.status === 'success') {
                console.log('Visitor created successfully:', result.host);
                this.state.listHost = result.host;
            } else {
                console.error('Error get Host:', result.message);
            }
        } catch (error) {
            console.error('RPC call failed:', error);
        }
    }

    async saveVisitorHost() {
        try {

            this.props.visitor_data.host=this.state.host;

            // await this.createVisitor(visitorData);

            if (this.state.offer_drinks) {
                this.switchToDrink();
            } else {
                this.switchToThankYou();
            }

        } catch (error) {
            console.error('Error:', error);
        }
    }

    switchToDrink() {
        this.props.switchToDrink();
    }

    switchToInfo() {
        this.props.switchToInfo();
    }

    switchToThankYou() {
        this.props.switchToThankYou();
    }
}

registry.category('public_components').add('front_desk.host', Host);

