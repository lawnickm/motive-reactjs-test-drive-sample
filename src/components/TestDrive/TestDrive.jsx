import React from 'react';
import {TestDriveHeader} from "./TestDriveHeader"
import {TestDriveFooter} from "./TestDriveFooter"
import {SelectTime} from "./SelectTime"
import {SelectDate} from "./SelectDate"
import {SelectCar} from "./SelectCar"
import { TestDriveBody } from './TestDriveBody';

export const TestDrive = () => {
    return(
        <div className='test-drive-main'>
            <TestDriveHeader/>
            <TestDriveBody/>
        </div>
    );
};
