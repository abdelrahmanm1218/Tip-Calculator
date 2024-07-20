let bill = document.getElementById('bill');
let noOfPeople = document.getElementById('no-of-people');
let percentageArray = document.querySelectorAll('.percentage div');
let percentageDiv = document.getElementById('percentage')

let customInput = document.getElementById('custom');
let form = document.getElementById("form");
var percent = 0;
let reset = document.getElementById("reset-btn");



percentageArray.forEach((element)=>{
    element.addEventListener("click",()=>{
        percentageArray.forEach((ele)=>{ //remove active class
            ele.classList.remove('active');
        })
        element.classList.toggle("active"); 
        if (element.classList.contains('custom')){
            element.classList.add("active"); 
            console.log(element.children)
                percentageDiv.dataset['value'] = element.value;
        }else {
            percent = element.innerHTML;
            percentageDiv.dataset['value'] = percent
        }
    })
    
});

let btn = document.getElementById('btn');
let tipAmountRes = document.getElementById("tip-amount-result");
let totalAmountRes = document.getElementById("total-amount-result");

btn.onclick = ()=>{
    if(bill.value=="" || noOfPeople.value=="" || percentageDiv.dataset['value']==""){
        //empty fields do nothing throw error border
        console.log("error, Empty");
        bill.classList.add("error");
        noOfPeople.classList.add("error");
    }else {
        // proccess the data and calculate  
        bill.classList.remove("error");
        noOfPeople.classList.remove("error");
        var billAmount = parseInt(bill.value);
        var people = parseInt(noOfPeople.value);
        var p = parseInt(percentageDiv.dataset['value']);
        calculateTip(billAmount,p, people)
    }
    
}



function calculateTip(bill, tipPercentage, people){
    let grandTotal = bill + (bill * (tipPercentage/100));
    let tipAmountTotal = bill * (tipPercentage/100);
    let tipPerPerson = tipAmountTotal / people;
    let billPerPerson = grandTotal / people;

    tipAmountRes.innerHTML = `$${tipPerPerson.toFixed(2)}`;
    totalAmountRes.innerHTML = `$${billPerPerson.toFixed(2)}`;
    reset.classList.add("active");
}

//reset fields
reset.onclick = () => {
    if (tipAmountRes.innerHTML != "" || totalAmountRes.innerHTML!=""){
        tipAmountRes.innerHTML ="$0.00";
        totalAmountRes.innerHTML="$0.00";
        reset.classList.remove("active");
        bill.value ="";
        noOfPeople.value="";
        percentageArray.forEach((element)=>{
            element.classList.remove("active");
        });
    }
}


