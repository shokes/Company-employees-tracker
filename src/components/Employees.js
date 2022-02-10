import "./Employees.css";
import EmployeeDate from "./EmployeeDate";

const Employees = function (props) {
  return (
    <div className="employees-bg">
      <div className="name">{props.name}</div>
      <div>
        <h2>{props.job}</h2>
      </div>
      <div>${props.salary}k</div>
      <div className="date">
        <EmployeeDate date={props.date} />
      </div>
    </div>
  );
};

export default Employees;
