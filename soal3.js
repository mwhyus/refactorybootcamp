// Diketahui terdapat sebuah text dengan kalimat berikut:

const teks = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.']

// Dari kalimat tersebut hitunglah setiap karakter (dari A sampai Z) terdapat berapa kali pengulangan, contoh output :
// karakter A sebanyak 10 kali
// karakter B sebanyak 3 kali
// karakter Z sebanyak 2 kali

// Dari kalimat tersebut pada setiap karakter geserlah sebanyak 5 karakter, contoh abc menjadi fgh

let alphabet = ['a','b' ,'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


//1
for (let k=0;k<alphabet.length;k++){
    idxs=[]
    let idx = teks[0].indexOf(alphabet[k],0) 
    //console.log(idx)
    while (idx !== -1) {
        idxs.push(idx)
        idx = teks[0].indexOf('a',idx+1)

    }

    console.log(`karakter ${alphabet[k]} sebanyak ${idxs.length} kali`)
}

//2
console.log(teks[0].length)

let teksP=[]
for (let k=0;k<teks[0].length;k++){
    if ( !(',. ').includes(teks[0][k])) {

        let idx = alphabet.indexOf(teks[0][k],0) 
        let idxP = idx +5 
        testP = alphabet[idxP]
        teksP.push(testP)    
       
    } else {teksP.push(teks[0][k])}
}
console.log(teksP.join(''))

