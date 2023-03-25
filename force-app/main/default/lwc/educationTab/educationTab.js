import { LightningElement,wire,api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

const columns = [
    { label: 'Education', fieldName: 'name' },
    { label: 'Institution Name', fieldName: 'institutionName' },
    { label: 'Passing Year', fieldName: 'passingYear' },
];

export default class EducationTab extends LightningElement {

    educationalDetails = [];
    columns = columns;

    @api recordId;

    @wire(getRelatedListRecords, {
        parentRecordId : '$recordId',
        relatedListId : 'Educations__r',
        fields : [
            'Education__c.Education_Name__c',
            'Education__c.Institution_Name__c',
            'Education__c.Passing_Year__c'
        ]
    })educationHandler({data,error}){
        if(data){
                this.formatEducationalDetails(data);
            }
        if(error){
            console.error(error);
        }
    }

    formatEducationalDetails(data){
        this.educationalDetails = [...data.records].reverse().map(item => {
            let id = item.id;
            const {Education_Name__c, Institution_Name__c, Passing_Year__c} = item.fields;
            let name = this.getValue(Education_Name__c);
            let institutionName = this.getValue(Institution_Name__c);
            let passingYear = this.getValue(Passing_Year__c);
            return {id,name,institutionName,passingYear};
        });
        console.log('@@@@->'+JSON.stringify(this.educationalDetails));
    }

    getValue(data){
        return data && (data.value || data.displayValue);
    }
}