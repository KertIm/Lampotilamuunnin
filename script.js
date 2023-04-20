
var tempeature = nameValue; /*test */
var selected = oForm.elements["tempeature"].selectedIndex;  /**selected type- */
let inputCelsius = document.getElementById('celsius'); /** */


 

function conventer(valnum){
  if (selected == Celsius){ /*celsius */
    valNum = parseFloat(valNum);
    document.getElementById("muunnettu").innerHTML=(valNum*1.8)+32;

  } else{ /*fahrenheit*/

  }
}

/*this works */
function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("output").innerHTML=(valNum*1.8)+32;
}