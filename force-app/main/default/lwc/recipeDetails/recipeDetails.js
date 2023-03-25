import { LightningElement,api, wire } from 'lwc';
import getRecipeInfo from '@salesforce/apex/FoodInfoHandler.getRecipeInfo';
import { publish,MessageContext } from 'lightning/messageService';
import recipeDetails from '@salesforce/messageChannel/recipeDetails__c';
export default class RecepieDetails extends LightningElement {
    @api name;
    @api image;
    @api recipeId;

    @wire(MessageContext)
    messageContext;

    foodType;
    results;
    ingredients;
    
    getInfoHandler(){
        console.log('Id'+ this.recipeId);
        getRecipeInfo({recipeId : this.recipeId})
        .then((data) => {
                this.results = data; 
                console.log(data); 

                this.getIngredients(data.extendedIngredients);
                
                const message = {
                    ingrdnt : this.ingredients
                };

                publish(this.messageContext,recipeDetails,message);
               
                this.foodType = this.results.vegetarian ? "Vegetarian" : "Non - Vegetarian";
            }
        )
        .catch( (error)=>{
            this.error = error;
        });
    }

    getIngredients = (lstOfIngredients) => {
        lstOfIngredients.forEach( ingredient => {
            this.ingredients.push(ingredient.original);
        });
    }

}