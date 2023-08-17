
function conventer(){ 

  var num = document.getElementById("inputNum").value;
  var valinta = document.getElementById("temperature").value;

  if (valinta == "1"){ /*c to-f */
    
    if (num <= -273.15){       
      document.getElementById("muunnettu").innerHTML=("absoluuttinen nollapiste");
    } else if(num == "") { 
      document.getElementById("muunnettu").innerHTML=("kenttä on tyhjä tai ei ole numero");
    } else {
      num = parseFloat(num);
      let lasku = (num * 1.8) + 32 ;
      desimaali(lasku);
    }

  } else if(valinta == "2"){ /*f to-c*/ 
    let lasku = (5/9) * (num - 32) ;
   
    if(lasku <= -273.15) { 
      document.getElementById("muunnettu").innerHTML=("absoluuttinen nollapiste");
    } else if(num == "") {
      document.getElementById("muunnettu").innerHTML=("kenttä on tyhjä tai ei ole numero");
    } else{ 
      desimaali(lasku);
    }
  } 
  
}
function desimaali(lasku){

  if (document.getElementById("2des").checked){
    let a = lasku.toFixed(2);
    document.getElementById("muunnettu").innerHTML=a; 
  } else if(document.getElementById("3des").checked){
    let a = lasku.toFixed(3);
    document.getElementById("muunnettu").innerHTML=a;
  }else{
    let a = lasku.toFixed(1);
    document.getElementById("muunnettu").innerHTML=a;
  }
}