import React from "react";

function ToolCard({tools: {logo, name, level}}) {
  return (
    <div>
      <h5>{logo}</h5>
    </div>
  );
}

export default ToolCard;
