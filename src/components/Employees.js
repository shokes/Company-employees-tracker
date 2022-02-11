import React, { useState } from "react";

import "./Employees.css";
import EmployeeDate from "./EmployeeDate";
import "./EmployeeDate.css";

const Employees = function (props) {
  const [job, setJob] = useState(props.job);

  const clickHandler = () => {
    console.log(job);
    setJob("android developer");
  };
  return (
    <div className="employees-bg">
      <div className="name">{props.name}</div>
      <div>
        <h2> {job}</h2>
      </div>
      <div>${props.salary}</div>
      <div className="date">
        <EmployeeDate date={props.date} />
      </div>

      <button onClick={clickHandler}>change job</button>
    </div>
  );
};

export default Employees;
