import { LightningElement,api } from 'lwc';

export default class UserSummary extends LightningElement {
    @api recordId;
    @api objectApiName;
}