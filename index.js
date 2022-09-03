function inserir(num) {
    if (document.querySelector('.telav').innerHTML == 0 && num != '.' && (document.querySelector('.telav').innerHTML).length != 2) {
        document.querySelector('.telav').innerHTML = ''
    }

    document.querySelector('.telav').innerHTML += num


    if (document.querySelector('.telah').innerHTML == 0 && num != '.' && (document.querySelector('.telah').innerHTML).length != 2 ) {
        document.querySelector('.telah').innerHTML = ''
    }

    document.querySelector('.telah').innerHTML += num
}

function voltar() {
    valor = document.querySelector('.telav').innerHTML
    document.querySelector('.telav').innerHTML = valor.substring(0, valor.length - 1)

    valor = document.querySelector('.telah').innerHTML
    document.querySelector('.telah').innerHTML = valor.substring(0, valor.length - 1)
}

function limpar() {
    document.querySelector('.telav').innerHTML = 0
    document.querySelector('.telah').innerHTML = 0
}


function calcular() {
    operacaov = document.querySelector('.telav').innerHTML
    document.querySelector('.telav').innerHTML = eval(operacaov)

    operacaoh = document.querySelector('.telah').innerHTML
    document.querySelector('.telah').innerHTML = eval(operacaoh)
}