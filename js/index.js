const calculator_form=document.querySelector('form');

const result_display=document.querySelector('#result');



const calculate_button=document.querySelector('#calc_button');

const loan_display=document.querySelector('#loan');
loan_display.innerHTML="loan Amount: ";

const interest_display=document.querySelector('#interest');
interest_display.innerHTML="Interest: ";
// result_display.innerHTML="hello";

const principle_display=document.querySelector('#principle-display');
principle_display.innerHTML="Principle: ";


calculator_form.addEventListener('submit',calculateTheLoan);

function calculateTheLoan(e){

    const principle=document.querySelector('#principle').value;

    const rate=document.querySelector('#rate').value;

    const time=document.querySelector('#time').value;

    console.log(principle);
    console.log(time);
    console.log(rate);


    if (principle< 1000){
        alert("We lend more than 1000");
    }
    
    
    if(rate <0 || rate >100){
        alert("Please enter a percentage");
    }
    
    simple_interest=parseInt(principle) * (rate/100) * parseFloat(time/12);

    amount =simple_interest +parseInt(principle);
    
    interest_display.innerHTML+=`<br> 
                    <div class="amount">${simple_interest} </div>`; 

    loan_display.innerHTML+=`<br> 
                    <div class="amount">${amount} </div>`; 

    principle_display.innerHTML+=`<br> 
                    <div class="amount">${principle} </div>`; 


    
    e.preventDefault();
}




