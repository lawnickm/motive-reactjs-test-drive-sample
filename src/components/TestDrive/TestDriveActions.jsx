import React from 'react';

export const TestDriveActions = ({button, buttonClicked}) => {
    return(
        <div className='test-drive-main-actions'>
            <div onClick={()=>buttonClicked()} className='test-drive-main-button button'> {button} </div>
        </div>
    );
};
