import React from 'react';
import Footer from './Footer';
import { render, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe("Footer", () => {


    it("if component renders without crashing", () => {
        // render(<Footer />);
        // console.log(render(<Footer />))
        const { getByFooterStyle, getAllByFooterStyle} = render(<Footer />);
         //expect(true).toBetruthy();

    })
})