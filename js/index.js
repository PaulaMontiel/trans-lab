$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
 
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}

document.getElementById('btnConsultarSaldo').addEventListener('click', cargarAPI)
document.getElementById('btnConsultarSaldo').addEventListener('click', saveCard)

function cargarAPI() {
    const numberCardBip = document.getElementById('numberCard').value;
    document.getElementById('numberCard').value = '';


    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numberCardBip}`)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            const dataBip = Object.values(data)

            let amountBip = dataBip[2];
            document.getElementById("dataSaldo").innerHTML = `Saldo total  </br> ${amountBip}`;
        })

    .then(function saveCard() {
        let card = document.getElementById("saveCard");
        let option = document.createElement("option");
        option.text = numberCardBip;
        card.add(option);
    })