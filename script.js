

function verificarPalindromo(str) {
    var resultado;
    if (str == str.split('').reverse().join('')) {
        resultado = 'É palíndromo';
    } else {
        resultado = 'Não é palíndromo';
    }
    document.getElementById("palavra").addEventListener("change", verificarPalindromo);
    document.getElementById("resultado").value = resultado;
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
        novaLinha.appendChild(textNode);
        lista.insertBefore(novaLinha, items[index]);
        document.getElementById("novoItem").value = "";
    }
}
document.getElementById("add-item").addEventListener("click", addItem);
document.getElementById("palavra").addEventListener("change", verificarPalindromo);
