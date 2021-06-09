import React from 'react';
import Header from './Header';
import { render, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe("Header", () => {


    it("if component renders without crashing", () => {
        // render(<Header />);
        // console.log(render(<Header />))
        const { getByHeaderStyle, getAllByHeaderStyle} = render(<Header />);
         //expect(true).toBeTruthy();

    })
})