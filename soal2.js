// Diketahui ada array dengan data sebagai berikut :

// {1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3}

// 1. Bagi data tersebut menjadi 3 kelompok
// 2. Tampilkan data setiap kelompok secara terurut dari besar ke kecil
// 3. Hitung total setiap kelompok data,
// 4. Hitung rata rata setiap kelompok data,
// 5. Carilah nilai tertinggi dan terendah setiap kelompok data

let data = [1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3]

//1. Bagi 3 kelompok
// JumlahTK = Jumlah Tiap kelompok

kelompok = []
data1 = []
sisa  = data.length % 3
jumlahTK = Math.floor(data.length / 3)
indeks = 0
for (let k=1 ; k<=3 ; k++ ){
    kelompok=[]
    if (k == 3 ) {jumlahTK = jumlahTK + 2}
    for (let l=1 ; l <= jumlahTK ; l++) {
        kelompok.push(data[indeks])     
        indeks = indeks+1    
    }

    data1.push(kelompok)
}
console.log('hasil ',data1)

//2. sortir nilai
for (let k = 0 ; k < data1.length ; k++ ){
     data1[k].sort((a, b) => a - b)
     console.log(data1[k])
}
console.log('hasil no. 2 = ',data1)

//3. total nilai
for (let k = 0 ; k < data1.length ; k++ ){
    let total = data1[k].reduce((a,b)=>a+b)
    console.log(total)
}
console.log('hasil  no. 3 = ',data1)

//4. nilai rata-rata
for (let k = 0 ; k < data1.length ; k++ ){
    let rata = data1[k].reduce((a,b)=>a+b) / data1[k].length
    console.log(rata)
} 

//5. Min & Max
for (let k=0 ; k < data1.length ; k++ ){
    let min = data1[k].shift()
    let max = data1[k].pop()    
    console.log(min, '-', max)
}
