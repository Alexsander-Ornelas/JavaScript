/*      
    Código Condição de Pagamento:
        1- À vista Débito , recebe 10% de desconto;
        2- À vista no Dinheiro ou PIX, recebe 15% de desconto;
        3- Em duas vezes, preço normal de etiqueta sem juros;
        4- Acima de duas vezes , preço normal de etiqueta mais juros de 10%
 */  

const PrecoEtiqueta = 100;
const FormaPagamento = 1;

if(FormaPagamento===1){
    console.log('O preço com desconto vai ficar R$:',PrecoEtiqueta - (PrecoEtiqueta*0.1));
}
else if(FormaPagamento===2){
    console.log('O preço com desconto vai ficar R$:',PrecoEtiqueta - (PrecoEtiqueta*0.5));
}
else if(FormaPagamento===3){
    console.log('O preço vai ficar R$:',PrecoEtiqueta );
}
else if(FormaPagamento===4){
    console.log('O preço com juros vai ficar R$:',PrecoEtiqueta + (PrecoEtiqueta*0.1));
}
else{
    console.log('Opção Inválida');
}
