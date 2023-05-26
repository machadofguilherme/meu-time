import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { test, expect, describe, beforeEach } from 'vitest';
import React from 'react';

import Home from '../src/pages/Home/Home';

describe('Componente <Home />', () => {
    beforeEach(() => {
         render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
    });

    test('Se o nome da aplicação é renderizado corretamente', () => {
        const appName = screen.getByText('Meu Time');
        expect(appName).toBeDefined();
    })

    test('Se o logo da aplicação é renderizado corretamente', () => {
        const logo = screen.getByTestId('logo');
        expect(logo).toBeDefined();
    })
});
