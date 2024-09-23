document.getElementById("btn-addMoney").addEventListener('click',function(e){
    e.preventDefault();
   const addMoneyInput = document.getElementById("amount-add").value;
   const pinNumber =document.getElementById("pin-number").value;
   console.log(addMoneyInput,pinNumber)
if(pinNumber === '1234'){
    const balance = document.getElementById("balance").innerText;
     const newBalance = parseFloat( balance) + parseFloat(addMoneyInput) ;

     document.getElementById("balance").innerText = newBalance
}else{
    alert("Failed to add money")
}

})

document.getElementById("cash-btn").addEventListener("click",function(e){
    e.preventDefault;
    const cashInput = document.getElementById("cash-input").value;
    const balance = document.getElementById("balance").innerText;
    document.getElementById("balance").innerText = parseFloat(balance) - parseFloat(cashInput);
  
  
})
