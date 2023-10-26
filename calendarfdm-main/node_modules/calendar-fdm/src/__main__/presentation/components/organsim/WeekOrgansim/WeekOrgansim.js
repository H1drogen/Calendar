import React from 'react';
import './WeekOrgansim.css';
import DateUtility from '../../../../../common/utility/DateUtility';
import DateColumnMolecule from '../../molecules/DateColumnMolecule/DateColumnMolecule';

const WeekOrgansim = ({ weekStartDate, rowElements }) => {
    const dateArray = DateUtility.getArrayOfDatesFromDate(weekStartDate, 5);
    const weekHeader = DateUtility.getWeekHeader(weekStartDate);
    return (
        <div className="week-segment">
            <h3 className="week-header">
                {weekHeader}
            </h3>
            <div className="date-columns">
                <DateColumnMolecule date={dateArray[0]} rowElements={rowElements} />
                <DateColumnMolecule date={dateArray[1]} rowElements={rowElements} />
                <DateColumnMolecule date={dateArray[2]} rowElements={rowElements} />
                <DateColumnMolecule date={dateArray[3]} rowElements={rowElements} />
                <DateColumnMolecule date={dateArray[4]} rowElements={rowElements} />
            </div>
            
        </div>
        
    )
}
export default WeekOrgansim;
