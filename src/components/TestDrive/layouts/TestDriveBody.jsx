import React, { useEffect, useState } from "react";

import { useTransition, animated } from "react-spring";

export const TestDriveBody = ({
  component,
  setPageNumber,
}) => {
  const transition = useTransition(component, {
    from: { x: 400, opacity: 0 },
    enter: { x: 0, opacity: 1 },
  });

  useEffect(() => {
    setPageNumber(0)
  }, []);

  return (
    <div className="test-drive-body">
      {transition((style, item) =>
        component ? <animated.div style={style}>{component}</animated.div> : ""
      )}
    </div>
  );
};
