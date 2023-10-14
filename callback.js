// fungsi yang akan di callback
function tampilkanHasil(hasil) {
    console.log(`Hasil penjumlahan adalah ${hasil}`);
}

// fungsi utama
function penjumlahan(a, b, callback) {
    const hasilPenjumlahan = a + b;
    callback(hasilPenjumlahan);
}

penjumlahan(5, 2, tampilkanHasil);