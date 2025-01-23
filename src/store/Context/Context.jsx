import { BrowserRouter } from 'react-router-dom';
import React from 'react';

export default function Contexts({ children }) {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
}