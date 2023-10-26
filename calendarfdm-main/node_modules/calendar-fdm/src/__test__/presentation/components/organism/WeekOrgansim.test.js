import React from 'react';
import { render } from '@testing-library/react';
import WeekOrgansim from '../../../../__main__/presentation/components/organsim/WeekOrgansim/WeekOrgansim';
import '@testing-library/jest-dom';

describe('WeekOrgansim Component', () => {
  const weekStartDate = '2023-09-18';
  const rowElements = [{id: 1}, {id: 2}, {id: 3}];

  it('renders without crashing', () => {
    render(<WeekOrgansim weekStartDate={weekStartDate} rowElements={rowElements} />);
  });

  it('renders week header correctly', () => {
    const { getByText } = render(<WeekOrgansim weekStartDate={weekStartDate} rowElements={rowElements} />);
    const weekHeader = getByText(/Sep 18 - Sep 22/i);
    expect(weekHeader).toBeInTheDocument();
  });

  it('renders 5 DateColumnMolecule components', () => {
    const { getAllByTestId } = render(<WeekOrgansim weekStartDate={weekStartDate} rowElements={rowElements} />);
    const dateColumns = getAllByTestId('test-date-column');
    expect(dateColumns.length).toBe(5);
  });

  // Add more test cases as needed to achieve complete coverage
});