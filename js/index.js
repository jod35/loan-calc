const calculator_form=document.querySelector('form');

const result_display=document.querySelector('#result');

const clear_button=document.querySelector('#clear_button');




const calculate_button=document.querySelector('#calc_button');

const loan_display=document.querySelector('#loan');
// loan_display.innerHTML="loan Amount: ";

const interest_display=document.querySelector('#interest');
// interest_display.innerHTML="Interest: ";
// result_display.innerHTML="hello";

const principle_display=document.querySelector('#principle-display');
// principle_display.innerHTML="Principle: ";


calculator_form.addEventListener('submit',calculateTheLoan);

function calculateTheLoan(e){

    let principle=document.querySelector('#principle').value;

    let rate=document.querySelector('#rate').value;

    let time=document.querySelector('#time').value;

    console.log(principle);
    console.log(time);
    console.log(rate);


    if (principle< 1000){
        alert("We lend more than 1000");
    }
    
    
    if(rate <0 || rate >100){
        alert("Please enter a percentage");
    }
    
    simple_interest=parseInt(principle * (rate/100) * (time/12));

    amount =parseInt(simple_interest) +parseInt(principle);
    
    interest_display.innerHTML+=`
                    <div class="interest">${simple_interest} </div>`; 

    loan_display.innerHTML+=`
                    <div class="loan">${amount} </div>`; 

    principle_display.innerHTML+=`
                    <div class="principle">${principle} </div>`; 
    
    
    
    clear_button.addEventListener('click',ResetAll);

    function ResetAll(){
        let loan_amount=document.querySelector('.loan');
        let principle_amount=document.querySelector('.principle');
        let interest_rate=document.querySelector('.interest');

    
        loan_display.removeChild(loan_amount);
        principle_display.removeChild(principle_amount);
        interest_display.removeChild(interest_rate);

        

        window.location.reload(true);
        
    
    }


    
    e.preventDefault();
}







