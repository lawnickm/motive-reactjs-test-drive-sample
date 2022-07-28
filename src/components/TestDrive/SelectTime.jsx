import React, { useEffect, useState } from 'react';
import {monthNames, dayNames} from "../constants/DateNames"

export const SelectTime = ({handleSelectDate, selectedDate}) => {
    const [hours,setHours] = useState([])

    useEffect(()=>{
        let tempHours = []
        for (let i = 9; i <= 17; i++){
            let time = (i%12).toString() + ":00 " + ((i>12)? "pm":"am")
            tempHours.push(time)
            time = (i%12).toString() + ":30 " + ((i>12)? "pm":"am")
            tempHours.push(time)
        }
        setHours(tempHours)
    },[])

    console.log(hours)
    return(
        <div className='test-drive-body-select-date select-time'>
            <div onClick={() => handleSelectDate(null)} className='test-drive-body-dates'>
                <p key={1}>{dayNames[selectedDate.getDay()]}</p>
                <p key={2}>{selectedDate.getDate()}</p>
                <p key={3}>{monthNames[selectedDate.getMonth()]}</p>
            </div>
            <div className='test-drive-body-select-times'>
                {hours.map((item,index)=>(
                    <div onClick={null} className='test-drive-body-dates select-times'>
                        <p key={index}>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
