document.getElementById("login-btn").addEventListener('click',function(e){
e.preventDefault();

const phoneNumber = document.getElementById('phone-number').value;
const pinNumber = document.getElementById('pin-number').value;
console.log(phoneNumber,pinNumber)

if(phoneNumber === '5' && pinNumber === '1234'){
   window.location.href="/home.html"
}else{
    alert("Woring phone number or pin")
}

})

