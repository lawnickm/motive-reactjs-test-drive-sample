import React, { useState } from 'react';
import {TestDriveHeader} from "./TestDriveHeader"
import {TestDriveFooter} from "./TestDriveFooter"
import {SelectTime} from "./SelectTime"
import {SelectDate} from "./SelectDate"
import {SelectCar} from "./SelectCar"
import { TestDriveBody } from './TestDriveBody';

export const TestDrive = () => {
    const [header,setHeader] = useState("Schedule a flexible test drive")
    return(
        <div className='test-drive-main'>
            <TestDriveHeader header={header}/>
            <TestDriveBody setHeader={setHeader}/>
        </div>
    );
};
