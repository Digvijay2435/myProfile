import { LightningElement,wire,api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SALESFORCE_CERTS from '@salesforce/schema/Portfolio__c.Salesforce_CErtification__c';
import OTHER_CERTS from '@salesforce/schema/Portfolio__c.Other_Certification__c';
import ProjectAssests from '@salesforce/resourceUrl/ProjectAssets';
export default class CertificationTab extends LightningElement {

    sfCertData = [];
    otherCertsData = [] ;  
    sfCertImg = `${ProjectAssests}/ProjectImages/salesforceCerts.png`;
    otherCertImg = `${ProjectAssests}/ProjectImages/otherCerts.png`;

    @api recordId;

    @wire(getRecord , {
        recordId : '$recordId',
        fields : [
            SALESFORCE_CERTS,OTHER_CERTS
        ]

    })certDataHandler({data,error}){
        if(data){
            console.log('@@@data'+JSON.stringify(data));
            this.formatCertDataHandler(data);
        }
        if(error){
            console.error(error);
        }
    }
    
    formatCertDataHandler(data){
        const {Salesforce_CErtification__c, Other_Certification__c} = data.fields;

        this.sfCertData = Salesforce_CErtification__c ? [...Salesforce_CErtification__c.value.split(';')].reverse() : [];
        this.otherCertsData = Other_Certification__c ? Other_Certification__c.value.split(',') : [];
    }

}