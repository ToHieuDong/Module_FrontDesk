/** @odoo-module **/

import { Component, mount, whenReady, useState } from "@odoo/owl";
import { templates } from "@web/core/assets";
import { registry } from '@web/core/registry';

export class Language extends Component {
    static template = "front_desk.language";
    setup() {
        super.setup();

        // Lấy giá trị của tham số lang từ URL
        const urlParams = new URLSearchParams(window.location.search);
        const langFromURL = urlParams.get('lang') || 'en'; // Giá trị mặc định nếu không có lang

        this.state = useState({
            selectedLang: langFromURL
        });

        this.state.translations = this.props.translations;
        console.log(this.props.translations)
    }

    onLanguageChange(ev) {
        const selectedLanguage = ev.target.value;
        const urlParams = new URLSearchParams(window.location.search);

        // Xóa tham số 'lang' cũ nếu đã tồn tại
        urlParams.delete('lang');

        // Thêm tham số 'lang' mới
        urlParams.set('lang', selectedLanguage);

        // Tạo URL mới với tham số đã được cập nhật
        const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
        window.location.href = newUrl;
    }
}

registry.category('public_components').add('front_desk.language', Language);

// Đặt tên template cho component
// Language.template = "front_desk.language";

// Khi DOM đã sẵn sàng, mount component vào phần tử HTML
// whenReady(() => {
//     const element = document.querySelector(".js_language");
//     if (element) {
//         mount(Language, element, { templates });
//     }
// });
