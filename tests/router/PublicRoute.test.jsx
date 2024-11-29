import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth/context/AuthContext';

describe('Pruebas en el <PublicRoute/>', () => {

    test('debe de mostrar el children si no esta autenticado', () => {

        const authState = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ {authState} }>
                <PublicRoute>
                </PublicRoute>
            </AuthContext.Provider>
        );

        screen.debug();


    });

});