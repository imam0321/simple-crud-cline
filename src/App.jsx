import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const loaderCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loaderCoffees);

  return (
    <div className="m-20">
      <Link to="/addCoffee" className="btn btn-neutral">Add Coffee</Link>
      <h1 className="text-6xl my-10 text-center text-purple-500">
        Hot Hot Cold Coffees {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
