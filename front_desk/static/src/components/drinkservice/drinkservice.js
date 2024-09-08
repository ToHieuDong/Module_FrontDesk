/** @odoo-module **/

import { Component, useState  } from "@odoo/owl";
import { registry } from '@web/core/registry';
import { useService } from "@web/core/utils/hooks";


export class DrinkService extends Component {
    static template = "front_desk.drinkservice";
    setup() {
        this.rpc = useService("rpc");
        this.state = useState({
            dri: this.props.drinks,
            drinks: [],
            // drink: {},
        });

        this.getDrink()
        console.log(this.state.drinks)
    }

    async getDrink() {
        try {
            const result = await this.rpc('/front_desk/getDrink');
            if (result.status === 'success') {
                console.log('Visitor created successfully:', result.drink);
                this.state.drinks = result.drink;
                this.state.drinks = this.state.drinks.filter((drink, index) => this.state.dri.includes(index+1));
                console.log(this.state.drinks)
            } else {
                console.error('Error get Host:', result.message);
            }
        } catch (error) {
            console.error('RPC call failed:', error);
        }
    }

    async saveVisitorDrink(event) {
        try {
            this.props.visitor_data.drink = event.currentTarget.dataset.name;
            // this.state.drink=this.props.drinks[1].drink_name;
            // console.log(this.state)

            // this.props.visitor_data.drink=this.state.drink;
            // console.log(this.props.visitor_data.drink);
            // await this.createVisitor(this.props.visitor_data);

            this.switchToThankYou();

        } catch (error) {
            console.error('Error:', error);
        }
    }

    switchToThankYou() {
        this.props.switchToThankYou();
    }
}

registry.category('public_components').add('front_desk.drinkservice', DrinkService);

