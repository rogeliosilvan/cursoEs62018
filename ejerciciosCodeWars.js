
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }

//console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

function getMiddle(s)
{
    if((s.length) % 2 === 0)
    {
        return s.charAt(s.length/2 - 1) + s.charAt(s.length/2);
    }
    else
        return s.charAt(parseInt(s.length/2))
}

//console.log(getMiddle("test"));

function getCount(str) {
    var vowelsCount = 0;
    let arrVocales =['a','e','i','o','u'];
    
    for(let i=0; i<= str.length; i++ )
      
      arrVocales.some(elemento => elemento === str.charAt(i)) ? vowelsCount++ : vowelsCount = vowelsCount; 
    
    return vowelsCount;
}

//console.log(getCount("abracadabra"));


// function printerError(s) {
//     return `${s.length - s.match(/[a-m]/g).length}/${s.length}`;
// }

const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

//console.log(`Printed rate: ${printerError('aaaxbbbbyyhwawiwjjjwwm')}`);


// return masked string

const maskify = cc => {
    let ccMasked ="";
    for(let i=0; i<= cc.length; i++)
    {   ccMasked += i<cc.length-4 ? "#" : cc.charAt(i);}
    return ccMasked;

    // return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
};


//console.log(maskify('4556364607935616'));

const countBits = n => {
    if(n<0)
        return -1;

    return descomponerEntero(n).filter(number => number === 1).length;
};

const descomponerEntero = numInt => {
    let str = [];
    let dividendo = numInt;
    if(dividendo == 1 ) str.push(1);
    else
    {
        while(dividendo>=2)
        {   
            str.push(parseInt(dividendo%2));
            dividendo = dividendo/2;
        }
        str.push(parseInt(dividendo));
        
    }

    // console.log(str);
    return str.reverse();
}

// countBits = n => n.toString(2).split('0').join('').length;

// console.log(descomponerEntero('1234'));
// console.log(countBits('1234'));

// const disemvowel = s => `${s.replace(/[aeiou]/gi,"")}`;
const disemvowel = s => `${s.replace(/[aeiou]/g,"").split(' ').join('')}`;
//console.log(disemvowel("This website is for losers LOL!"));

