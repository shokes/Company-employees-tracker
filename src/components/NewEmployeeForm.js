import React, { useState } from "react";

import "./NewEmployeeForm.css";

const NewEmployeeForm = function () {
  const [enteredName, setEnteredName] = useState("");

  const [enteredJob, setEnteredJob] = useState("");

  const [enteredSalary, setEnteredSalary] = useState("");

  const [enteredDate, setEnteredDate] = useState("");

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const jobHandler = (event) => {
    setEnteredJob(event.target.value);
  };

  const salaryHandler = (event) => {
    setEnteredSalary(event.target.value);
  };

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submittedData = function (event) {
    event.preventDefault();

    const EmployeeData = {
      name: enteredName,
      job: enteredJob,
      salary: enteredSalary,
      date: new Date(enteredDate),
    };

    console.log(EmployeeData);

    setEnteredName("");
    setEnteredJob("");
    setEnteredSalary("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submittedData}>
      <div className="employee-form">
        <div className="employee-input">
          <label>Name</label>
          <input type="text" value={enteredName} onChange={nameHandler} />
        </div>

        <div className="employee-input">
          <label>Job</label>
          <input type="text" value={enteredJob} onChange={jobHandler} />
        </div>

        <div className="employee-input">
          <label>Salary</label>
          <input
            onChange={salaryHandler}
            vlaue={enteredSalary}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="employee-input">
          <label>Date</label>
          <input
            onChange={dateHandler}
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
        <div className="add-employee">
          <button type="submit">Add employee</button>
        </div>
      </div>
    </form>
  );
};

export default NewEmployeeForm;
