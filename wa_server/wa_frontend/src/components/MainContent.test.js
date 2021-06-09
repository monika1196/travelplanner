import React from 'react';
import MainContent from './MainContent';
import { render, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe("MainContent", () => {


    it("if component renders without crashing", () => {
        // render(<MainContent />);
        // console.log(render(<MainContent />))
        const { getByTestId, getAllByTestId } = render(<MainContent />);

        // userEvent.change(getByTestId('select-option'), { target: { value: 'Edmonton' } })
        let options = getAllByTestId('select-option')
        console.log(options)
        // expect(options['Edmonton'].selected).toBeTruthy();
        // expect(options['Mumbai'].selected).toBeFalsy();
        // expect(options['Toronto'].selected).toBeFalsy();
        // expect(options['Kolkata'].selected).toBeFalsy();
        // expect(options['Madrid'].selected).toBeFalsy();


        // const { getByText, getByAltText } = render(<select option={option} />)
        // const controlElement = getByText("select")
        // const dropdownIndicator = getByAltText("dropdown indicator down")
        // expect(controlElement).toBeInTheDocument()
        // expect(dropdownIndicator).toBeInTheDocument()

    })
})