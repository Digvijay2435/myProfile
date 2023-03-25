import { LightningElement,wire,api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import TECHNICAL_SKILLS from '@salesforce/schema/Portfolio__c.Technical_Skills__c';
import TOOLS_SOFTWARE from '@salesforce/schema/Portfolio__c.Tools_and_Software__c';
import VERSION_CONTROL from '@salesforce/schema/Portfolio__c.Version_Control__c';
export default class SkillsTab extends LightningElement {
    
    technicalSkills =[];
    versionControl =[];
    softwareAndTools =[];
    
    @api recordId
    @wire(getRecord ,
        {   recordId : '$recordId',
            fields : [TECHNICAL_SKILLS, TOOLS_SOFTWARE,VERSION_CONTROL]
        }
    )sikllsHandler({data, error}){
        if(data){
            this.formatSkills(data);
        }
        if(error){
            console.log("Error" + error);
        }
    }

    formatSkills(data){
        const {Technical_Skills__c, Tools_and_Software__c, Version_Control__c } = data.fields
        this.technicalSkills = Technical_Skills__c ? Technical_Skills__c.value.split(','):[];
        this.versionControl = Technical_Skills__c ? Version_Control__c.value.split(','):[];
        this.softwareAndTools = Technical_Skills__c ? Tools_and_Software__c.value.split(','):[];
    }

}