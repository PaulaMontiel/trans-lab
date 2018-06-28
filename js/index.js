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