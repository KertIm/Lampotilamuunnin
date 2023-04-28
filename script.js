

let selected = "tempeature";  /**selected type- */
let inputCelsius = document.getElementById('celsius'); /** */

/*var type = document.getElementById("input").value; *ssays  null */

/*var firstc = document.getElementById("tempeature").options[0].text;
var secondf = document.getElementById("tempeature").options[1].text;
*/
const desi = ['1des', '2des', '3des']; /**radio options */


/*function myFunction() {
  var x = document.getElementById("tempeature");
  var i = x.selectedIndex;
  
  if(i == 0){
    conventer();
    document.getElementById("input").innerHTML = x.options[i].text;
  } else {

  }
}* */



function conventer(valNum){ /**press button always-17 */

var x = document.getElementById("tempeature");
var txt = "";

/*var x = document.getElementById("mySelect");
  var i = x.selectedIndex;
  document.getElementById("demo").innerHTML = x.options[i].text;
  */
  if (txt == "Celsius"){ /*celsius to- *//**type or selected var */
    valNum = parseFloat(valNum);
    document.getElementById("muunnettu").innerHTML=(valNum * 1.8) + 32;


    

  } else { /*fahrenheit to-*/ /**always this  */
    document.getElementById("muunnettu").innerHTML=(5/9) * (valNum - 32);  /**lasku tarkista 98%right*/
  }
}

/*this works */
function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("output").innerHTML=(valNum*1.8)+32;
}