var cadena1 = "aaaaahhsggsbbaaab";

function changeCadena(param1)
{
    var nuevoValor="b";
    var nuevaCadena ="";
    console.log(param1.length);
    for (var i = 0; i < param1.length-1; i++) {
        // nuevaCadena = param1.replace(/b/g, nuevoValor);
        nuevaCadena = param1.replace(/a/g, nuevoValor);
        
    }
    console.log(nuevaCadena);
}


function borrarChar(param1)
{
    var nuevaCadena1 = param1.substr(1,param1.length-2);
    console.log(nuevaCadena1);
}


function buscarRaton(param1)
{
    var ini = param1.indexOf("C");
    var fin = param1.indexOf("m");
    var dif = fin - ini;
    
    console.log(ini);
    console.log(fin);
    console.log(dif);
    if( dif > 4 )
        return false;
    else
        return true;
}




function buscarPalabra(param1)
{
    var arr_param = param1.split(" ");
    var cadenaFin = "";
    for (var i = 0; i < arr_param.length-1; i++) {
     
        console.log(arr_param[i]);
        if(cadenaFin.indexOf(arr_param[i])== -1) cadenaFin += arr_param[i] + " ";
        
    }
    
    return cadenaFin;
    
}

function InvertirCadena(param1)
{
    var arr_param = param1.split(" ");
    var cadenaFin = "";
    for (var j = 0; j < arr_param.length-1; j++) {

        
        var palabra = arr_param[j];
        console.log(arr_param[j]);

        for (var i = palabra.length-1; i >= 0 ; i--) {
        
            // console.log(palabra.charAt(i));
            cadenaFin += palabra[i];
        }

        cadenaFin += " ";
    }

    return cadenaFin;
}

        

function printLanguajes() {

    let languages = [
        {
          name: 'python',
          score: 60
        },
        {
          name: 'javascript',
          score: 50
        },
        {
          name: 'ruby',
          score: 80
        }
      ]  
    
    return languages.filter( condicion => condicion.score >= 60).sort((anterior, siguiente) => {
        if(anterior.score > siguiente.score) return false;
        return true;
    }); 

}    


changeCadena("aaaaahhsggsbbaaab");
borrarChar("hola");

buscarRaton("C.m");
buscarRaton("C..m");
buscarRaton("C...m");
buscarRaton("C....m");
buscarRaton("...C....m");
buscarPalabra("barcelona praga barcelona ibiza madrid ibiza madrid");

InvertirCadena("hola que tal estas esto zumbao");

printLanguajes();