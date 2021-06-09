import React from 'react';
import App from './App';
import { render, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe("App", () => {


    it("if component renders without crashing", () => {
        // render(<App />);
        // console.log(render(<App />))
        const { getByContainer, getAllByContainer } = render(<App />);
       //expect(true).toBeTruthy();

    })
})