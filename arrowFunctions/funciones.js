/* ejecutarSumar = function () {
  let valor1 = recuperarTexto("txtValor1");
  let valor2 = recuperarTexto("txtValor2");
  console.log("VALOR 1 " + valor1 + " VALOR 2 " + valor2);
}; */

ejecutarSumar = () => {
  let valor1 = recuperarEntero("txtValor1");
  let valor2 = recuperarEntero("txtValor2");
  let resultadoSuma;
  resultadoSuma = sumar(valor1, valor2);
  console.log("SUMA====> " + resultadoSuma);
};

ejecutarResta = () => {
  let valor1 = recuperarFloat("txtValor1");
  let valor2 = recuperarFloat("txtValor2");
  let resultadoResta;
  resultadoResta = restar(valor1, valor2);
  console.log("RESTA====> " + resultadoResta);
};

sumar = (sum1, sum2) => {
  let resultado = sum1 + sum2;
  return resultado;
};

restar = (resta1, resta2) => {
  let resultado = resta1 - resta2;
  return resultado;
};
