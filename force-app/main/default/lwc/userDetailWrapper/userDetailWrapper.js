import { LightningElement,api } from 'lwc';

export default class UserDetailWrapper extends LightningElement {
    @api obejctApiName;
    @api recordId;
    @api badges;
    @api points;
    @api trails;
    @api rank;
}