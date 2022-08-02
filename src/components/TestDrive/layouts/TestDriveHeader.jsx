import React from "react";

export const TestDriveHeader = ({
  setPageNumer,
  pageNumber,
  header,
  carInfo = null,
}) => {
  return (
    <div className="test-drive-main-header">
      {pageNumber != 0 ? (
        <span
          onClick={() => setPageNumer(pageNumber - 1)}
          className="test-drive-main-back-button"
        >
          {"<"}
        </span>
      ) : null}
      <div className="test-drive-main-labelarea">
        {header}
        {carInfo ? (
          <p>
            {carInfo.year +
              " " +
              carInfo.make +
              " " +
              carInfo.model +
              " " +
              carInfo.trim}
          </p>
        ) : null}
      </div>
    </div>
  );
};
