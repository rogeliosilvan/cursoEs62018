
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

function getMiddle(s)
{
    console.log(s);
    console.log(s.length);
    if((s.length) % 2 === 0)
    {
        return s.charAt(s.length/2 - 1) + s.charAt(s.length/2);
    }
    else
        return s.charAt(parseInt(s.length/2))
}

console.log(getMiddle("test"));

function getCount(str) {
    var vowelsCount = 0;
    let arrVocales =['a','e','i','o','u'];
    
    for(let i=0; i<= str.length; i++ )
      
      arrVocales.some(elemento => elemento === str.charAt(i)) ? vowelsCount++ : vowelsCount = vowelsCount; 
    
    return vowelsCount;
}

console.log(getCount("abracadabra"));