import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders learn react link', () => {
    //arrange
    const { getByText } = render(<App />);

    //act
    const linkElement = getByText(/The calendar space/i);

    //assert
    expect(linkElement).toBeInTheDocument;
  });
});

describe('App', () => {
  it("contains an element with id='calendar-body'", () => {
    //arrange
    const { container } = render(<App />);

    //act
    const element = container.querySelector("#calendar-body");

    //assert
    expect(element).toBeInTheDocument;
  });
});
