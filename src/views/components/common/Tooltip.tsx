import React, { useState } from "react";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

interface ToolTipProps {
  description: JSX.Element;
}

const Tooltip: React.FC<ToolTipProps> = ({ description }) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = (): void => setToggle(!toggle);

  return (
    <div className="tooltip__wrapper">
      <span className="tooltip__icon" onMouseEnter={toggleHandler} onMouseLeave={toggleHandler}>
        <HelpOutlineIcon fontSize="small" />
      </span>
      {toggle && <div className="tooltip__box">{description}</div>}
    </div>
  );
};

export default Tooltip;
