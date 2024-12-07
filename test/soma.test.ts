import { soma } from "../src/soma";

test("Deve testar a função de soma", () => {
    const resultado = soma(1,2)
    expect(resultado).toBe(3)
})