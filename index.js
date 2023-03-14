const buku={
    "nama": "Laut Bercerita",
    "harga": "105000",
    "diskon": "20",
    "ready":true
}

function Beli({nama, harga, diskon, ready}, tax){
    const discount = harga *(diskon/100);
    const setelahDiskon = harga - discount;
    const pajak = setelahDiskon * (tax/100);
    const total = setelahDiskon + pajak;

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


    return 0;


}