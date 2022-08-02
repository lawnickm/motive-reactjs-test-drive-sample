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
  const [component, setComponent] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [contactInfo, setContactInfo] = useState(null);
  const [dateInfo, setDateInfo] = useState(null);
  const [timeInfo, setTimeInfo] = useState(null);

  useEffect(() => {
    if (pageNumber === 0) {
      setComponent(
        <ContactInformation
          setPageNumber={setPageNumber}
          setContactInfo={setContactInfo}
        />
      );
      setHeader(<h4><strong>Contact</strong> Information</h4>);
    } 
    
    else if (pageNumber === 1) {
      setCarInfo(null);
      setComponent(
        <SelectCar setPageNumber={setPageNumber} setCarInfo={setCarInfo} />
      );
      setHeader(<h4>Schedule a flexible <strong>test drive</strong></h4>);
    } 
    
    else if (pageNumber === 2) {
      setComponent(
        <SelectDate setPageNumber={setPageNumber} setDateInfo={setDateInfo} />
      );
      setHeader(<h4>Select <strong>Date</strong></h4>);
    } 
    
    else if (pageNumber === 3) {
      setComponent(
        <SelectTime
          setPageNumber={setPageNumber}
          setLoading={setLoading}
          setTimeInfo={setTimeInfo}
          selectedDate={dateInfo}
        />
      );
      setHeader(<h4> Select <strong>Time</strong> </h4>);
    } 
    
    else if (pageNumber === 4) {
      setComponent(
        <Confirmation
          setPageNumber={setPageNumber}
          contactInfo={contactInfo}
          selectedDate={dateInfo}
          selectedTime={timeInfo}
        />
      );
      setHeader(<h4><strong>Congratulations!</strong> <br></br> You have scheduled a test drive!</h4>);
    }

  }, [pageNumber]);

  return (
    <div className="test-drive-main">
      {loading ? <LoadingScreen /> : null}
      <>
        <TestDriveHeader
          header={header}
          carInfo={carInfo}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
        <TestDriveBody component={component} setPageNumber={setPageNumber} />
      </>
    </div>
  );
};
