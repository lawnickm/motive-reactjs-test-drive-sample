import React, { useState } from 'react';
import {TestDriveHeader} from "./TestDriveHeader"
import { TestDriveBody } from './TestDriveBody';

export const TestDrive = () => {
    const [header,setHeader] = useState("Schedule a flexible test drive")
    const [carInfo, setCarInfo] = useState(null)

    return(
        <div className='test-drive-main'>
            <TestDriveHeader header={header} carInfo={carInfo}/>
            <TestDriveBody setHeader={setHeader} setCarInfo={setCarInfo}/>
        </div>
    );
};
