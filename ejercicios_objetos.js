function stringToObj() {
    
    let cadena = "Sergio Zamarro, 485648, Adrian Fuentes, 904847";
    let arrCadena = cadena.split(",");
    
        
    console.log(arrCadena.filter(arrCadena => isNaN(arrCadena)));
    console.log(arrCadena.filter(arrCadena => !isNaN(arrCadena)));

    for(let count=0; count< names.length; count++)
    {
        users.push({
            username: names[count],
            contact: Number(contacts[count]);
        })
    }

    return users;
}

let peopleString = "485648, Sergio Zamarro, Adrian Fuentes, 904847"

function getUsers(peopleString) {
    let dataSet = peopleString.split(',').map(element => element.trim())
    let names = dataSet.filter(data => isNaN(data))
    let contacts = dataSet.filter(data => !isNaN(data))
    let users = []
    for (let count = 0; count < names.length; count++) {
        users.push({
            username: names[count],
            contact: Number(contacts[count])
        })
    }
    return users

}


function isInArray(arrParam, valorParam) {
    return arrParam.includes(valorParam);
    // console.log(arrParam.some(arrParam => arrParam === valorParam));
}

isInArray([1, 2, 3], false) //false
isInArray([1, 'Sergio', 3], false) //false
isInArray([1, 'Sergio', false], false) //true




function saludar(param) {
    
    let idiomas ={
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'        
    };
    return idiomas[param] || idiomas.english; 
    // if (!param)
    //     console.log(idiomas["english"]);
    
    // for (let i in idiomas) {
    //     if (i === param)
    //     {
    //         console.log(idiomas[i]);
    //         break;
    //     }
    // }    
}
