recuperar = () => {
  let frutas = ["pera", "manzana", "sandia"];
  frutas.push("banana");

  return frutas;
};

testRecuperar = () => {
  let misfrutas = recuperar();
  let frutaPrimera = misfrutas[0];
  let frutaSegunta = misfrutas[1];

  console.log("====> 1 " + frutaPrimera);
  console.log("====> 2 " + frutaSegunta);
};

testRecuperarDes = () => {
  let [frutaPrimera, frutaSegunta, frutaTercera] = recuperar();
  console.log("====> 1 " + frutaPrimera);
  console.log("====> 2 " + frutaSegunta);
  console.log("====> 3 " + frutaTercera);
};
