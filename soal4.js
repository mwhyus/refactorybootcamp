let angka = 46
let test  = Math.floor(Math.random() * 100)+1 
let langkah=1   

while ( test !== angka )    {
    test  = Math.floor(Math.random() * 100)+1 
    langkah=langkah+1
}

console.log('total langkah : ',langkah)