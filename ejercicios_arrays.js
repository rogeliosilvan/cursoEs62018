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


function printListaWhile() {
    let companies = ["Amazon", "Apple", "Netflix", "Facebook", "Google"]
    let i=0;
    while (i <= companies.length-1)
    {    
        console.log(companies[i]);
        i++;
    }
}

function printListaFor() {
    let cities = ["Washington", "Cupertino", "Los Gatos", "Menlo Park", "Mountain View"]
    for (let i = 0; i <= cities.length - 1; i++) {
        console.log(cities[i]);
    }
}

function printLista2Arrays() {
    let companies = ["Amazon", "Apple", "Netflix", "Facebook", "Google"]
    let cities = ["Washington", "Cupertino", "Los Gatos", "Menlo Park", "Mountain View"]
    let nuevaArray = companies.concat(cities);
    for (let i = 0; i <= nuevaArray.length - 1; i++) {
        console.log(nuevaArray[i]);
    }
}

/*concat arrays ES6*/
function printLista2ArraysES6() {
    let companies = ["Amazon", "Apple", "Netflix", "Facebook", "Google"]
    let cities = ["Washington", "Cupertino", "Los Gatos", "Menlo Park", "Mountain View"]

    console.log(...companies, ...cities);
}

function printListaFor2Arrays() {
    let companies = ["Amazon", "Apple", "Netflix", "Facebook", "Google"]
    let cities = ["Washington", "Cupertino", "Los Gatos", "Menlo Park", "Mountain View"]
    for (let i = 0; i <= cities.length - 1; i++) {
        console.log(companies[i]+"-"+cities[i]);
        /*ES6*/
        //console.log(`${companies[i]} - ${cities[i]}`);
    }
}


function deleteLastElement2Arrays() {
    let companies = ["Amazon", "Apple", "Netflix", "Facebook", "Google"]
    let cities = ["Washington", "Cupertino", "Los Gatos", "Menlo Park", "Mountain View"]
    console.log(companies.length);
    companies.pop();
    cities.pop();
    console.log(companies.length);
    for (let i = 0; i <= companies.length - 1; i++) {
        console.log(companies[i]);
    }

    for (let i = 0; i <= cities.length - 1; i++) {
        console.log(cities[i]);
    }    
}

function printListCompaniesA() {

    let companies = ["Amazon", "Apple", "Netflix", "Facebook", "Google"]
    // for (let i = 0; i <= companies.length - 1; i++) {
    //     if (companies[i].charAt(0, 1) === 'A' || companies[i].charAt(0, 1) === 'a')
    //         console.log(companies[i]);
    // }
    return companies.filter(company => company.charAt(0) === 'A')
    
}

function printListCitiesA() {

    let cities = ["Washington", "Cupertino", "Los Gatos", "Menlo Park", "Mountain View"]
    return cities.filter(city => city.length >= 10)

}

function printStatusChat() {
    let nuevoObj = {};

    let users = [{
        username: 'David',
        status: 'online',
        lastActivity: 10
    }, {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    }, {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }]

    let online =  users.filter(user => user.status === 'online' && user.lastActivity <= 10);
    let offline =  users.filter(user =>user.status === 'offline');
    let away = users.filter(user => user.status === 'online' && user.lastActivity > 10);

    nuevoObj.away = online.map(function (online) { return online.username });
    nuevoObj.offline = offline.map(function (offline) { return offline.username });
    nuevoObj.online = away.map(function (away) { return away.username });

    console.log(nuevoObj);

}


printListaWhile();
printListaFor();
printLista2Arrays();
printLista2ArraysES6();
printListaFor2Arrays();
deleteLastElement2Arrays();
printListCompaniesA();
printListCitiesA();

printStatusChat();

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