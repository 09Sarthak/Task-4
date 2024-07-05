var qrCode = document.getElementById('qrcode');
var userInput = document.getElementById('input');
var genBtn = document.getElementById('qr_generate');
genBtn.addEventListener("click",()=>{
  var url = `https://api.qrserver.com/v1/create-qr-code/?size=300&300&data=${userInput.value}`;
  qrCode.src= url;
});
