import React from "react";

const Section: React.FC<{
  children: React.ReactNode;
  classes?: string;
}> = ({ children, classes }) => {
  return (
    <div className={"w-full px-auto " + classes}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
};

export default Section;
