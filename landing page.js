function klik(){
    var harga1 = document.getElementById("harga1").value="20000";
    var jum1 = document.getElementById("jum1").value;
    var hasil = harga1 * jum1;
    var harga2 = document.getElementById("harga2").value="25000";
    var jum2 = document.getElementById("jum2").value;
    var hasil2 = harga2 * jum2;
    var hasil3 = hasil + hasil2;
    var diskon = document.getElementById("diskon").value;
    var hargatotal = hasil3 - (hasil3 * (diskon / 100));
    document.getElementById("total").value = hargatotal;
}


function CL(){
    window.scrollTo({
        top : 0,
        behavior : "smooth"})
}

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.navbar ul');

menuToggle.addEventListener('click',function(){
    nav.classList.toggle('slide')
});