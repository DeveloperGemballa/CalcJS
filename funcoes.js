function calcular() {
    // Valores das contas
    var conta1 = parseFloat(document.getElementById("conta1").value);
    var conta2 = parseFloat(document.getElementById("conta2").value);
    var conta3 = parseFloat(document.getElementById("conta3").value);
    // Salário e impostos
    var salario = document.getElementById("salarioBruto").value;
    var desconto = document.getElementById("taxaDesconto").value;
    // Gastos mensais usuais
    var combustivel = 4.75;
    var trajeto = parseFloat(document.getElementById("distanciaTrajeto").value);
    var mediaVeiculo = parseFloat(document.getElementById("mediaVeiculo").value);

        // Salário sem impostos
        var salarioFinal = parseFloat(salario) - (parseFloat(desconto) * parseFloat(salario) / 100);
        // Salário sem contas
        var contaTotal = conta1 + conta2 + conta3;
        salarioFinal = salarioFinal - contaTotal;
        // Salário sem gastos
        var litros = trajeto / mediaVeiculo;
        var gastosCombustivel = ((litros * 22) * combustivel);

        salarioFinal = salarioFinal - gastosCombustivel;
        if(isNaN(salarioFinal))
        {
            alert("Por favor, verifique seus dados e tente novamente");
            document.getElementById("salarioLimpo").value = "----";
            document.getElementById("totalContas").value = "----";
            document.getElementById("totalGastos").value = "----";

            document.getElementById("botaoCalcularSalario").value = "Tente novamente com valores reais (números)";
        }
        else
        {
            // Apresentação valor nos inputs destinados
            document.getElementById("salarioLimpo").value = salarioFinal;
            document.getElementById("totalContas").value = contaTotal;
            document.getElementById("totalGastos").value = gastosCombustivel;

            document.getElementById("botaoCalcularSalario").value = "Seu salário restante: R$"+salarioFinal;
        }
}

function Clique(){
    var key = document.getElementById("calculadora").style.display;
    switch (key) {
        case "none":
            document.getElementById("calculadora").style.display = "block";
            break;
        case "block":
            document.getElementById("calculadora").style.display = "none";
            break;
    
        default:
            alert("default");
            break;
    }
}

function marcar(id) {
    elements = document.getElementsByClassName("menu-selecionado");
    if(typeof elements[0] != "undefined")
    {
        elements[0].classList.remove("menu-selecionado");
    }
    document.getElementById(id).classList.add("menu-selecionado");
}