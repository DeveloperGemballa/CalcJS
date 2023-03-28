function calcular() {
    // Obter os valores dos campos de entrada
    let principal = document.getElementById("principal").value;
    let juros = document.getElementById("juros").value;
    let periodos = document.getElementById("periodos").value;
  
    // Converter a taxa de juros em decimal
    juros = juros / 100;
  
    // Calcular o valor dos juros
    let valorJuros = principal * juros * periodos;
  
    // Formatar o valor dos juros com duas casas decimais
    valorJuros = valorJuros.toFixed(2);
  
    // Exibir o resultado na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "O valor dos juros é R$ " + valorJuros;
  }
  