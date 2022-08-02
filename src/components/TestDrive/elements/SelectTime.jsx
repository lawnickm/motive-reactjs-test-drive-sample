import React, { useEffect, useState } from "react";
import { generateHours, monthNames, dayNames } from "../../../helpers/utilities";

export const SelectTime = ({ handleChangeComponent, selectedDate }) => {
  const [hours, setHours] = useState([]);

  useEffect(() => {
    if (selectedDate) setHours(generateHours(selectedDate));
  }, [selectedDate]);

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
