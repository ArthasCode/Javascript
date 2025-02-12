
function calcular() {
    var num = document.getElementById('num')
    num = Number(num.value)
    if (!num){
        alert('Digite um valor!')
        return
    }
    var form = document.getElementById('form') || document.createElement('select')
    if (!form.id) {
        form.setAttribute('id', 'form')
    }

    for (var i = 1; i <= 10; i++) {
        var opt = document.createElement("option")
        
        opt.setAttribute('value', `opt${num} + ${i}`)
        let existe =[...form.options].some(option => option.value === `opt${num} + ${i}`)
        if (existe) return;
        opt.innerText = `${num} x ${i} = ${num * i}`
        form.appendChild(opt)
    }
    form.size = form.options.length
    if (!document.getElementById('form')) {
        document.getElementById('resultado').appendChild(form)
    }
}
