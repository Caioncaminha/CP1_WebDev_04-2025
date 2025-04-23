//Proposta 2
//IMC = peso / (altura * altura)
const inputPeso = document.getElementById('peso');
const inputAltura = document.getElementById('altura');
const botaoVerificar = document.getElementById('imc');
const resultadoTexto = document.getElementById('resultadoImc');
const imc = inputPeso.value / (inputAltura.value * inputAltura.value);

botaoVerificar.addEventListener('click', function () {
    let imctotal = parseFloat(imc);
    if (!isNaN(imctotal)) {
        if (imctotal <= 18.5) {
            resultadoTexto.textContent = 'Você está abaixo do peso ideal';
            resultadoTexto.style.color = 'black';
        }
        else if (imctotal > 18.5 && imctotal < 24.9) {
            resultadoTexto.textContent = 'Peso Normal';
            resultadoTexto.style.color = 'black';
        }
        else if (imctotal > 25.0 && imctotal < 29.9) {
            resultadoTexto.textContent = 'Sobrepeso';
            resultadoTexto.style.color = 'black';
        }
        else if (imctotal > 30.0 && imctotal < 34.9) {
            resultadoTexto.textContent = 'Obesidade grau 1';
            resultadoTexto.style.color = 'black';
        }
    } else {
        resultadoTexto.textContent = 'Obesidade grau 2';
        resultadoTexto.style.color = 'black';
    }
});