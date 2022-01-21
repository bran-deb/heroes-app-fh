import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../../auth/AuthContext'
import { Navbar } from "../../../components/ui/Navbar"
import { types } from '../../../types/types'

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))

//usamos el mount por que usamos el context y evaluamos los hijos de un higher order component
describe('Pruebas en <Navbar/>', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Pepe'
        }
    }
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/']}>
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>
    )

    test('debe de mostrarse correctamente', () => {
        const span = wrapper.find('span')
        expect(wrapper).toMatchSnapshot()
        expect(span.text().trim()).toBe('Pepe')
    })

    test('debe llamar el navigate y el dispatch, con los argumentos', () => {
        wrapper.find('button').prop('onClick')()
        //verifica que el dispatch fue llamado y con que objeto
        expect(contextValue.dispatch).toHaveBeenCalledWith({ 'type': types.logout })
        expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true })
    })
})
