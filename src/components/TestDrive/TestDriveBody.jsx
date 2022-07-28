import React, { useState } from 'react';
import { SelectCar } from './SelectCar';
import { SelectDate } from './SelectDate';

import {TestDriveActions} from "./TestDriveActions"

export const TestDriveBody = () => {
    const [component,setComponent] = useState(<SelectCar/>);
    const [buttonText, setButtonText] = useState("Select Dates");
    const [selectedDate, setSelectedDate] = useState(null);

    const handleSelectDate = (date) => {
        console.log(date)
        setSelectedDate(date)

    }

    const handleChangeComponent = () => {
        if (buttonText === "Select Dates") {
            setButtonText("Select Time")
            setComponent(<SelectDate handleSelectDate={handleSelectDate} />)
        } else if (buttonText === "Select Time"){
            setButtonText("Submit")
        } else {
            setButtonText("Select Dates")
        }

    }

    return(
        <div className='test-drive-body'>
            {component}
            <TestDriveActions button={buttonText} buttonClicked={handleChangeComponent}/>
        </div>
    );
};
