import { mount } from 'enzyme'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { AuthContext } from '../../../auth/AuthContext'
import { LoginScreen } from '../../../components/login/LoginScreen'
import { types } from '../../../types/types'

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))


describe('Pruebas en LoginScreen', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false,
        }
    }
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                {/* <LoginScreen /> */}
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de realizar el dispatch y la navegacion', () => {
        const handleClick = wrapper.find('button').prop('onClick')
        handleClick()

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'brand'
            }
        })
        expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true })

        localStorage.setItem('lastPath', '/dc')
        handleClick()

        expect(mockNavigate).toHaveBeenCalledWith('/dc', { replace: true })
    })

    test("Debe realizar el dipatch y la navegación", () => {
        // wrapper.find('button').prop('onClick')()
        const handleClick = wrapper.find('button').prop('onClick')
        handleClick()
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            'type': types.login,
            payload: {
                name: 'brand'
            }
        })
        expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true })
        localStorage.setItem('lastPath', '/dc')
        handleClick();
        expect(mockNavigate).toHaveBeenCalledWith("/", { replace: true })
    })
})
