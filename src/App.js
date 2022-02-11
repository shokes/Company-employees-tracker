import logo from "./logo.svg";
import Employees from "./components/Employees";
import "./App.css";
import NewEmployeeForm from "./components/NewEmployeeForm";
import EmployeeFilter from "./components/EmployeeFilter";

function App() {
  const employee = [
    {
      name: "Oshoke",
      job: "Frontend developer",
      salary: 10000,
      date: new Date(2022, 6, 23),
    },

    {
      name: "Shokes",
      job: "Backend developer",
      salary: 7000,
      date: new Date(2022, 1, 25),
    },

    {
      name: "Emmanuel",
      job: "Mobile developer",
      salary: 5000,
      date: new Date(2022, 2, 17),
    },

    {
      name: "Oyati",
      job: "Ios developer",
      salary: 4000,
      date: new Date(2022, 3, 11),
    },
  ];
  return (
    <div>
      <NewEmployeeForm />
      <div className="main-container">
        <EmployeeFilter />
        <Employees
          name={employee[0].name}
          job={employee[0].job}
          salary={employee[0].salary}
          date={employee[0].date}
        />

        <Employees
          name={employee[1].name}
          job={employee[1].job}
          salary={employee[1].salary}
          date={employee[1].date}
        />

        <Employees
          name={employee[2].name}
          job={employee[2].job}
          salary={employee[2].salary}
          date={employee[2].date}
        />
        <Employees
          name={employee[3].name}
          job={employee[3].job}
          salary={employee[3].salary}
          date={employee[3].date}
        />
      </div>
    </div>
  );
}

export default App;
