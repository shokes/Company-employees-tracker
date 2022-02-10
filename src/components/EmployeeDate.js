const EmployeeDate = function (props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div>
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
};

export default EmployeeDate;

//<div>{props.date.toISOString()}</div>  <div>{props.date.toISOString()}</div>
