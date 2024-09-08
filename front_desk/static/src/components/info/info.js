/** @odoo-module **/

import { Component, useState  } from "@odoo/owl";
import { registry } from '@web/core/registry';
import { useService } from "@web/core/utils/hooks";


export class Info extends Component {
    static template = "front_desk.info";
    setup() {
        this.rpc = useService("rpc");
        // console.log('Station value:', this.props.visitor_data);
        this.state = useState({
            host_selection: this.props.host_selection || false,
            offer_drinks: this.props.offer_drinks || false,
            phone_required: this.props.phone_required || "none",
            organization_required: this.props.organization_required || "none",
            name: "",
            phone: "",
            email: "",
            company: "",
            error:"",
        });
        this.state.visitorData = this.props.visitor_data;


    }


    async saveVisitorInfo() {
        try {
            console.log(this.state.name)
            if (this.state.name==="") {
                this.state.error="Tên không được để trống.";
                return;
            } else if (this.state.phone_required==="required" && this.state.phone==="") {
                this.state.error="Số điện thoại không được để trống.";
                return;
            } else if (this.state.organization_required==="required" && this.state.company==="") {
                this.state.error="Tên tổ chức không được để trống.";
                return;
            }






            const formatDateToOdooFormat = (date) => {
                // Tính toán số phút chênh lệch giữa UTC và giờ địa phương
                const timezoneOffset = date.getTimezoneOffset() * 60000;
                // Cộng thêm 7 giờ để chuyển đổi sang UTC+7
                const utc7Date = new Date(date.getTime() + timezoneOffset);
                // Lấy các thành phần ngày, giờ, phút, giây và định dạng lại
                const year = utc7Date.getFullYear();
                const month = String(utc7Date.getMonth() + 1).padStart(2, '0');
                const day = String(utc7Date.getDate()).padStart(2, '0');
                const hours = String(utc7Date.getHours()).padStart(2, '0');
                const minutes = String(utc7Date.getMinutes()).padStart(2, '0');
                const seconds = String(utc7Date.getSeconds()).padStart(2, '0');
                return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            }
            const now = new Date();

            this.props.visitor_data.name=this.state.name;
            this.props.visitor_data.phone=this.state.phone;
            this.props.visitor_data.visitor_company=this.state.company;
            this.props.visitor_data.check_in=formatDateToOdooFormat(now);
            this.props.visitor_data.station=this.props.name;
            this.props.visitor_data.duration=1;
            this.props.visitor_data.status="checked_in";
            this.props.visitor_data.drink_served=false;

            // await this.createVisitor(visitorData);



            if (this.state.host_selection) {
                this.switchToHost();
            } else if (this.state.offer_drinks) {
                this.switchToDrink();
            } else {
                this.switchToThankYou();
            }

        } catch (error) {
            console.error('Error:', error);
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

    switchToThankYou() {
        this.props.switchToThankYou();
    }
}

registry.category('public_components').add('front_desk.info', Info);


// const visitorData = {
//     name: "name",
//     phone: this.state.phone,
//     visitor_company: this.state.company,
//     check_in: formatDateToOdooFormat(now),
//     station: this.props.name,
//     drink: 'Cola',
//     host: '',
//     duration: 1,
//     status: 'checked_in',
//     drink_served: false
// };


// async saveVisitorInfo() {
//     try {
//         const formatDateToOdooFormat = (date) => {
//             // Tính toán số phút chênh lệch giữa UTC và giờ địa phương
//             const timezoneOffset = date.getTimezoneOffset() * 60000;
//
//             // Cộng thêm 7 giờ để chuyển đổi sang UTC+7
//             const utc7Date = new Date(date.getTime() + timezoneOffset);
//
//             // Lấy các thành phần ngày, giờ, phút, giây và định dạng lại
//             const year = utc7Date.getFullYear();
//             const month = String(utc7Date.getMonth() + 1).padStart(2, '0');
//             const day = String(utc7Date.getDate()).padStart(2, '0');
//             const hours = String(utc7Date.getHours()).padStart(2, '0');
//             const minutes = String(utc7Date.getMinutes()).padStart(2, '0');
//             const seconds = String(utc7Date.getSeconds()).padStart(2, '0');
//
//             return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
//         }
//
//         const now = new Date();
//         const visitorData = {
//             name: this.state.name,
//             phone: this.state.phone,
//             visitor_company: this.state.company,
//             duration: 1,
//             check_in: formatDateToOdooFormat(now),
//             station: this.props.name
//         };
//
//         console.log(visitorData)
//
//         await this.orm.create('front_desk.visitor', [visitorData]);
//
//
//
//
//
//         if (this.state.host_selection) {
//             this.switchToHost();
//         } else {
//             this.switchToDrink();
//         }
//
//     } catch (error) {
//         console.error('RPC Error:', error);
//     }
// }

