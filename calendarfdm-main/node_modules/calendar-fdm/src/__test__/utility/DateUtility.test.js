import DateUtility from "../../common/utility/DateUtility";

describe('DateUtility', () => {
  describe('formatDateObjectYYYYMMDD', () => {
    it('should format a Date object to "YYYY-MM-DD" format', () => {
      const date = new Date('2023-09-15T12:00:00Z');
      const formattedDate = DateUtility.formatDateObjectYYYYMMDD(date);
      expect(formattedDate).toBe('2023-09-15');
    });

    it('should return null if a dateObj is not an instance of the Date class', () => {
        const formattedDate = DateUtility.formatDateObjectYYYYMMDD(null);
        expect(formattedDate).toBe(null);
      });
  });

  describe('isDateObjectTodaysDate', () => {
    it('should return true for today\'s date', () => {
      const today = new Date();
      const isToday = DateUtility.isDateObjectTodaysDate(today);
      expect(isToday).toBe(true);
    });

    it('should return false for a different date', () => {
      const date = new Date('2020-09-15T12:00:00Z');
      const isToday = DateUtility.isDateObjectTodaysDate(date);
      expect(isToday).toBe(false);
    });

    it('should return null if a dateObj is not an instance of the Date class', () => {
        const isToday = DateUtility.isDateObjectTodaysDate(null);
        expect(isToday).toBe(null);
      });
  });

  describe('isDateMonthAnEvenNumber', () => {
    it('should return true for an even numbered month', () => {
      const date = new Date("2000-02-08");
      const isAlternateMonth = DateUtility.isDateMonthAnEvenNumber(date);
      expect(isAlternateMonth).toBe(true);
    });

    it('should return false for an odd numbered month', () => {
      const date = new Date("2000-01-08");
      const isAlternateMonth = DateUtility.isDateMonthAnEvenNumber(date);
      expect(isAlternateMonth).toBe(false);
    });

    it('should return null if a dateObj is not an instance of the Date class', () => {
      const formattedDate = DateUtility.isDateMonthAnEvenNumber(null);
      expect(formattedDate).toBe(null);
    });
  });

  describe('addDays', () => {
    it('passing in the 2000-02-08 with 1 day increment will return 2000-02-09 00:00:00', () => {
      let date = new Date("2000-02-08");
      DateUtility.addDays(date, 1);
      expect(date.toISOString()).toBe("2000-02-09T00:00:00.000Z");
    });

    it('passing in the 2000-03-19T15:00:08.123Z with 1 day increment will return 2000-03-20T15:00:08.123Z', () => {
      let date = new Date("2000-03-19T15:00:08.123Z");
      DateUtility.addDays(date, 1);
      expect(date.toISOString()).toBe("2000-03-20T15:00:08.123Z");
    });

    it('passing in the 2000-02-27 with 2 day increment will return 2000-02-29', () => {
      let date = new Date("2000-02-27");
      DateUtility.addDays(date, 2);
      expect(date.toISOString()).toBe("2000-02-29T00:00:00.000Z");
    });

    it('passing in the 2000-03-31 with 1 day increment will return 2000-04-01', () => {
      let date = new Date("2000-03-31");
      DateUtility.addDays(date, 1);
      expect(date.toISOString()).toBe("2000-04-01T00:00:00.000Z");
    });

    it('passing in the 2000-12-31 with 1 day increment will return 2001-01-01', () => {
      let date = new Date("2000-03-31");
      DateUtility.addDays(date, 1);
      expect(date.toISOString()).toBe("2000-04-01T00:00:00.000Z");
    });

    it('passing in the 2000-03-19T15:00:08.123Z with 7 day increment will return 2000-03-26T15:00:08.123Z', () => {
      let date = new Date("2000-03-19T15:00:08.123Z");
      DateUtility.addDays(date, 7);
      expect(date.toISOString()).toBe("2000-03-26T15:00:08.123Z");
    });

    it('passing in an object that is not an instance of Date will do nothing', () => {
        const originalDate = new Date('2023-09-18');
        const originalTime = originalDate.getTime();
        const nonDateObject = 'not a date';

        const setTimeMock = jest.spyOn(originalDate, 'setTime');

        DateUtility.addDays(nonDateObject, 5);

        // Expect that the setTime method was not called
        expect(setTimeMock).not.toHaveBeenCalled();
        expect(originalDate.getTime()).toEqual(originalTime);

        // Restore the original setTime method after the test
        setTimeMock.mockRestore();
    });
  });

  describe('getArrayOfDatesFromDate', () => {
    it('passing in 2000-01-01 with a span of 5 days will return a 5 element array with [2000-01-01, 2000-01-02, 2000-01-03, 2000-01-04, 2000-01-05]', () => {
      const dateArray = DateUtility.getArrayOfDatesFromDate("2000-01-01", 5);
      expect(dateArray).toStrictEqual(["2000-01-01", "2000-01-02", "2000-01-03", "2000-01-04", "2000-01-05"]);
    });

    it('passing in 2000-02-27 with a span of 4 days will return an element array with [2000-02-27, 2000-02-28, 2000-02-29, 2000-03-01]', () => {
      const dateArray = DateUtility.getArrayOfDatesFromDate("2000-02-27", 4);
      expect(dateArray).toStrictEqual(["2000-02-27", "2000-02-28", "2000-02-29", "2000-03-01"]);
    });

    it('passing in 2001-02-27 with a span of 4 days will return an element array with [2001-02-27, 2001-02-28, 2001-03-01, 2001-03-02]', () => {
      const dateArray = DateUtility.getArrayOfDatesFromDate("2001-02-27", 4);
      expect(dateArray).toStrictEqual(["2001-02-27", "2001-02-28", "2001-03-01", "2001-03-02"]);
    });

    it('passing in 2002-12-29 with a span of 6 days will return an element array with [2002-12-29, 2002-12-30, 2002-12-31, 2003-01-01, 2003-01-02, 2003-01-03]', () => {
      const dateArray = DateUtility.getArrayOfDatesFromDate("2002-12-29", 6);
      expect(dateArray).toStrictEqual(["2002-12-29", "2002-12-30", "2002-12-31", "2003-01-01", "2003-01-02", "2003-01-03"]);
    });
  });

});
