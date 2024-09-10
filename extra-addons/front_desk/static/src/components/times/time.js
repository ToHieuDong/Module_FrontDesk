/** @odoo-module **/

import {Component, useState, mount, whenReady} from "@odoo/owl";
// import { templates } from "@web/core/assets";
import { registry } from '@web/core/registry';
export class Time extends Component {
    static template = "front_desk.time";
    setup() {
        // Khởi tạo state với giá trị thời gian hiện tại
        this.state = useState({value: this.getCurrentTime()});

        // Cập nhật đồng hồ mỗi giây
        this.updateTime = this.updateTime.bind(this);
        this.timer = setInterval(this.updateTime, 1000);
    }

    // Hàm lấy thời gian hiện tại theo định dạng 'hh:mm:ss'
    getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Chuyển đổi từ định dạng 24 giờ sang 12 giờ
        hours = hours % 12;
        hours = hours ? hours : 12; // Giờ 0 phải là 12
        const strTime = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
        return strTime;
    }

    // Hàm cập nhật giá trị thời gian trong state
    updateTime() {
        this.state.value = this.getCurrentTime();
    }

    // Hủy timer khi component bị hủy
    willUnmount() {
        clearInterval(this.timer);
    }
}

registry.category('public_components').add('front_desk.time', Time);



// Time.template = "front_desk.time";

// whenReady(() => {
//     const element = document.querySelector(".js_time")
//     if (element) {
//         mount(Time, element, {templates})
//     }
// })