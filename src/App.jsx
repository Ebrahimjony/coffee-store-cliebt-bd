import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./Components/CoffeeCard"

function App() {
const coffees=useLoaderData()
  return (
      <div className="m-5">
      <h2 className='text-5xl font-bold'>Coffee making projess:{coffees.length}</h2>

    <div className=" sm:grid grid-cols-2 gap-3">
      {
        coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
      }
    </div>
      </div>
  )
}

export default App
