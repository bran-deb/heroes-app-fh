import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { PrivateRoute } from '../../routers/PrivateRoute'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => <span> Saliendo de aqui </span>
}))


describe('pruebas en <PrivateRoute/>', () => {

    Storage.prototype.setItem = jest.fn()

    test('debe de mostrar el componente si esta autenticado y guardar localstorage', () => {
        const contextValue = {
            user: {
                logged: true,
                name: 'Pepe',
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
        )
        expect(wrapper.text().trim()).toBe('Private Component')
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/')
    })

})
