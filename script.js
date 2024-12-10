// STAMAPRE UNA LISTA DI NUMERI DA 1 A 100 //

for (let i = 1; i <= 100; i++) {

// PER I MULTIPLI DI 3 E 5 STAMPARE FIZZBUZZ //
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`FIZZBUZZ`)

// PER I  MULTIPLI DI 3 STAMPARE FIZZ //

    } else if (i % 3 === 0) {
        console.log(`FIZZ`)

// PER I MULTIPLI DI 5 STAMPARE BUZZ //

    } else if (i % 5 === 0) {
        console.log(`BUZZ`)

// PER STAMAPRE TUTTO IL RESTO //
        
    } else {
        console.log(i)
    }
}


