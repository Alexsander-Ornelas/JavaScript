const PrecoEtanol = 5.44 ;
const PrecoGasolina = 6.66 ; 
const  CombustivelUsado= 'Etanol';
const KmPorLitros = 10;
const DistanciaViagem = 100;

if(CombustivelUsado ==='Etanol'){
const ValorporLitro = DistanciaViagem / KmPorLitros ;
const ValorViagem = ValorporLitro * PrecoEtanol ;
console.log('O valor gasto será de  R$:',ValorViagem.toFixed(2));
}

else if (CombustivelUsado ==='Gasolina') {
const ValorporLitro = DistanciaViagem / KmPorLitros
const ValorViagem = ValorporLitro * PrecoGasolina ; 
console.log('O valor gasto será de  R$:',ValorViagem.toFixed(2));
}