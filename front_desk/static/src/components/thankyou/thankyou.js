/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { registry } from '@web/core/registry';
import { useService } from "@web/core/utils/hooks";


export class ThankYou extends Component {
    static template = "front_desk.thankyou";

    setup() {
        this.rpc = useService("rpc");
        this.state = useState({
            kiosk_url: this.props.kiosk_url || '',
            countdown: 10,
        });

        this.startTimer();
    }

    startTimer() {
        // Tạo interval mỗi giây
        this.timer = setInterval(() => {
            if (this.state.countdown > 0) {
                this.state.countdown--; // Giảm số giây của countdown mỗi giây
            } else {
                console.log("Timeout reached, calling saveVisitor");
                this.saveVisitor(); // Gọi hàm saveVisitor khi countdown = 0
                clearInterval(this.timer); // Dừng interval
            }
        }, 1000); // Cập nhật mỗi giây
    }

    async createVisitor(visitor) {
        console.log(visitor)
        try {
            const result = await this.rpc('/front_desk/visitor/create', {visitor});
            if (result.status === 'success') {
                console.log('Visitor created successfully:', result.visitor_id);
            } else {
                console.error('Error creating visitor:', result.message);
            }
        } catch (error) {
            console.error('RPC call failed:', error);
        }
    }

    async saveVisitor() {
        try {
            console.log("ngu ngu" + this.props.visitor_data.drink)
            await this.createVisitor(this.props.visitor_data);

            window.location.href = this.state.kiosk_url;
            // this.switchToHome();

        } catch (error) {
            console.error('Error:', error);
        }
    }


    switchToHome() {
        this.props.switchToHome();
    }

}

registry.category('public_components').add('front_desk.thankyou', ThankYou);

