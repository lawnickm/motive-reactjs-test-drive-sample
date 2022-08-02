import React, { useState, useEffect } from "react";
import { TestDriveHeader } from "./layouts/TestDriveHeader";
import { TestDriveBody } from "./layouts/TestDriveBody";
import { LoadingScreen } from "./partials/LoadingScreen";
import { SelectCar } from "./elements/SelectCar";
import { SelectDate } from "./elements/SelectDate";
import { SelectTime } from "./elements/SelectTime";
import { ContactInformation } from "./elements/ContactInformation";
import { Confirmation } from "./elements/Confirmation";

export const TestDrive = () => {
  const [header, setHeader] = useState(
    <h4>
      Schedule a flexible <strong>test drive</strong>
    </h4>
  );
  const [carInfo, setCarInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [backwards, setBackward] = useState(false);
  const [component, setComponent] = useState(null);
  const [props, setProps] = useState(null);
  const [pageNumber,setPageNumer] = useState(0);
  
  const handleChangeComponent = (page, keys=null) => {
    setPageNumer(page)
    setProps(keys)
    if (page === 0) {
      setBackward(false);
      setComponent(
        <ContactInformation
          handleChangeComponent={handleChangeComponent}
        />
      );
      setHeader(<h4><strong>Contact</strong> Information</h4>);
    } 
    else if (page === 1) {

      setBackward(true);
      setCarInfo(null)
      setComponent(
        <SelectCar
          contactInfo={keys.info}
          setCarInfo={setCarInfo}
          handleChangeComponent={handleChangeComponent}
        />
      );
      setHeader(<h4>Schedule a flexible <strong>test drive</strong></h4>);
    } else if (page === 2) {
      setBackward(true);
      setComponent(
        <SelectDate 
          contactInfo={keys.info}
          handleChangeComponent={handleChangeComponent} 
        />
      );
      setHeader(<h4>Select <strong>Date</strong></h4>);
    } else if (page === 3) {
      setBackward(true);
      setComponent(
        <SelectTime
          setLoading={setLoading}
          contactInfo={keys.info}
          selectedDate={keys.date}
          handleChangeComponent={handleChangeComponent}
        />
      );
      setHeader(<h4>Select <strong>Time</strong></h4>);
    } else if (page === 4) {
      setBackward(false);
      setComponent(
        <Confirmation
          info={keys.info}
          handleChangeComponent={handleChangeComponent}
        />
      );
      setHeader( <h4> <strong>Congratulations!</strong> <br></br> You have scheduled a test drive! </h4> );
    }
  };
  
  return (
    <div className="test-drive-main">
      {loading ? <LoadingScreen /> : null}
      <>
        <TestDriveHeader
          backwards={backwards}
          header={header}
          carInfo={carInfo}
          props={props}
          pageNumber={pageNumber}
          handleChangeComponent={handleChangeComponent}
        />
        <TestDriveBody
          component={component}
          handleChangeComponent={handleChangeComponent}
        />
      </>
    </div>
  );
};
