import { LightningElement } from 'lwc';
import ProjectAssets from '@salesforce/resourceUrl/ProjectAssets'

export default class PersonalProjectTab extends LightningElement {
    bmiCalculatorImg = `${ProjectAssets}/ProjectImages/bmiApp.png`;

    projects = [
         {
            "name"  : "BMI Calculator App",
            "img"   : this.bmiCalculatorImg,
            "link"  : "https://digvijay-3-dev-ed.develop.my.site.com/myProfile/bmi-calculator"
        }
    ];
}