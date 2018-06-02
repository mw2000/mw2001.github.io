"use strict";

var NebPay = require("nebpay");
var nebPay = new NebPay();

var vaccineArray = "00000000000000000000000000000000000000";

// var nasme= 'n1kzpjFz4Xcn49bL8ey2RsvsaAZ1HCcEFug';

String.prototype.replaceAt=function(index, replacement) {
  return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

var contract_address = "n1hb58JDbWBZuXFUCcmGCtWHf3AvLAPhZBg";

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

$('#demo-modal-3').on('shown.bs.modal', function (e) {
  $('#blurEnabler').addClass('transparentBox');
});

$('#demo-modal-3').on('hidden.bs.modal', function (e) {
  $('#blurEnabler').removeClass('transparentBox');
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

$('#launchButton').click(function(){
  nebPay.simulateCall(contract_address, 0, "getVaccines", null, {
    listener: onDocumentLoad
  });
});

//to check if the extension is installed
//if the extension is installed, var "webExtensionWallet" will be injected in to web page
if(typeof(webExtensionWallet) === "undefined"){
    $('#alertModal').modal('show');
    $('#blurEnabler').addClass('transparentBox');
    $("#launchButton").addClass('disabled');
    $('#launchButton').attr('data-toggle', "")
    $('#launchButton').attr('data-target', "")
}

$('#alertModal').on('hidden.bs.modal', function (e) {
  $('#blurEnabler').removeClass('transparentBox');
});


$('#address').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    window.location = location.protocol + '//' + location.host + location.pathname + 'view_record.html?' + $(this).val();
  }
});
// window.location = location.protocol + '//' + location.host + location.pathname + 'results.html?' + resp.txhash;
