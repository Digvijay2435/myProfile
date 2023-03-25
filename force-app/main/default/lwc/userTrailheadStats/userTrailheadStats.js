import { LightningElement,api } from 'lwc';
import ProjectAssets from '@salesforce/resourceUrl/ProjectAssets'
export default class UserTrailheadStats extends LightningElement {
    
    @api badges;
    @api points;
    @api trails;
    
    @api rank;
    rankImage;

    renderedCallback(){
        if(this.rank){
            this.rankImage = `${ProjectAssets}/ProjectImages/${this.rank}.png`;
        }
    }



}