import * as app from "./app";
import * as math from "./math";

test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(addMock).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
    const addMock = jest.spyOn(math, "subtract");
    expect(app.doSubtract(1, 2)).toEqual(1);
    expect(addMock).toHaveBeenCalledWith(1, 2);
  });

  test("calls math.multiply", () => {
    const addMock = jest.spyOn(math, "multiply");
    expect(app.doMultiply(2, 2)).toEqual(4);
    expect(addMock).toHaveBeenCalledWith(2, 2);
  });

  test("calls math.divide", () => {
    const addMock = jest.spyOn(math, "divide");
    expect(app.doDivide(2,10)).toEqual(5);
    expect(addMock).toHaveBeenCalledWith(2,10);
  });
  