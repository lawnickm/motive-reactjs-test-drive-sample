import React from 'react';

import {monthNames, dayNames, generateDates} from "../../../helpers/utilities";

export const SelectDate = ({setPageNumber, setDateInfo}) => {
    const dates = generateDates();

    const handleSelectDate = (date) => {
        setPageNumber(3);
        setDateInfo(date);
    }
    
    return(
        <div className='test-drive-body-select-date'>
            {dates.map((date, index)=>(
                <div onClick={() => handleSelectDate(date)} className='test-drive-body-dates'>
                    <p key={index}>{dayNames[date.getDay()]}</p>
                    <p key={index}>{date.getDate()}</p>
                    <p key={index}>{monthNames[date.getMonth()]}</p>
                </div>
            ))}
        </div>
    );
};
