function calcular() {
    // Obter os valores dos campos de entrada
    let principal = document.getElementById("principal").value;
    let juros = document.getElementById("juros").value;
    let periodos = document.getElementById("periodos").value;
  
    // Converter a taxa de juros em decimal
    juros = juros / 100;
  
    // Calcular o valor total a ser pago
    let valorTotal = principal * (1 + juros) ** periodos;
  
    // Formatar o valor total com duas casas decimais
    valorTotal = valorTotal.toFixed(2);
  
    // Exibir o resultado na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "O valor total a ser pago é R$ " + valorTotal;
  }
  