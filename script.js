document.getElementById('calcular').addEventListener('click', function () {
    const capital = document.getElementById('capital').value
    const juros = (document.getElementById('juros').value) / 100
    const rendimento = document.getElementById('rendimento').value

    const total = capital * (1 + juros) ** rendimento

    document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2)).replace(".", ",")


})