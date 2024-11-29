import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth/types/types';

describe('Pruebas en el authReducer', () => {

    test('Debe retornar el estado por defecto', () => {
        const state = authReducer({logged: false}, {});
        expect(state).toEqual({logged: false});
    });

    test('Debe de (login) llamar el login autenticar y establecer el user', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'juan',
                id: '124'
            }
        }
        const state = authReducer({logged: false}, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        });
    });

    test('Logout y borrar datos el usuario', () => {

        const state = {
            login: true,
            user: {
                name: 'juan',
                id: '124'
            }
        };

        const action = {
            type: types.logout
        };

        const newState = authReducer(state, action);

        expect(newState).toEqual({
            logged: false
        });


    });
});