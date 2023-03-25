import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {

    height;
    weight;
    result;

    changeHandler(event){
        const {name, value} = event.target;
        if(name === "height"){
            this.height = value;
        }
        
        if(name === "weight"){
            this.weight = value;
        }
    }

    submitHandler(event){
        event.preventDefault();
        this.calculate();
    }

    calculate(){
        let height = Number(this.height) /100;
        let bmi = Number(this.weight) / (height * height);
        this.result = Number(bmi.toFixed(2));
    }
}