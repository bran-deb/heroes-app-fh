import { mount } from 'enzyme'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { HeroScreen } from '../../../components/heroes/HeroScreen'

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))

describe('Pruebas en <HeroScreen/>', () => {

    test('NO debe de mostrar el heroScreen si no hay un heroe en la URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path="/hero" element={<HeroScreen />} />
                    <Route path="/" element={<h1>No hero page</h1>} />
                </Routes>
            </MemoryRouter>
        )
        const h1 = wrapper.find('h1')
        expect(h1.text().trim()).toBe('No hero page')
    })

    test('debe de mostrar el heroScreen si existe un hero y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:heroeId" element={<HeroScreen />} />
                    <Route path="/" element={<h1>No hero page</h1>} />
                </Routes>
            </MemoryRouter>
        )
        const row = wrapper.find('.row')
        expect(row.exists()).toBe(true)
    })

    test('debe de regresar a la pantalla anterior', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero/:heroeId' element={<HeroScreen />} />
                    <Route path='/' element={<h1>No hero page</h1>} />
                </Routes>
            </MemoryRouter>
        )
        wrapper.find('button').prop('onClick')()
        expect(mockNavigate).toHaveBeenLastCalledWith(-1)
    })

    test('debe de mostrar el NO HERO PAGE si no tenemos un heroes', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/Hero/marvel-spiderMainn']}>
                <Routes>
                    <Route path='/hero/:heroeId' element={<HeroScreen />} />
                    <Route path='/' element={<h1>No hero page</h1>} />
                </Routes>
            </MemoryRouter>
        )
        expect(wrapper.text()).toBe('No hero page')
    })
})
