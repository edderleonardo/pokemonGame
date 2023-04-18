import getPokemonOptions, { getPokemons, getPokemonsNames } from '@/helpers/getPokemonOptions'

describe('getPokemonOptions', () => {
    test('Debe de retornar un arreglo de números', () => {
        const pokemons = getPokemons()
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)

    })

    test('Debe retornar un arreglo de cuatro elmentos', async () => {
        const pokemons = await getPokemonsNames([1, 2, 3, 4])
        expect(pokemons.length).toBe(4)
        expect(pokemons).toStrictEqual([
            { id: 1, name: 'bulbasaur' },
            { id: 2, name: 'ivysaur' },
            { id: 3, name: 'venusaur' },
            { id: 4, name: 'charmander' },
        ])
    })

    test('getPokemonsNames debe de retornar un arreglo mezclado', async() => {
       const pokemons = await getPokemonOptions()
       expect(pokemons.length).toBe(4)
       expect(pokemons).toEqual([
           { id: expect.any(Number), name: expect.any(String) },
           { id: expect.any(Number), name: expect.any(String) },
           { id: expect.any(Number), name: expect.any(String) },
           { id: expect.any(Number), name: expect.any(String) },
       ])
    })
})