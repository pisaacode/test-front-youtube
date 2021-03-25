import { getList } from "../services/YoutubeService"

describe('Test Componente videos', () => {

    test('Deberia traer 5 videos y coincidir con la busqueda', ( done ) => {
        const busquedad = 'test'
        getList(busquedad)
            .then(({videos:{items}, search}) => {
                expect(5).toBe(items.length)
                expect(busquedad).toEqual(search)
                done();
        })
    })
    
    
})
