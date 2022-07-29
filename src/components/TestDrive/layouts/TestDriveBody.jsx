import React, { useEffect, useState } from "react";
import { SelectCar } from "../elements/SelectCar";
import { SelectDate } from "../elements/SelectDate";
import { SelectTime } from "../elements/SelectTime";
import { ContactInformation } from "../elements/ContactInformation";
import { Confirmation } from "../elements/Confirmation";

import { useTransition, animated } from "react-spring";

export const TestDriveBody = ({setLoading, setHeader, setCarInfo }) => {
  const [component, setComponent] = useState(null);

  const transition = useTransition(component, {
    from: { x: 400, opacity: 0 },
    enter: { x: 0, opacity: 1 },
  });

  const handleConfirmation = (info) => {
    setComponent(<Confirmation info={info}/>)
    setHeader(
      <h4>
        <strong>Congratulations!</strong> <br></br> You have scheduled a test drive!
      </h4>
    );
  };

  const handleSelectDate = (date) => {
    if (date) {
      setComponent(
        <SelectTime
          setLoading={setLoading}
          handleSelectDate={handleSelectDate}
          handleSelectTime={handleSelectTime}
          selectedDate={date}
        />
      );
      setHeader(
        <h4>
          Select <strong>Time</strong> for your test drive with:
        </h4>
      );
    } else {
      setComponent(<SelectDate setLoading={setLoading} handleSelectDate={handleSelectDate} />);
      setHeader(
        <h4>
          Select <strong>Date</strong> for your test drive with:{" "}
        </h4>
      );
    }
  };

  const handleSelectTime = (time, date) => {
    if (time) {
      setComponent(
        <ContactInformation
          setLoading={setLoading}
          handleConfirmation={handleConfirmation}
          handleSelectDate={handleSelectDate}
          handleSelectTime={handleSelectTime}
          selectedDate={date}
          selectedTime={time}
        />
      );
      setHeader(
        <h4>
          <strong>Contact</strong> Information
        </h4>
      );
    } else {
      setComponent(
        <SelectTime setLoading={setLoading} handleSelectDate={handleSelectDate} selectedDate={date} />
      );
      setHeader(
        <h4>
          Select <strong>Time</strong> for your test drive with:
        </h4>
      );
    }
  };

  const handleChangeComponent = () => {
    setComponent(<SelectDate handleSelectDate={handleSelectDate} />);
    setHeader(
      <h4>
        Select <strong>Date</strong> for your test drive with:{" "}
      </h4>
    );
  };

  useEffect(() => {
    setComponent(
      <SelectCar
        setLoading={setLoading}
        setCarInfo={setCarInfo}
        handleChangeComponent={handleChangeComponent}
      />
    );
  }, []);

  return (
    <div className="test-drive-body">
      {transition((style, item) =>
        component ? <animated.div style={style}>{component}</animated.div> : ""
      )}
    </div>
  );
};
