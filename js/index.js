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

    amount =parseInt(simple_interest +principle);
    
    interest_display.innerHTML+`<br> 
                    <div class="amount">${simple_interest} </div>`; 

    loan_display.innerHTML+`<br> 
                    <div class="amount">${amount} </div>`; 

    principle_display.innerHTML+=`<br> 
                    <div class="amount">${principle} </div>`; 
    
    
    
    clear_button.addEventListener('click',ResetAll);

    function ResetAll(){
        const amount=document.querySelectorAll('.amount');
        for(var i=0; i<amount.length; i++){
            amount[i].style.display="none";
        }
        principle=0;
        rate=0;
        time=0;

        simple_interest=0;
    
    }


    
    e.preventDefault();
}







