function luassegitiga(){

const alas = parseFloat(document.getElementById('alas').value); 
const tinggi = parseFloat(document.getElementById('tinggi').value);

luas = 0.5 * alas * tinggi;

const result = "L= ${luas)";
document.getElementById("luassegi").textContent = result;

return false;
}

function myFunction() {
    document.getElementById("myForm").reset();
} 

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
    document.getElementById("mykeliling").reset();
    }

// function luas(){

//     var s1= document.getElementById('s1').value; 
//     var s2= document.getElementById('s2').value;
//     var s3= document.getElementById('s3').value;

//     var a = document.getElementById('a').value;
//     var t= document.getElementById('t').value;
    
//     luas = a*t/2
    
//     document.getElementById('luas ').innerHTML = luas;
// }
// function kel(){
    
//     var s1 = +document.getElementById('s1').value;
//     var s2 = +document.getElementById('s2').value; 
//     var s3 = +document.getElementById('s3').value;

//     var a = document.getElementById('a').value; 
//     var t = document.getElementById('t').value;
    
//     kel = s1+s2+s3
    
//     document.getElementById('kel').innerHTML = kel;
// }