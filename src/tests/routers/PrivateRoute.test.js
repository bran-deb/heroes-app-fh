import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { PrivateRoute } from '../../routers/PrivateRoute'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => <span> Saliendo de aqui </span>
}))


describe('pruebas en <PrivateRoute/>', () => {
    //es una funcion jest
    Storage.prototype.setItem = jest.fn()

    const contextValue = {
        user: {
            logged: true,
            name: 'Pepe',
        }
    }

    test('debe de mostrar el componente si esta autenticado y guardar localstorage', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                {/* decimos que el path es "/" */}
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(wrapper.text().trim()).toBe('Private Component')
        //verificamos que sea nombre lastpath en el localstorage y el path '/'
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/')
    })

    test('debe de bloquear el componente si no esta autenticado', () => {
        const contextValue = {
            user: {
                logged: false,
                name: '',
            }
        }
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )//comparamos el contextValue de wrapper con ''saliendo de aqui
        expect(wrapper.text().trim()).toBe('Saliendo de aqui')
    })
})
