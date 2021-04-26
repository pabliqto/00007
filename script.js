function NWD(){
    var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
    var q;
    while (b != 0){
      q = a;
      a = b;
      b = q % b;
   }
   document.getElementById("wynik").innerHTML = "Wynik: " + a;
  }