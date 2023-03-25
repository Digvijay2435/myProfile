import { LightningElement,wire,api} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
export default class TabsWrapper extends LightningElement {
    @api recordId;
    @api objectApiName;
    
}