
function botao(num){
    var val1Tela = document.calculadora.tela.value
    document.calculadora.tela.value = val1Tela + num;
    valor = document.calculadora.tela.value
    val2Tela = num;
}
function apagar(){
    document.calculadora.tela.value = ""
}
function calcular(){
    var resultado = eval(valor);
    document.calculadora.tela.value = resultado;
}