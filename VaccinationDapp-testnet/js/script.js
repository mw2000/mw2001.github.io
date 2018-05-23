"use strict";

var NebPay = require("nebpay");
var nebPay = new NebPay();

var vaccineArray = "00000000000000000000000000000000000000";

String.prototype.replaceAt=function(index, replacement) {
  return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

var contract_address = "n1zMrGx3Gy4f8qkKSfy3bMnkdcC96skk9fz";

$('.list-group-item').dblclick(function(){
  $(this).removeClass('disabled');
  $(this).removeClass('strike');
  var id = $(this).attr('id');
  vaccineArray = vaccineArray.replaceAt(id-1, '0')
});

$('.list-group-item').click(function(){
  $(this).addClass('disabled');
  $(this).addClass('strike');
  var id = $(this).attr('id');
  vaccineArray = vaccineArray.replaceAt(id-1, '1')
});

function saveVaccine() {
    nebPay.call(contract_address, 0, "setVaccines", JSON.stringify([vaccineArray]));
}


$(document).ready(function(){
  nebPay.simulateCall(contract_address, 0, "getVaccines", null, {
    listener: onDocumentLoad
  });
});

function onDocumentLoad(resp) {
  if(typeof(resp)==='string' && resp.startsWith("Error")) {
        throw new Error(resp)
        alert(resp);
  }
  else {

    var parsedVaccineArray = JSON.parse(resp.result);
    if(parsedVaccineArray !== null){
      vaccineArray = parsedVaccineArray;
      for(var j=0; j<36; j++){
        if(parsedVaccineArray.charAt(j) == '1'){
            $('#' + (j+1)).addClass('disabled');
            $('#' + (j+1)).addClass('strike');
        }
        else{
          $('#' + (j+1)).removeClass('disabled');
          $('#' + (j+1)).removeClass('strike');
        }
      }
    }
  }

}

//to check if the extension is installed
//if the extension is installed, var "webExtensionWallet" will be injected in to web page
if(typeof(webExtensionWallet) === "undefined"){
    alert ("Extension wallet is not installed, redirecting you to more information.");
    window.location =  "https://github.com/ChengOrangeJu/WebExtensionWallet";
}

