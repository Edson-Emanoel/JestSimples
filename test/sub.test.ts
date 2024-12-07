import { sub } from "../src/sub";

test("Deve testar a função de subtração", () => {
    const resultado = sub(2,3)
    expect(resultado).toBe(-1)
})