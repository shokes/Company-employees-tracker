import logo from "./logo.svg";
import Employees from "./components/Employees";
import "./App.css";

function App() {
  const employee = [
    {
      name: "oshoke",
      job: "frontend developer",
      salary: 10,
      date: new Date(2022, 6, 23),
    },

    {
      name: "daniel",
      job: "backend developer",
      salary: 7,
      date: new Date(2022, 1, 25),
    },

    {
      name: "john",
      job: "mobile developer",
      salary: 5,
      date: new Date(2022, 2, 17),
    },

    {
      name: "tolu",
      job: "ios developer",
      salary: 4.0,
      date: new Date(2022, 3, 11),
    },
  ];
  return (
    <div>
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
  );
}

export default App;
