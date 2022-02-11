import "./EmployeeFilter.css";

const EmployeeFilter = function () {
  const selectHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="employee-flex">
      <h3>Filter by year</h3>
      <select onChange={selectHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default EmployeeFilter;
