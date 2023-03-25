import { LightningElement,api,wire } from 'lwc';
import ProjectAssets from '@salesforce/resourceUrl/ProjectAssets';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import FULLNAME from '@salesforce/schema/Portfolio__c.Name';
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.Company_Name__c';
import DESIGNATIOM from '@salesforce/schema/Portfolio__c.Designation__c';
import CITY from '@salesforce/schema/Portfolio__c.City__c';
import COUNTRY from '@salesforce/schema/Portfolio__c.Country__c';

export default class ProfileSummary extends LightningElement {
    @api recordId //='a002w00000a7IgxAAE';
    userPic = `${ProjectAssets}/ProjectImages/UserPic.png` ;
    trailheadPic = `${ProjectAssets}/ProjectImages/trailhead.jpg`;
    linkedinPic = `${ProjectAssets}/ProjectImages/linkedin.png`;

    @api trailheadUrl// = 'https://trailblazer.me/id/vijay2435';
    @api linkedinUrl //= 'https://www.linkedin.com/in/digvijay-singh-chauhan9';


    @wire(getRecord ,{ recordId: '$recordId', fields : [FULLNAME,COMPANY_NAME,DESIGNATIOM,CITY,COUNTRY] })
    portoflioData;

    get fullName(){
        return getFieldValue(this.portoflioData.data , FULLNAME);
    }

    get companyName(){
        return getFieldValue(this.portoflioData.data , COMPANY_NAME);
    }

    get designation(){
        return getFieldValue(this.portoflioData.data , DESIGNATIOM);
    }

    get city(){
        return getFieldValue(this.portoflioData.data , CITY);
    } 

    get country(){
        return getFieldValue(this.portoflioData.data, COUNTRY);
    }
}