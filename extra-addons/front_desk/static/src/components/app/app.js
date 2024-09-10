/** @odoo-module **/

import { Component, useState  } from "@odoo/owl";
import { registry } from '@web/core/registry';
import {Home} from "../home/home";
import {Info} from "../info/info";
import {Host} from "../host/host";
import {Drink} from "../drink/drink";
import {ThankYou} from "../thankyou/thankyou";
import {DrinkService} from "../drinkservice/drinkservice";


export class App extends Component {
    static template = "front_desk.app";
    static components  = { Home, Info, Host, Drink, DrinkService, ThankYou };
    setup() {
        console.log('Station value: App', this.props);

        const urlParams = new URLSearchParams(window.location.search);
        const langFromURL = urlParams.get('lang') || 'en';

        this.state = useState({
            currentComponent: 'home',
            theme: this.props.theme || 'light',
            visitor_data : {
                'name': '',
                'visitor_company': '',
                'phone': '',
                'drink': '',
                'host': {},
                'check_in': null,
                'duration': 0.0,
                'station': '',
                'status': 'pending',
                'drink_served': false
            },
            translations: translations[langFromURL] || translations.en,
        });

        console.log('Station value: App', this.state.visitor_data);
        console.log('Translations value: ', this.state.translations);

        this.switchToInfo = this.switchToInfo.bind(this);
        this.switchToHome = this.switchToHome.bind(this);
        this.switchToHost = this.switchToHost.bind(this);
        this.switchToDrink = this.switchToDrink.bind(this);
        this.switchToDrinkService = this.switchToDrinkService.bind(this);
        this.switchToThankYou = this.switchToThankYou.bind(this);
    }


    switchToInfo() {
        this.state.currentComponent = 'info';
    }

    switchToHome() {
        this.state.currentComponent = 'home';
    }

    switchToHost() {
        this.state.currentComponent = 'host';
    }

    switchToDrink() {
        this.state.currentComponent = 'drink';
    }

    switchToDrinkService() {
        this.state.currentComponent = 'drinkservice';
    }

    switchToThankYou() {
        this.state.currentComponent = 'thankyou';
    }

}

registry.category('public_components').add('front_desk.app', App);

