import { LightningElement,api } from 'lwc';

export default class BasicUserInfo extends LightningElement {
    @api recordId;
    @api objectApiName;

    downloadHandler(){
        window.open("https://github.com/Digvijay2435/myResume/raw/main/Digvijay's%20Resume%20SFDC%20Dev.pdf", "_blank");
    }
}