function counterF() {
    var start = document.getElementById('start').value
    var end = document.getElementById('end').value
    var step = document.getElementById('step').value
    start = Number(start)
    end = Number(end)
    step = Number(step)

    if (step <= 0 || !start || !end) {
        alert('Por favor, digite um valor válido')
        return
    }

    if (document.getElementById('resultado')) {
        document.getElementById('resultado').remove()
    }

    var res = document.getElementById('resultado')
    res = document.createElement("p")
    res.setAttribute('id', 'resultado')
    document.getElementById('principal').appendChild(res)

    if (start < end) {
        for (var i = start; i < end; i += step) {
            res.innerHTML += `${i}  \u{1F449} `
        }
    } else {
        for (var i = start; i > end; i -= step) {
            res.innerHTML += `${i}  \u{1F449} `
        }
    }

    res.innerHTML += "\u{1F3C1}"
}