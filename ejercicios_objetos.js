function stringToObj() {
    
    let cadena = "Sergio Zamarro, 485648, Adrian Fuentes, 904847";
    let arrCadena = cadena.split(",");
    
        
    console.log(arrCadena.filter(arrCadena => isNaN(arrCadena)));
    console.log(arrCadena.filter(arrCadena => !isNaN(arrCadena)));

    // for(let count=0; count< names.length; count++)
    // {
    //     users.push({
    //         username: names[count],
    //         contact: Number(contacts[count]);
    //     })
    // }
}