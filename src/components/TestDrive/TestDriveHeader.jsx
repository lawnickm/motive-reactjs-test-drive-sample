import React from 'react';

export const TestDriveHeader = ({header,carInfo=null}) => {
    return(
        <div className='test-drive-main-labelarea'>
            {header}
            {carInfo?
                <p>{carInfo.year + " " + carInfo.make + " " + carInfo.model + " " + carInfo.trim}</p>
            :null}
        </div>
    );
};
