let human = { 
    name: 'Rogelio', 
    saludar: function () { 

        console.log("Hi!!!");
    },

    adios: function () {

        console.log("GoodBye!!!");
    },
    
    cambiarNombre: function (paramName) {

        this.name = paramName;
    },    
}

console.log(human.name);
human.saludar();
human.adios();
human.cambiarNombre('Roge');
console.log(human.name);