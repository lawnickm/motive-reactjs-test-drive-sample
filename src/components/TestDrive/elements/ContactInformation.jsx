import React, { useState } from "react";

import { formatDate , phoneNumberIsValid} from "../../../helpers/utilities";

export const ContactInformation = ({
  setLoading,
  handleChangeComponent,
  selectedDate,
  selectedTime
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumberIsValid(phone)) {
      setLoading(true);
      let formattedDate = formatDate(selectedDate)
      const info = { firstName, lastName, email, phone, formattedDate, selectedTime};
      setTimeout(() => {
        setLoading(false);
        handleChangeComponent(4,{"info":info});
      }, 800);
    } else {
      alert("Phone number is not valid.")
    }
  };

  return (
    <div className="test-drive-body-contact-info">
      <form className="test-drive-contact-info-form" onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          value={firstName}
          placeholder={"John"}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          required
        />
        <label>Last Name:</label>
        <input
          value={lastName}
          placeholder={"Doe"}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          required

        />
        <label>Email:</label>
        <input
          value={email}
          placeholder={"johndoe@example.com"}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required

        />
        <label>Phone:</label>
        <input
          value={phone}
          placeholder={"(xxx)-xxx-xxxx"}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          required

        />
        <div className="test-drive-main-actions">
          <button className="test-drive-main-button button">
            Schedule
          </button>
        </div>
      </form>
    </div>
  );
};
