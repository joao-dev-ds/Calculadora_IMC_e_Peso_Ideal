function calcular() {
  const inputPeso = document.getElementById('txtpeso');
  const inputAltura = document.getElementById('txtaltura');
  const inputImc = document.getElementById('txtimc');
  const inputPid = document.getElementById('txtpid');
  const inputClassificacao = document.getElementById('txtclassificacao');
  const radioSexo = document.querySelector('input[name="sexo"]:checked');

  const peso = parseFloat(inputPeso.value.replace(',', '.'));
  const altura = parseFloat(inputAltura.value.replace(',', '.'));

  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    alert("Por favor, preencha o peso e a altura com valores válidos!");
    return;
  }

  const imc = peso / (altura * altura);
  inputImc.value = imc.toFixed(2);
  
  const sexo = radioSexo ? radioSexo.value : 'F';
  const alturaCm = altura * 100;
  let pesoIdeal = 0;

  if (sexo === 'M') {
    pesoIdeal = 52 + (0.75 * (alturaCm - 152.4));
  } else {
    pesoIdeal = 52 + (0.67 * (alturaCm - 152.4));
  }

  inputPid.value = pesoIdeal.toFixed(2) + " kg";

  let classificacao = "";

  if (sexo === 'M') {
    if (imc < 20) {
      classificacao = "Abaixo do peso";
    } else if (imc < 25) {
      classificacao = "Peso normal";
    } else if (imc < 30) {
      classificacao = "Obesidade leve";
    } else if (imc < 40) {
      classificacao = "Obesidade moderada";
    } else {
      classificacao = "Obesidade Mórbida";
    }
  } else {
    if (imc < 19) {
      classificacao = "Abaixo do peso";
    } else if (imc < 24) {
      classificacao = "Peso normal";
    } else if (imc < 30) {
      classificacao = "Obesidade leve";
    } else if (imc < 40) {
      classificacao = "Obesidade moderada";
    } else {
      classificacao = "Obesidade Mórbida";
    }
  }

  inputClassificacao.value = classificacao;
}

function limpar() {
  document.getElementById('txtpeso').value = '';
  document.getElementById('txtaltura').value = '';
  document.getElementById('txtimc').value = '';
  document.getElementById('txtpid').value = '';
  document.getElementById('txtclassificacao').value = '';
  
  const radios = document.querySelectorAll('input[name="sexo"]');
  radios.forEach(r => r.checked = false);
}