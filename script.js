

let selected = "tempeature";  /**selected type- */
let inputCelsius = document.getElementById('celsius'); /** */


 

function conventer(value){
  if (selected == "Celsius"){ /*celsius to- */
    valNum = parseFloat(valNum);
    document.getElementById("muunnettu").innerHTML=(valNum*1.8)+32;

  } else { /*fahrenheit to-*/
    document.getElementById("muunnettu").innerHTML=(valNum - 32 / 1.8);  /**lasku tarkista */
  }
}

/*this works */
function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("output").innerHTML=(valNum*1.8)+32;
}