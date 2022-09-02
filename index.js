
        function inserir(num) {
            if (document.querySelector('#tela').innerHTML == 0) {
                document.querySelector('#tela').innerHTML = ''
            }

            document.querySelector('#tela').innerHTML += num
        }

        function voltar() {
            valor = document.querySelector('#tela').innerHTML
            document.querySelector('#tela').innerHTML = valor.substring(0, valor.length - 1)
        }

        function limpar() {
            document.querySelector('#tela').innerHTML = 0
        }


        function calcular() {
            operacao = document.querySelector('#tela').innerHTML
            document.querySelector('#tela').innerHTML = eval(operacao)
        }
