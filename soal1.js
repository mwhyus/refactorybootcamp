// Sebuah angka 1234567 Buatlah output :

// 1000000
// 200000
// 30000
// 4000
// 500
// 60
// 7

let number = [1,2,3,4,5,6,7]
let number1 = [...number]

for (let i=0 ;i < number1.length ; i++ ) {
      
      number.shift()

      let nol =''
      for (let l = 0 ; l < number.length ; l++) {

         nol = nol + '0'
    }
    console.log(number1[i] + nol)
}
