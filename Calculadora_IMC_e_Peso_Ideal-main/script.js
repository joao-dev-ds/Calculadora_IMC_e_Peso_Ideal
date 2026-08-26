    function calcular() {
  const inputPeso = document.getElementById('txtpeso');
  const inputAltura = document.getElementById('txtaltura');
  const inputImc = document.getElementById('txtimc');
  const inputPid = document.getElementById('txtpid');
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
    pesoIdeal = (alturaCm - 100) - ((alturaCm - 150) / 4);
  } else {
    pesoIdeal = (alturaCm - 100) - ((alturaCm - 150) / 2.5);
  }

  inputPid.value = pesoIdeal.toFixed(2) + " kg";
}

function limpar() {
  document.getElementById('txtpeso').value = '';
  document.getElementById('txtaltura').value = '';
  document.getElementById('txtimc').value = '';
  document.getElementById('txtpid').value = '';
  
  const rdFem = document.getElementById('rdFeminino');
  if (rdFem) rdFem.checked = true;
}