const translations = {
    en: {
        welcome: "Welcome to",
        checkIn: "Check-in",
        english: "English",
        vietnamese: "Vietnamese",
        french: "French",
        japanese: "Japanese",
        italian: "Italian",
        back: "Back",
        whoAreYou: "Who are you?",
        yourName: "Your Name",
        yourPhoneNumber: "Your Phone Number",
        yourOrganization: "Your Organization",
        example: "e.g. My Company",
        registered: "You have been registered!",
        pleaseHaveASeat: "Please have a seat.",
        wantSomethingToDrink: "Do you want something to drink?",
        yesPlease: "Yes, please",
        noThankYou: "No, thank you",
        howCanWeDelightYou: "How can we delight you?",
        nothingThanks: "Nothing, thanks.",
        thankYouForRegistering: "Thank you for registering!",
        drinkOnTheWay: "Your drink is on the way.",
        close: "Close",
        whoAreYouVisiting: "Who are you visiting?",
        chooseAHost: "Choose a Host",
        nameRequired: "Name cannot be empty.",
        phoneNumberRequired: "Phone number cannot be empty.",
        organizationRequired: "Organization name cannot be empty."
    },
    vi: {
        welcome: "Chào mừng đến",
        checkIn: "Đăng ký",
        english: "Tiếng Anh",
        vietnamese: "Tiếng Việt",
        french: "Tiếng Pháp",
        japanese: "Tiếng Nhật",
        italian: "Tiếng Ý",
        back: "Quay lại",
        whoAreYou: "Bạn là ai?",
        yourName: "Tên của bạn",
        yourPhoneNumber: "Số điện thoại của bạn",
        yourOrganization: "Tổ chức của bạn",
        example: "ví dụ: Công ty của tôi",
        registered: "Bạn đã được đăng ký!",
        pleaseHaveASeat: "Vui lòng ngồi.",
        wantSomethingToDrink: "Bạn có muốn uống gì không?",
        yesPlease: "Có, cảm ơn",
        noThankYou: "Không, cảm ơn",
        howCanWeDelightYou: "Chúng tôi có thể làm bạn hài lòng như thế nào?",
        nothingThanks: "Không, cảm ơn.",
        thankYouForRegistering: "Cảm ơn bạn đã đăng ký!",
        drinkOnTheWay: "Đồ uống của bạn đang trên đường.",
        close: "Đóng",
        whoAreYouVisiting: "Bạn đang thăm ai?",
        chooseAHost: "Chọn một người tiếp đón",
        nameRequired: "Tên không được để trống.",
        phoneNumberRequired: "Số điện thoại không được để trống.",
        organizationRequired: "Tên tổ chức không được để trống."
    },
    fr: {
        welcome: "Bienvenue à",
        checkIn: "Enregistrement",
        english: "Anglais",
        vietnamese: "Vietnamien",
        french: "Français",
        japanese: "Japonais",
        italian: "Italien",
        back: "Retour",
        whoAreYou: "Qui êtes-vous?",
        yourName: "Votre nom",
        yourPhoneNumber: "Votre numéro de téléphone",
        yourOrganization: "Votre organisation",
        example: "par ex. Mon entreprise",
        registered: "Vous avez été enregistré!",
        pleaseHaveASeat: "Veuillez vous asseoir.",
        wantSomethingToDrink: "Voulez-vous quelque chose à boire?",
        yesPlease: "Oui, s'il vous plaît",
        noThankYou: "Non, merci",
        howCanWeDelightYou: "Comment pouvons-nous vous ravir?",
        nothingThanks: "Rien, merci.",
        thankYouForRegistering: "Merci de vous être inscrit!",
        drinkOnTheWay: "Votre boisson est en route.",
        close: "Fermer",
        whoAreYouVisiting: "Qui visitez-vous?",
        chooseAHost: "Choisissez un hôte",
        nameRequired: "Le nom ne peut pas être vide.",
        phoneNumberRequired: "Le numéro de téléphone ne peut pas être vide.",
        organizationRequired: "Le nom de l'organisation ne peut pas être vide."
    },
    ja: {
        welcome: "ようこそ",
        checkIn: "チェックイン",
        english: "英語",
        vietnamese: "ベトナム語",
        french: "フランス語",
        japanese: "日本語",
        italian: "イタリア語",
        back: "戻る",
        whoAreYou: "あなたは誰ですか？",
        yourName: "あなたの名前",
        yourPhoneNumber: "あなたの電話番号",
        yourOrganization: "あなたの組織",
        example: "例: 私の会社",
        registered: "登録されました！",
        pleaseHaveASeat: "お座りください。",
        wantSomethingToDrink: "何か飲みたいですか？",
        yesPlease: "はい、お願いします",
        noThankYou: "いいえ、結構です",
        howCanWeDelightYou: "どのようにお楽しみいただけますか？",
        nothingThanks: "いいえ、結構です。",
        thankYouForRegistering: "ご登録ありがとうございます！",
        drinkOnTheWay: "飲み物が届きます。",
        close: "閉じる",
        whoAreYouVisiting: "誰に会いに来ましたか？",
        chooseAHost: "ホストを選択してください",
        nameRequired: "名前を入力してください。",
        phoneNumberRequired: "電話番号を入力してください。",
        organizationRequired: "組織名を入力してください。"
    },
    it: {
        welcome: "Benvenuto a",
        checkIn: "Registrazione",
        english: "Inglese",
        vietnamese: "Vietnamita",
        french: "Francese",
        japanese: "Giapponese",
        italian: "Italiano",
        back: "Indietro",
        whoAreYou: "Chi sei?",
        yourName: "Il tuo nome",
        yourPhoneNumber: "Il tuo numero di telefono",
        yourOrganization: "La tua organizzazione",
        example: "ad es. La mia azienda",
        registered: "Sei stato registrato!",
        pleaseHaveASeat: "Per favore, siediti.",
        wantSomethingToDrink: "Vuoi qualcosa da bere?",
        yesPlease: "Sì, per favore",
        noThankYou: "No, grazie",
        howCanWeDelightYou: "Come possiamo deliziarti?",
        nothingThanks: "Niente, grazie.",
        thankYouForRegistering: "Grazie per esserti registrato!",
        drinkOnTheWay: "La tua bevanda è in arrivo.",
        close: "Chiudi",
        whoAreYouVisiting: "Chi stai visitando?",
        chooseAHost: "Scegli un ospite",
        nameRequired: "Il nome non può essere vuoto.",
        phoneNumberRequired: "Il numero di telefono non può essere vuoto.",
        organizationRequired: "Il nome dell'organizzazione non può essere vuoto."
    }
};
