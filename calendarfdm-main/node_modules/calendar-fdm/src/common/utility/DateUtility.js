export default class DateUtility {
    static today = new Date().toISOString().slice(0, 10);

    static isDateObjectTodaysDate(dateObj) {
        if (dateObj instanceof Date) {
            const dateObjectDate = this.formatDateObjectYYYYMMDD(dateObj);
            return this.today === dateObjectDate;
        } 
        return null
    }

    static formatDateObjectYYYYMMDD(dateObject) {
        if (dateObject instanceof Date) {
            return dateObject.toISOString().slice(0, 10);
        }
        return null;
    }

    static isDateMonthAnEvenNumber(dateObject) {
        if (dateObject instanceof Date) {
            return ((dateObject.getMonth()+1) % 2 === 0);
        }
        return null;
    }

    static addDays(dateObject, numberOfDaysToAdd) {
        if (dateObject instanceof Date) {
            const daysInMilliseconds = 1000 * 60 * 60 * 24;
            dateObject.setTime(dateObject.getTime() + (numberOfDaysToAdd * daysInMilliseconds));
        }
    }

    static getArrayOfDatesFromDate(dateString, numberOfDatesInString) {
        let dateArrayString = [dateString];
        let dateObject = new Date(dateString);
        for (let i=1; i < numberOfDatesInString; i++) {
            DateUtility.addDays(dateObject, 1);
            dateArrayString.push(DateUtility.formatDateObjectYYYYMMDD(dateObject));
        }
        return dateArrayString;
    }

    static getWeekHeader(weekStartDate) {
        const monthHeaderArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let date = new Date(weekStartDate);
        let headerString = monthHeaderArray[date.getMonth()] + " " + date.getDate();
        headerString += " - ";
        DateUtility.addDays(date, 4);
        headerString += monthHeaderArray[date.getMonth()] + " " + date.getDate();
        return headerString;
    }
}