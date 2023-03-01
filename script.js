var resultado;
function verificarPalindromo(str) {
    
    if (str == str.split('').reverse().join('')) {
        resultado = 'É palíndromo';
    } else {
        resultado = 'Não é palíndromo';
    }
}
console.log(resultado)
document.getElementById("palavra").addEventListener("change", verificarPalindromo);
document.getElementById("resultado").value = resultado;