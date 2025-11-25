const matrizGastos = [
    ["Alimentação",0],
    ["Transporte",0],
    ["Lazer",0],
    ["Outros",0],
    ["Total",0],
]
//funções utilitárias
const obterElemento = (id) => document.getElementById(id);
const valorNegativo = (valor) => valor < 0;
const somaValor = (total, valor) => total + valor;
const limparCampos = () => obterElemento('valor').value = '';
const formatoMoeda = (valor) => valor.toFixed(2);
//obter valores de formulário
const obterValorInformado = () => parseFloat(obterElemento("valor").value);
const oberCategoriaInformado = () => obterElemento("categoria").value;
//obter categoria da matriz
const obterCategoria = (matriz,nomeCategoria) => matriz.find((item) => item [0] === nomeCategoria);

const atualizarValorCategoria = (categoria,valor) => categoria[1] = somaValor(categoria[1], valor);

const atualizarInteface = () => {
    
    matrizGastos.forEach(([nome, valor]) =>{
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R$ ${valor}`
    
    })
}  





function adicionarGasto(){
    const valorInformado = obterValorInformado();
    const categoriaInformada = oberCategoriaInformado();

    if(valorNegativo(valorInformado)){
        alert("Valor inválido. O valor não pode ser negativo")
        return;
    }
    const categoria = obterCategoria(matrizGastos, categoriaInformada)
    const total = obterCategoria(matrizGastos, "Total");
    atualizarValorCategoria(categoria, valorInformado);
    atualizarValorCategoria(total, valorInformado);
    atualizarInteface();
    limparCampos();
}