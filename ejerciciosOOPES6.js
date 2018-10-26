

  class God {
    constructor(isGod) {
      this._isGod = isGod;
    }
  
    isGod() {
        return this._isGod;
    }
  }


class Humano extends God{

    static sayHello (){
        console.log(`Hola!!!!`);
    }
    constructor(nombre, edad, isGod=false) {
        
        super(isGod);
        this._nombre = nombre;
        this._edad = edad;
        this.n = Symbol();
        this[this.n] = 'No trabaja';
    }
    changeJob(newJob) {
        this[this.n] = newJob;
    }

    set job  (job)  { this[this.n] = job               }
    get job  ()       { return this[this.n]                }
  }




    console.log(Humano.sayHello());
    var humanRoge = new Humano("Roge", 38,true);
    var humanEnriqueIV = new Humano("EnriqueIV", 98,false);
    var diosQueBien = new God(true);

    console.log(humanRoge.job);
    console.log(humanEnriqueIV.job);
    humanRoge.changeJob("Developer");
    humanEnriqueIV.changeJob("Rey");
    console.log(humanRoge.job);
    console.log(humanEnriqueIV.job);

    console.log(humanRoge.isGod());
    console.log(humanEnriqueIV.isGod());
    console.log(diosQueBien.isGod());

    humanRoge.changeJob = "panadero";
    console.log(humanRoge.job);