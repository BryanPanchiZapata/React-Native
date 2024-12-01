ejecutarOperacion = (operar) => {
  let valor1 = recuperarFloat("txtValor1");
  let valor2 = recuperarFloat("txtValor2");
  let resultado;
  resultado = operar(valor1, valor2);
  console.log(resultado);
};

sumar = (sum1, sum2) => {
  let resultado = sum1 + sum2;
  return resultado;
};

restar = (resta1, resta2) => {
  let resultado = resta1 - resta2;
  return resultado;
};

ejecutar = (fn) => {
  console.log("Estoy ejecutando funciones");
  fn();
};

imprimir = () => {
  console.log("Estoy imprimiendo");
};

saludar = () => {
  alert("Aprendiendo programacion funcional");
};

testEjecutar = () => {
  ejecutar(imprimir);
  ejecutar(saludar);
  ejecutar(() => {
    alert("soy una funcion anonima");
  });
};
