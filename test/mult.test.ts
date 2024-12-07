import { mult } from "../src/mult"

test("Deve testar a função de multiplicação", () => {
    const resultado = mult(3,2)
    expect(resultado).toBe(6)
})