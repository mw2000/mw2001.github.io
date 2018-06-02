
      "use strict";

      var NebPay = require("nebpay");
      var nebPay = new NebPay();

      var contract_address = "n1hb58JDbWBZuXFUCcmGCtWHf3AvLAPhZBg"; //TestNet v0.2
      var vaccineArray = "00000000000000000000000000000000000000";

      console.log(window.location.search.substr(1));

      var addr=window.location.search.substr(1);

      $(document).ready(function(){
        nebPay.simulateCall(contract_address, 0, "getVaccinesByAddress", JSON.stringify([addr]), {
          listener: onDocumentLoad
        });
      });

      document.getElementById('whosRecord').innerHTML = "Wallet: " + addr + '<button class="btn btn-outline-dark" onclick="saveToPdf()" style="float:right">Get PDF</button>';

      function saveToPdf(){
        let doc = new jsPDF('p','pt','a1');
        doc.addHTML(document.body,function() {
          doc.save(addr + '-' + "vaccination-record");
        });
      }

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
                  document.getElementById(''+(j+1)).innerHTML = '<h5><span class="oi oi-check"></span></h5>';
                  // $('#' + (j+1)).addClass('strike');
              }
              else{
                document.getElementById(''+(j+1)).innerHTML = '<h3>-</h3>';
                // $('#' + (j+1)).removeClass('strike');
              }
            }
          }
        }
      }
