import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"
import { shallow } from 'enzyme'

describe('Pruebas en <authReducer/>', () => {
    // const state = {
    //     name: 'jairo',
    //     logged: true
    // }
    test('debe de mostrarse correctamente', () => {
        const wrapper = shallow(<authReducer />)
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {})
        expect(state).toEqual({ logged: false })
    })

    test('debe de autenticar y colocar el name del usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'hernando'
            }
        }
        const state = authReducer({ logged: false }, action)
        expect(state).toEqual({
            logged: true,
            name: 'hernando'
        })
    })

    test('debe de borrar el name del usuario y logged false', () => {
        const action = {
            type: types.logout,
            payload: {
                name: ''
            }
        }
        const state = authReducer({ logged: true, name: 'pedrales' }, action)
        expect(state).toEqual({
            logged: false
        })
    })

})
