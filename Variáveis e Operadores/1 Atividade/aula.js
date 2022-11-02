const PrecoCombustivel = 5.44 ;
const KmPorLitros = 12;
const DistanciaViagem = 400;

const ValorporLitro = DistanciaViagem / KmPorLitros
const ValorViagem = ValorporLitro * PrecoCombustivel 
console.log('O valor gasto será de  R$:',ValorViagem.toFixed(2));
