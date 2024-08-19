/** @odoo-module **/

import { Component, useState  } from "@odoo/owl";
import { registry } from '@web/core/registry';
import { useService } from "@web/core/utils/hooks";


export class Info extends Component {
    static template = "front_desk.info";
    setup() {
        // useSubEnv({
        //     config: {
        //         ...getDefaultConfig(),
        //         ...this.env.config,
        //     },
        // });

        this.orm = useService("orm");
        this.state = useState({
            host_selection: this.props.host_selection || false,
            name: "",
            phone: "",
            company: "",
        });
    }


    async saveVisitorInfo() {
        try {
            const formatDateToOdooFormat = (date) => {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                const hours = String(date.getHours()).padStart(2, '0');
                const minutes = String(date.getMinutes()).padStart(2, '0');
                const seconds = String(date.getSeconds()).padStart(2, '0');
                return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            }

            const now = new Date();
            const visitorData = {
                name: this.state.name,
                phone: this.state.phone,
                visitor_company: this.state.company,
                check_in: formatDateToOdooFormat(now),
                station: this.props.name
            };

            console.log(visitorData)

            await this.orm.create('front_desk.visitor', [visitorData]);





            if (this.state.host_selection) {
                this.switchToHost();
            } else {
                this.switchToDrink();
            }

        } catch (error) {
            console.error('RPC Error:', error);
        }
    }

    switchToHome() {
        this.props.switchToHome();
    }

    switchToDrink() {
        this.props.switchToDrink();
    }

    switchToHost() {
        this.props.switchToHost();
    }
}

registry.category('public_components').add('front_desk.info', Info);

