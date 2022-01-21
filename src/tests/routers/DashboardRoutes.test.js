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

    test('debe de mostrarse correctamente', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        const span = wrapper.find('.text-info')
        expect(wrapper).toMatchSnapshot()
        expect(span.text().trim()).toBe('Juanes')
    })

})
