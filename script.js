function verificarPrimo() {
    var entrada = parseInt(document.getElementById("entrada-primo").value);
    if (entrada <= 1) {
        alert("Por favor, digite um número inteiro positivo válido.");
    } else {
        var primo = true;
        for (var i = 2; i <= Math.sqrt(entrada); i++) {
            if (entrada % i == 0) {
                primo = false;
                break;
            }
        }
        if (primo) {
            alert("O número é primo!");
        } else {
            alert("O número não é primo.");
        }
    }
}

function verificarTipo() {
    var entrada = document.getElementById("entrada-tipo").value;
    var tipo = typeof entrada;
    if (confirm("O tipo do dado informado é " + tipo + ". Deseja verificar o tipo de outro dado?")) {
        document.getElementById("mensagem").innerHTML = "";
    } else {
        document.getElementById("mensagem").innerHTML = "Obrigado por visitar esta página.";
    }
}

function verificarParImpar() {
    var entrada = parseInt(document.getElementById("entrada-parimpar").value);
    if (entrada <= 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
    } else {
        if (entrada % 2 == 0) {
            alert("O número é par.");
        } else {
            alert("O número é ímpar.");
        }
    }
}


function verificarPalindromo() {
    let str = document.getElementById("palavra").value;
    if (str == str.split('').reverse().join('')) {
        alert('É palíndromo');
    } else {
        alert('Não é palíndromo');
    }
}

function calcularFatorial() {
    var entrada = parseInt(document.getElementById("entrada").value);
    if (isNaN(entrada) || entrada < 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
    } else {
        var fatorial = 1;
        for (var i = 2; i <= entrada; i++) {
            fatorial *= i;
        }
        alert("O fatorial de " + entrada + " é " + fatorial + ".");
    }
}



function addItem() {
    if (document.getElementById("novoItem").value != '') {
        let item = document.getElementById("novoItem").value;
        let lista = document.getElementById("list");
        let items = lista.getElementsByTagName("li");
        let index = 0;
        for (let i = 0; i < items.length; i++) {
            if (item.toLowerCase() < items[i].innerHTML.toLowerCase()) {
                index = i;
                break;
            }
            index++;
        }
        let novaLinha = document.createElement("li");
        let textNode = document.createTextNode(item);
        novaLinha.classList.add('list-group-item');
        novaLinha.appendChild(textNode);
        lista.insertBefore(novaLinha, items[index]);
        document.getElementById("novoItem").value = "";
    }
}

function Carro(marca, modelo, ano, cor, kilometragem, valor_fipe) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.kilometragem = kilometragem;
    this.valor_fipe = valor_fipe;
    this.anosUtilizacao = function () {
        return new Date().getFullYear() - this.ano;
    };
    this.valorMercado = function () {
        if (this.kilometragem <= 30000) {
            return this.valor_fipe * 1.1;
        } else if (this.kilometragem > 30000 && this.kilometragem <= 50000) {
            return this.valor_fipe;
        } else {
            return this.valor_fipe * 0.9;
        }
    };
}
function consultarCarro() {
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;
    var ano = parseInt(document.getElementById("ano").value);
    var cor = document.getElementById("cor").value;
    var kilometragem = parseInt(document.getElementById("kilometragem").value);
    var valor_fipe = parseFloat(document.getElementById("valor_fipe").value);
    var carro = new Carro(marca, modelo, ano, cor, kilometragem, valor_fipe);
    var anosUtilizacao = carro.anosUtilizacao();
    var valorMercado = carro.valorMercado();
    alert("O carro tem " + anosUtilizacao + " anos de utilização e seu valor de mercado é R$" + valorMercado.toFixed(2));
}




if (document.getElementById("add-item")) {
    document.getElementById("add-item").addEventListener("click", addItem);
}
if (document.getElementById("btn-verificar-palindromo")) {
    document.getElementById("btn-verificar-palindromo").addEventListener("click", verificarPalindromo);
}
