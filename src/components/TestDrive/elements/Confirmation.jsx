import React from "react";
import { formatDate } from "../../../helpers/utilities";

export const Confirmation = ({
  setPageNumber,
  contactInfo,
  selectedDate,
  selectedTime,
}) => {

  return (
    <>
      {contactInfo && selectedDate && selectedTime ? (
        <>
          <div className="test-drive-confirmation-page">
            <h5>Appointment Details</h5>
            <div className="test-drive-confirmation-page-labels">
              <p>
                <strong>Name: </strong>
              </p>
              <p>
                {contactInfo.firstName + " " + contactInfo.lastName}
              </p>
            </div>
            <div className="test-drive-confirmation-page-labels">
              <p>
                <strong>Email: </strong>
              </p>
              <p>{contactInfo.email}</p>
            </div>
            <div className="test-drive-confirmation-page-labels">
              <p>
                <strong>Phone: </strong>
              </p>
              <p>{contactInfo.phone}</p>
            </div>
            <div className="test-drive-confirmation-page-labels">
              <p>
                <strong>Date: </strong>
              </p>
              <p>{ formatDate(selectedDate)+ " " + selectedTime}</p>
            </div>
          </div>
          <div className="test-drive-main-actions">
            <button
              onClick={() => setPageNumber(0)}
              className="test-drive-main-button button"
            >
              Homepage
            </button>
          </div>
        </>
      ) : null}
    </>
  );
};
