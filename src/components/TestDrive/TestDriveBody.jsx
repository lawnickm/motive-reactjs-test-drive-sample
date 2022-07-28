import React, { useState } from 'react';
import { SelectCar } from './SelectCar';
import { SelectDate } from './SelectDate';
import { SelectTime } from './SelectTime';
import {TestDriveActions} from "./TestDriveActions"

export const TestDriveBody = ({setHeader}) => {
    const [component,setComponent] = useState(<SelectCar/>);
    const [buttonText, setButtonText] = useState("Select Dates");
    const [selectedDate, setSelectedDate] = useState(null);

    const handleSelectDate = (date) => {
        if (date) {
            setSelectedDate(date)
            setComponent(<SelectTime handleSelectDate={handleSelectDate} selectedDate={date}/>)
            setHeader("Select appropiate time for your test drive")
        } else {
            setSelectedDate(null)
            setComponent(<SelectDate handleSelectDate={handleSelectDate} />)
            setHeader("Select appropiate date for your test drive")

        }

    }

    const handleChangeComponent = () => {
        if (buttonText === "Select Dates") {
            setButtonText("Select Time")
            setComponent(<SelectDate handleSelectDate={handleSelectDate} />)
            setHeader("Select appropiate date for your test drive")
        }
    }

    return(
        <div className='test-drive-body'>
            {component}
            <TestDriveActions button={buttonText} buttonClicked={handleChangeComponent}/>
        </div>
    );
};
