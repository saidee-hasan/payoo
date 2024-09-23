document.getElementById("btn-addMoney").addEventListener('click',function(e){
    e.preventDefault();
   const addMoneyInput = document.getElementById("amount-add").value;
   const pinNumber =document.getElementById("pin-number").value;
   console.log(addMoneyInput,pinNumber)


})