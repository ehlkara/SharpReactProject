import React, { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

export default function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="panelDiv">
      <div className="topArrangement">
        <div className="topArrangement">{header}</div>
        <div onClick={handleClick}>
          {expanded ? (
            <GoChevronDown style={{ cursor: "pointer" }} />
          ) : (
            <GoChevronLeft style={{ cursor: "pointer" }} />
          )}
        </div>
      </div>
      {expanded && <div>{children}</div>}
    </div>
  );
}
