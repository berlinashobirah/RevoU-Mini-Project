var luas;
var keliling;
var alas;
var tinggi;
var sisiMiring;
function hitung() {
 alas = parseFloat(document.getElementById("ipt_alas").value);
 tinggi = parseFloat(document.getElementById("ipt_tinggi").value);
 luas = alas * tinggi;
 sisiMiring = 3/4 * alas;
 keliling = 2 * (alas + sisiMiring);
 document.getElementById('opt_luas').value = luas;
 document.getElementById('opt_keliling').value = keliling;
}

// reset
function myFunction() {
    document.getElementById("alas").reset();
    document.getElementById("tinggi").reset();
} 