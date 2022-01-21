import { mount } from 'enzyme'
import { AuthContext } from '../../auth/AuthContext'
import { AppRouter } from '../../routers/AppRouter'


describe('Pruebas en <AppRouter/>', () => {

    const contextValue = {
        user: {
            logged: false,
            name: '',
        },
        dispatch: jest.fn()
    }

    test('debe de mostrar login si no esta autenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('h1').text().trim()).toBe('LoginScreen')
    })

    test('debe de mostrar el componente de marvel si esta autenticado', () => {
        const contextValue = {
            user: {
                name: 'pepe',
                logged: true,
            },
            dispatch: jest.fn()
        }
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )
        const nav = wrapper.find('nav')
        const classnav = wrapper.find('.navbar')

        expect(wrapper).toMatchSnapshot()
        expect(classnav.exists()).toBe(true)
        expect(nav.hasClass('navbar')).toBe(true)
        expect(nav.prop('className').includes('navbar')).toBe(true)
    })
})
