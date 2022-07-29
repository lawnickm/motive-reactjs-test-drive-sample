import React, { useState } from "react";
import { TestDriveHeader } from "./layouts/TestDriveHeader";
import { TestDriveBody } from "./layouts/TestDriveBody";
import { LoadingScreen } from "./partials/LoadingScreen";

export const TestDrive = () => {
  const [header, setHeader] = useState(
    <h4>
      Schedule a flexible <strong>test drive</strong>
    </h4>
  );
  const [carInfo, setCarInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="test-drive-main">
      {loading ? (
        <LoadingScreen/>
      ) : null}
        <>
          <TestDriveHeader header={header} carInfo={carInfo} />
          <TestDriveBody setLoading={setLoading} setHeader={setHeader} setCarInfo={setCarInfo} />
        </>
    </div>
  );
};
