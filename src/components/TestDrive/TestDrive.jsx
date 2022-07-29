import React, { useState } from 'react';
import {TestDriveHeader} from "./TestDriveHeader"
import { TestDriveBody } from './TestDriveBody';

export const TestDrive = () => {
    const [header,setHeader] = useState(<h4>Schedule a flexible <strong>test drive</strong></h4>)
    const [carInfo, setCarInfo] = useState(null)

    return(
        <div className='test-drive-main'>
            <TestDriveHeader header={header} carInfo={carInfo}/>
            <TestDriveBody setHeader={setHeader} setCarInfo={setCarInfo}/>
        </div>
    );
};
