const calculator_form=document.querySelector('form');

const result_display=document.querySelector('#result');

const clear_button=document.querySelector('#clear_button');

const table_body=document.querySelector('#table-body');

const calculate_button=document.querySelector('#calc_button');

const loan_display=document.querySelector('#loan');

const interest_display=document.querySelector('#interest');

const principle_display=document.querySelector('#principle-display');


const monthly_display=document.querySelector('#per-month');

calculator_form.addEventListener('submit',calculateTheLoan);


//load window

window.onload=function retrieveData(){
    calc_records=JSON.parse(localStorage.getItem('records'));

    

    for(let i of calc_records){
        table_body.innerHTML+=`<tr>
                                    <td>${i.date}</td>
                                    <td>${i.principle}</td>
                                    <td>${i.rate}</td>
                                    <td>${i.time}</td>
                                </tr>`
        
    }
    
    
}

//calculate the loan
function calculateTheLoan(e){

    let principle=document.querySelector('#principle').value;

    let rate=document.querySelector('#rate').value;

    let time=document.querySelector('#time').value;

    if (principle< 1000){
        alert("We lend more than 1000");
    }
    
    
    if(rate <0 || rate >100){
        alert("Please enter a percentage");
    }
    
    simple_interest=parseInt(principle * (rate/100) * (time/12));

    amount =parseInt(simple_interest) +parseInt(principle);


    monthly_payment=parseInt(amount / 12);
    
    interest_display.innerHTML+=`
                    <div class="interest">${simple_interest} </div>`; 

    loan_display.innerHTML+=`
                    <div class="loan">${amount} </div>`; 

    principle_display.innerHTML+=`
                    <div class="principle">${principle} </div>`; 
    

    monthly_display.innerHTML+=`
                    <div class="principle">${monthly_payment} </div>`;

    //create a new object to be stored

    today= new Date();

    console.log(today.getFullYear());
    
    let new_record={
        'date':`${today.getDay()}/${today.getDate()}/${today.getFullYear()} ,${today.getHours()}:${today.getMinutes()}`,
        'principle':principle,
        'rate':rate,
        'time':time,
        
    }
    
    
    
    if (localStorage.getItem('records')==null){
        let records=[];
        records.push(new_record);
        localStorage.setItem('records',JSON.stringify(records));
        // alert("Record Saved");
    }

    else{
        let records=JSON.parse(localStorage.getItem('records'));

        records.push(new_record);

        //reset the storage

        localStorage.setItem('records',JSON.stringify(records));
    }
    
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







