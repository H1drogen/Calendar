import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DateColumnMolecule from '../../../../__main__/presentation/components/molecules/DateColumnMolecule/DateColumnMolecule';
import DateUtility from '../../../../common/utility/DateUtility';

describe('DateColumnMolecule', () => {
  it('should render with correct props', () => {
    const date = '2023-09-15';
    const rowElements = [{ id: 1 }, { id: 2 }, { id: 3 }];
    
    const { getByTestId } = render(
      <DateColumnMolecule date={date} rowElements={rowElements} />
    );

    const dateColumnElement = getByTestId("test-date-column");

    // Assert that the component renders with the correct date and rowElements
    expect(dateColumnElement).toHaveAttribute('id', date);
    expect(dateColumnElement.classList).toContain
  });

  it('should add "is-todays-date" class when date is today', () => {
    // Mock DateUtility.isDateObjectTodaysDate to return true for today's date
    jest.spyOn(DateUtility, 'isDateObjectTodaysDate').mockReturnValue(true);

    const date = '2023-09-15';
    const rowElements = [{ id: 1 }, { id: 2 }, { id: 3 }];
    
    const { getByTestId } = render(
      <DateColumnMolecule date={date} rowElements={rowElements} />
    );

    const dateColumnElement = getByTestId("test-date-column");

    // Assert that the "is-todays-date" class is added when the date is today
    expect(dateColumnElement.classList).toContain('is-todays-date');

    // Restore the original implementation of DateUtility.isDateObjectTodaysDate
    DateUtility.isDateObjectTodaysDate.mockRestore();
  });

  it('should add "alternating-month" if the date contains an even month', () => {
    // Mock DateUtility.isDateObjectTodaysDate to return true for today's date
    jest.spyOn(DateUtility, 'isDateMonthAnEvenNumber').mockReturnValue(true);

    const date = '2023-08-15';
    const rowElements = [{ id: 1 }, { id: 2 }, { id: 3 }];
    
    const { getByTestId } = render(
      <DateColumnMolecule date={date} rowElements={rowElements} />
    );

    const dateColumnElement = getByTestId("test-date-column");

    // Assert that the "is-todays-date" class is added when the date is today
    expect(dateColumnElement.classList).toContain('alternating-month');

    // Restore the original implementation of DateUtility.isDateObjectTodaysDate
    DateUtility.isDateMonthAnEvenNumber.mockRestore();
  });
});
