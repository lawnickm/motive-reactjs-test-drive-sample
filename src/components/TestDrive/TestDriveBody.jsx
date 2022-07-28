import React, { useEffect, useState } from 'react';
import { SelectCar } from './SelectCar';
import { SelectDate } from './SelectDate';
import { SelectTime } from './SelectTime';

export const TestDriveBody = ({setHeader, setCarInfo}) => {
    const [component,setComponent] = useState(null);

    const handleSelectDate = (date) => {
        if (date) {
            setComponent(<SelectTime handleSelectDate={handleSelectDate} selectedDate={date}/>)
            setHeader(<h4> Select <strong>Time</strong> for your test drive with:</h4>)
        } else {
            setComponent(<SelectDate handleSelectDate={handleSelectDate} />)
            setHeader(<h4> Select <strong>Date</strong> for your test drive with: </h4>)
        }
    }

    const handleChangeComponent = () => {
        setComponent(<SelectDate handleSelectDate={handleSelectDate} />)
        setHeader(<h4> Select <strong>Date</strong> for your test drive with: </h4>)
    }

    useEffect(()=>{
        setComponent(<SelectCar setCarInfo={setCarInfo} handleChangeComponent={handleChangeComponent}/>)
    },[])

    return(
        <div className='test-drive-body'>
            {component}
        </div>
    );
};
