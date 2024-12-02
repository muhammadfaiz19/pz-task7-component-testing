/* eslint-disable @typescript-eslint/no-require-imports */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

// Mocking `createRoot` dan `App`
jest.mock('react-dom/client', () => ({
    createRoot: jest.fn(() => ({
        render: jest.fn(),
    })),
}));

jest.mock('../App', () => ({
    __esModule: true,
    default: () => <div>Mocked App</div>,
}));

describe('Index/Entry File', () => {
    const mockRoot = document.createElement('div');

    beforeEach(() => {
        jest.clearAllMocks(); 

        mockRoot.id = 'root';
        document.body.appendChild(mockRoot);
    });

    afterEach(() => {
        document.body.removeChild(mockRoot);
    });

    it('renders App component inside StrictMode and BrowserRouter', () => {
        require('../main'); 

        // Verifikasi bahwa `createRoot` dipanggil dengan elemen yang benar
        expect(createRoot).toHaveBeenCalledWith(mockRoot);
        
        // Memeriksa bahwa render dipanggil dengan App dalam StrictMode dan BrowserRouter
        const mockRender = (createRoot as jest.Mock).mock.results[0].value.render;
        expect(mockRender).toHaveBeenCalledWith(
            <StrictMode>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </StrictMode>
        );
    });
});
