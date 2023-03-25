import { LightningElement,api,wire } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
export default class WorkExperienceTab extends LightningElement {

workExperiences = [];
result;
@api recordId;

@wire(getRelatedListRecords , {
    parentRecordId : '$recordId',
    relatedListId  : 'Work_Experiences__r',
    fields : 
        [
            'Work_Experience__c.Company_Name__c',
            'Work_Experience__c.Description__c',
            'Work_Experience__c.Start_Date__c',
            'Work_Experience__c.End_Date__c', 
            'Work_Experience__c.Present_Employer__c',
            'Work_Experience__c.Role__c',
            'Work_Experience__c.Work_Location__c'
        ] 
    })workExpHandler({data,error}){
        if(data){
            this.formatWorkExpData(data);
        }
        if(error){
            console.error(error);
        }
    }


    formatWorkExpData(data){
        this.workExperiences = [...data.records].reverse().map(item => {
            let id = item.id;
            const {Company_Name__c, Description__c,Start_Date__c,End_Date__c,Present_Employer__c,Role__c,Work_Location__c} = item.fields;
            let companyName = this.getValue(Company_Name__c);
            let description = this.getValue(Description__c);
            let startDate = this.getValue(Start_Date__c);
            let endDate = this.getValue(End_Date__c);
            let presentEmployer = this.getValue(Present_Employer__c);
            let role = this.getValue(Role__c);
            let location = this.getValue(Work_Location__c);

            return {id,companyName,description,startDate,endDate,presentEmployer,role,location};
        });
        console.log('@@@WorkExpList'+ JSON.stringify(this.workExperiences));
    }

    getValue(data){
        return data && (data.displayValue || data.value)
    }
}