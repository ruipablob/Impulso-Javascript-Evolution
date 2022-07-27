function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação (*)\n4 - Divisão real (/)\n5 - Divisao inteira (%)\n6 - Potenciação (**)'))
    if (!operacao || operacao >= 7) {
        alert('Erro - operação inválida\n')
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o primeiro valor: '))
        let n2 = Number(prompt('Insira o segundo valor: '))
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - parâmetros inválidos\n')
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
            }

            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
            }

            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
            }

            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
            }

            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n1 - Sim\n 2 - Não')

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!')
                } else {
                    alert('Digite uma opção válida!')
                    novaOperacao();
                }
            }
        }

        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
        }

        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
        }

        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
        }

        function divisaoReal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
        }

        function divisaoInteira() {
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        }

        function potenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
        }

        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n1 - Sim\n 2 - Não')

            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2) {
                alert('Até mais!')
            } else {
                alert('Digite uma opção válida!')
                novaOperacao();
            }
        }

        switch (operacao) {
            case 1:
                soma();
                novaOperacao();
                break;
            case 2:
                subtracao();
                novaOperacao();
                break;
            case 3:
                multiplicacao();
                novaOperacao();
                break;
            case 4:
                divisaoReal();
                novaOperacao();
                break;
            case 5:
                divisaoInteira();
                novaOperacao();
                break;
            case 6:
                potenciacao();
                novaOperacao();
                break;
        }
    }
}

calculadora();
