// luas segitiga
function luassegitiga(){

const alas = parseFloat(document.getElementById('alas').value); 
const tinggi = parseFloat(document.getElementById('tinggi').value);

luas = 0.5 * alas * tinggi;

const result = "L= ${luas)";
document.getElementById("luas").textContent = result;

return false;
}

// reset
function myFunction() {
    document.getElementById("Form").reset();
} 

// keliling segitiga
 function kelilingsegitiga()
{
    const s1 = parseFloat(document.getElementById('s1').value); 
    const s2= parseFloat(document.getElementById('s2').value);
    const s3 = parseFloat(document.getElementById('s3').value);
    
    kel = s1 +s2 + s3;
    const result = 'K = ${kel}';
    document.getElementById("hasilkeliling").textContent = result;
    return false
    }

    function keliling() {
    document.getElementById("keliling").reset();
}

