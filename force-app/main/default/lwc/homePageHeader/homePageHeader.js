import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class HomePageHeader extends NavigationMixin(LightningElement)  {

    productClickHandler(){
        let componentDefinition = {
            componentDef : "c:productMapping"
        };

        let encodedCompDefinition = btoa(JSON.stringify(componentDefinition));

        this[NavigationMixin.Navigate]({
            type : "comm__namedPage",
            attributes: {
                name: "ProductMapping__c"
            }
        });

    }
}