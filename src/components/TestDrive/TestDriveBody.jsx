import React, { useEffect, useState } from "react";
import { SelectCar } from "./SelectCar";
import { SelectDate } from "./SelectDate";
import { SelectTime } from "./SelectTime";
import { ContactInformation } from "./ContactInformation";

import { useTransition, animated } from "react-spring";

export const TestDriveBody = ({ setHeader, setCarInfo }) => {
  const [component, setComponent] = useState(null);

  const transition = useTransition(component, {
    from: { x: 400, opacity: 0 },
    enter: { x: 0, opacity: 1 },
  });

  const handleSelectDate = (date) => {
    if (date) {
      setComponent(
        <SelectTime
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
      setComponent(<SelectDate handleSelectDate={handleSelectDate} />);
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
        <SelectTime handleSelectDate={handleSelectDate} selectedDate={date} />
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
        {" "}
        Select <strong>Date</strong> for your test drive with:{" "}
      </h4>
    );
  };

  useEffect(() => {
    setComponent(
      <SelectCar
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
