import React from 'react';

export const TestDriveHeader = ({backwards,handleChangeComponent,pageNumber, props, header,carInfo=null}) => {
    return(
        <>
          {backwards ? <span onClick={()=>handleChangeComponent(pageNumber-1,props)} className="test-drive-main-back-button"> {"<"} </span>:null}
          <div className='test-drive-main-labelarea'>
            {header}
            {carInfo?
                <p>{carInfo.year + " " + carInfo.make + " " + carInfo.model + " " + carInfo.trim}</p>
            :null}
        </div>
        </>

    );
};
