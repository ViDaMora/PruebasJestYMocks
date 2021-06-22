import * as app from "./app";
import * as math from "./math";


test("calls math.add", () => {
  // store the original implementation
  const originalAdd = math.add;
  // mock add with the original implementation
  math.add = jest.fn(originalAdd);
  // spy the calls to add
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // override the implementation
  math.add.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // restore the original implementation
  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);
});

/*
RESPUESTA:
En este codigo hay una combinacion de los tests antes vistos con Spy,
entonces, en la linea 7 simplemente capturamos la funcion original de add,
luego en la linea 9 mockeamos la funcion add con su funcionamiento real, 
luego en la linea 11 y 12 evaluamos su resultado esperando que la suma
con el mock, que en este caso es la implementacion de la funcion add, arroje
como valor 3 luego de sumar 1 y 2, lo cual es correcto, y evaluamos que este 
fue llamado con los parametros 1 y 2, lo cual, tambien es correcto. 

Luego de evaluar esto pasamos ahora si, a mockear la implementacion de la funcion,
se pasa a simular su comportamiento en la linea 14, y  definimos que esperamos que esta
arroje "mock", por este motivo, la linea 15 espera un "mock" luego de insertar los valroes 1 y 2,
en la linea 16 se evalua que esta funcion sumulada fuera llamada con los numero 1 y 2, lo cual, es correcto


Por ultimo se restaura la funcion a la original en la linea 18, y  se vuelve a evaluar su implementacion,
pero en este caso, al restaurar la funcion con la original, si hacemos uso del comportamiento de la funcion original, 
por este motivo, es correcto que en la linea 19 al introducir 1,2 esperemos que arroje 3.
*/ 