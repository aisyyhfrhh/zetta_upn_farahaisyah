const buku={
    "nama": "Laut Bercerita",
    "harga": "105000",
    "diskon": "20",
    "ready":true,
    "stock": "20",
    "order": "1" 
}

function Beli({nama, harga, diskon, ready, stock, order }, tax){
    const discount = harga *(diskon/100);
    const setelahDiskon = harga - discount;
    const pajak = setelahDiskon * (tax/100);
    const total = setelahDiskon + pajak;
    let i = stock;
    let n = order;

    while (i > 0) {
        totalPrice = taxTotal + totalPrice;
        bookBuyed = bookBuyed + 1;
        i = i - 1;
        n = n - 1;

        if (i == 0 || n == 0) {
            break;
        }
    }

    console.log('Judul          : ', nama);
    console.log('Harga          : ', harga);
    if (ready === true) {
        console.log('Ready       :  Yes');
    } else {
        console.log('Ready       :  No');
    }
    console.log('Diskon         : ', discount);
    console.log('Setelah Diskon : ', setelahDiskon);
    console.log('Pajak          : ', tax);
    console.log('Total          : ', total);

    if (i == 0 && n > 0) {
        console.log('that book is already out of stock!');
        console.log('sisa buku tidak terbeli adalah ', n, ' pcs');

    } else {
        console.log('semua pesanan terbeli :D!');
        console.log('sisa stock buku adalah ', i, ' pcs');
    }


    return 0;


}


Beli(buku, 10);