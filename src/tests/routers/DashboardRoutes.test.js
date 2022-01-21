import { mount } from 'enzyme'
import { DashboardRoutes } from "../../routers/DashboardRoutes"
import { AuthContext } from "../../auth/AuthContext"
import { MemoryRouter } from 'react-router-dom'


describe('tests en <DashboardRoutes/>', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Juanes'
        }
    }

    test('debe de mostrarse correctamente - Marvel', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        const span = wrapper.find('.text-info')
        const h1 = wrapper.find('h1')
        expect(wrapper).toMatchSnapshot()
        expect(span.text().trim()).toBe('Juanes')
        expect(h1.text().trim()).toBe('MarvelScreen')
    })

    test('debe de mostrarse correctamente -Dc', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/dc']}>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        const h1 = wrapper.find('h1')
        expect(wrapper).toMatchSnapshot()
        expect(h1.text().trim()).toBe('DC Screen')
    })

})
