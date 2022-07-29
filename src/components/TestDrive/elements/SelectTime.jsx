import React, { useEffect, useState } from "react";
import { monthNames, dayNames } from "../../../helpers/utilities";

export const SelectTime = ({ handleChangeComponent, selectedDate }) => {
  const [hours, setHours] = useState([]);

  useEffect(() => {
    let tempHours = [];
    for (let i = 9; i <= 17; i++) {
      let extra = i > 12 ? "pm" : "am";
      let hour = i % 12 == 0 ? i : i % 12;

      let time = hour.toString() + ":00 " + extra;
      tempHours.push(time);
      if (i != 17) {
        time = hour.toString() + ":30 " + extra;
        tempHours.push(time);
      }
    }
    setHours(tempHours);
  }, []);

  return (
    <div className="test-drive-body-select-date select-time">
      <div
        onClick={() => handleChangeComponent(1)}
        className="test-drive-body-dates active"
      >
        <p key={1}>{dayNames[selectedDate.getDay()]}</p>
        <p key={2}>{selectedDate.getDate()}</p>
        <p key={3}>{monthNames[selectedDate.getMonth()]}</p>
      </div>
      <div className="test-drive-body-select-times">
        {hours.map((item, index) => (
          <div
            onClick={() =>
              handleChangeComponent(3, { date: selectedDate, time: item })
            }
            className="test-drive-body-dates select-times"
          >
            <p key={index}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
