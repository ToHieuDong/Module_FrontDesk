/** @odoo-module **/

import { Component, mount, whenReady, useExternalListener } from "@odoo/owl";
import { registry } from '@web/core/registry';
// import { templates } from "@web/core/assets";

export class Qr extends Component {
    static template = "front_desk.qr";
    setup() {
        this.qrCodeUrl = ''; // Khởi tạo biến chứa URL base64 của mã QR
        this.generateQRCode(); // Gọi phương thức tạo mã QR

        // useExternalListener(window, 'popstate', this.generateQRCode.bind(this));
    }

    generateQRCode() {
        this.qrCodeUrl = encodeURIComponent(window.location.href); // Lấy đường link hiện tại
        this.render();
        // console.log(this.qrCodeUrl)
    }
}

registry.category('public_components').add('front_desk.qr', Qr);


// // Đặt tên template cho component
// Qr.template = "front_desk.qr";

// // Khi DOM đã sẵn sàng, mount component vào phần tử HTML
// whenReady(() => {
//     const element = document.querySelector(".js_qr");
//     if (element) {
//         mount(Qr, element, { templates });
//     }
// });
