import React, { useState } from 'react';
import { SelectCar } from './SelectCar';
import { SelectDate } from './SelectDate';
import { SelectTime } from './SelectTime';
import {TestDriveActions} from "./TestDriveActions"

export const TestDriveBody = () => {
    const [component,setComponent] = useState(<SelectCar/>);
    const [buttonText, setButtonText] = useState("Select Dates");
    const [selectedDate, setSelectedDate] = useState(null);

    const handleSelectDate = (date) => {
        if (date) {
            setSelectedDate(date)
            setComponent(<SelectTime handleSelectDate={handleSelectDate} selectedDate={date}/>)
        } else {
            setSelectedDate(null)
            setComponent(<SelectDate handleSelectDate={handleSelectDate} />)
        }

    }

    const handleChangeComponent = () => {
        if (buttonText === "Select Dates") {
            setButtonText("Select Time")
            setComponent(<SelectDate handleSelectDate={handleSelectDate} />)
        }
    }

    return(
        <div className='test-drive-body'>
            {component}
            <TestDriveActions button={buttonText} buttonClicked={handleChangeComponent}/>
        </div>
    );
};
