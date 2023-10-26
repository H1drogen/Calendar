import React from 'react'
import './DateColumnMolecule.css'
import SlotAtom from '../../atoms/SlotAtom/SlotAtom';
import DateUtility from '../../../../../common/utility/DateUtility';

export default class DateColumnMolecule extends React.Component {
  render() {
    const { date, rowElements } = this.props;
    let classString = "day-column";
    if (DateUtility.isDateObjectTodaysDate(new Date(date))) {
      classString += " is-todays-date"
    } else if (DateUtility.isDateMonthAnEvenNumber(new Date(date))) {
      classString = "alternating-month " + classString;
    }
    const slotAtoms = rowElements.map(element => (
      <SlotAtom key={element.id} targetId={element.id} date={date} />
    ));
    
    return (
      <div data-testid="test-date-column" id={date} className={classString}>
        {slotAtoms}
      </div>
    )
  }
}

